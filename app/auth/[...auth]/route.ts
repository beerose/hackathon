import { redirect } from "next/navigation";
import { auth, client } from "@/edgedb";
import { Octokit } from "octokit";
import { TokenData } from "@edgedb/auth-nextjs/app";

function errorRedirect(errorMessage: string, tokenData?: TokenData | null) {
  if (tokenData?.identity_id) {
    // if github part of signup failed we need to cleanup the identity
    // created by the auth ext so session isn't shown as signed in
    client.execute(`delete ext::auth::Identity filter .id = <uuid>$id`, {
      id: tokenData.identity_id,
    });
  }
  return redirect(`/?signin_error=${encodeURIComponent(errorMessage)}`);
}

export const { GET, POST } = auth.createAuthRouteHandlers({
  async onBuiltinUICallback({ error, tokenData, isSignUp, provider }) {
    if (error || !tokenData) {
      errorRedirect(error?.message ?? "Email verification required");
    }
    if (isSignUp) {
      if (provider != "builtin::oauth_github") {
        errorRedirect(
          "signup not performed with github oauth provider",
          tokenData
        );
      }
      if (!tokenData!.provider_token) {
        errorRedirect("did not receive github token from auth ext", tokenData);
      }
      const octokit = new Octokit({ auth: tokenData!.provider_token });

      try {
        const [
          {
            data: { login },
          },
          { data: emails },
        ] = await Promise.all([
          octokit.rest.users.getAuthenticated(),
          octokit.rest.users.listEmailsForAuthenticatedUser(),
        ]);

        const email = emails.find((email) => email.primary)?.email;

        if (!email) {
          errorRedirect(
            "github account has no primary email configured",
            tokenData
          );
        }

        await auth.getSession().client.query(
          `
        INSERT User {
          username := <str>$username,
          email := <str>$email,
          identity := (global ext::auth::ClientTokenIdentity)
        }
      `,
          { username: login, email: email }
        );
      } catch (err) {
        errorRedirect(
          err instanceof Error ? err.message : String(err),
          tokenData
        );
      }
    }
    redirect("/profile");
  },
  onSignout() {
    redirect("/");
  },
});
