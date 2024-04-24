import { Button } from "@/components/Button";
import { auth } from "@/edgedb";
import { classNames } from "@/src/utils";
import Link from "next/link";
import ProjectForm from "./form";

export interface ProjectInfo {
  id: string;
  name: string;
  team_members: string[];
  github_repo: string;
  yt_video_id: string;
  website_link: string;
  description: string;
}

export default async function Project({ params }: { params: { id: string } }) {
  const session = auth.getSession();

  let projectInfo: ProjectInfo | null = null;
  if (params.id !== "new") {
    try {
      projectInfo = await session.client.queryRequiredSingle<ProjectInfo>(
        `select Project {
          id,
          name,
          team_members := .other_team_members.username,
          github_repo,
          yt_video_id,
          website_link,
          description,
        } filter .id = <uuid>$id
        and global current_user in .creators`,
        { id: params.id }
      );
    } catch {
      return <div>Invalid project id</div>;
    }
  }

  return (
    <div className="w-full mt-10 md:mt-16 flex items-center flex-col text-textBase">
      <Link href="/profile">
        <Button variant="primary" title="Back to your profile" back />
      </Link>
      <h1 className="text-5xl text-primary mt-4">New project</h1>

      <div className="mt-20 w-full">
        <ProjectForm initialData={projectInfo} />
      </div>
    </div>
  );
}
