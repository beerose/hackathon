import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { auth } from "@/edgedb";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--openSans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = auth.getSession();
  const signedIn = await session.isSignedIn();

  return (
    <html lang="en">
      <body className={openSans.variable}>
        <main className="flex min-h-screen flex-col items-center p-8 leading-8 relative">
          <div className="fixed z-20 w-full top-0">
            <Navbar
              isSignedIn={signedIn}
              loginURL={auth.getBuiltinUIUrl()}
              signoutURL={auth.getSignoutUrl()}
            />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
