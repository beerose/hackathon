import ExampleApps from "@/components/ExampleApps";
import Projects from "@/components/Projects";
import Resource, { resources } from "@/components/Resource";
import { auth } from "@/edgedb";

export default async function Profile() {
  const session = auth.getSession();

  const user = await session.client.querySingle<{
    email: string;
    username: string;
  }>(`select global current_user {
    email, username
  }`);

  return (
    <div className="mt-10 md:mt-16 flex items-center flex-col text-primary">
      <h1 className="text-5xl text-primary">Welcome, {user?.username}</h1>

      <div className="md:grid md:grid-cols-3 xl:grid-cols-4 mt-20 md:space-x-16">
        <div className="hidden md:flex col-span-1 flex-col space-y-4 flex-wrap">
          <h2 className="text-3xl text-primary">Resources</h2>
          {resources.map((resource) => (
            <Resource key={resource.title} resource={resource} />
          ))}

          <h2 className="mt-10 text-3xl text-primary">Example apps</h2>
          <ExampleApps />
        </div>

        <div className="w-full md:col-span-2 xl:col-span-3 text-center md:text-left">
          <Projects />
        </div>
      </div>
    </div>
  );
}
