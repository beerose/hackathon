"use server";

import { redirect } from "next/navigation";
import { auth } from "@/edgedb";
import { githubRepoExists, youtubeVideoIdExists } from "./_utils";

export async function saveProject(prevState: any, formData: FormData) {
  const session = auth.getSession();

  const errors: Record<string, string> = {};

  const projectId = formData.get("project_id")?.toString() || null;

  const data = {
    name: formData.get("name")?.toString().trim(),
    team_members:
      formData
        .get("team_members")
        ?.toString()
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "") ?? [],
    github_repo: formData.get("github_repo")?.toString().trim(),
    website_url: formData.get("website_url")?.toString().trim(),
    yt_video_id: formData.get("yt_video_id")?.toString().trim(),
    description: formData.get("description")?.toString().trim(),
  };

  if (!data.name) {
    errors["name"] = "Name is required";
  }
  if (!data.github_repo) {
    errors["github_repo"] = "GitHub repo is required";
  } else if (!/^[\w-.]+\/[\w-.]+$/.test(data.github_repo)) {
    errors["github_repo"] = "GitHub repo is not valid";
  }
  if (!data.website_url) {
    errors["website_url"] = "Preview website URL is required";
  } else {
    try {
      new URL(data.website_url);
    } catch {
      errors["website_url"] = "Not a valid url";
    }
  }
  if (!data.yt_video_id) {
    errors["yt_video_id"] = "Youtube video ID is required";
  }
  if (!data.description) {
    errors["description"] = "Description is required";
  }

  const [
    { github_repo_unused, non_existent_users },
    youtube_video_exists,
    github_repo_exists,
  ] = await Promise.all([
    session.client.queryRequiredSingle<{
      non_existent_users: string[];
      github_repo_unused: boolean;
    }>(
      `
    select {
      non_existent_users := (
        select username := array_unpack(<array<str>>$team_members)
        filter not username in User.username
      ),
      github_repo_unused := not exists (
        select Project
        filter .github_repo = <optional str>$github_repo
        and .id ?!= <optional uuid>$project_id
      )
    }
    `,
      {
        team_members: data.team_members,
        github_repo: data.github_repo,
        project_id: projectId,
      }
    ),
    data.yt_video_id ? youtubeVideoIdExists(data.yt_video_id) : null,
    data.github_repo ? githubRepoExists(data.github_repo!) : null,
  ]);

  if (data.github_repo && !github_repo_unused) {
    errors[
      "github_repo"
    ] = `Another project has already been submitted using this repo`;
  }
  if (non_existent_users.length) {
    errors[
      "team_members"
    ] = `The following team members have not signed up to the EdgeDB Hackathon: ${non_existent_users.join(
      ", "
    )}`;
  }
  if (github_repo_exists === false) {
    errors["github_repo"] = "This repo does not exist or is not public";
  }
  if (youtube_video_exists === false) {
    errors["yt_video_id"] =
      "This youtube video does not exist or is not public";
  }

  if (Object.keys(errors).length) {
    return {
      errors: errors,
    };
  }

  if (projectId) {
    await session.client.query(
      `
    update Project
    filter .id = <uuid>$id
    set {
      name := <str>$name,
      other_team_members := (
        select User
        filter .username in array_unpack(<array<str>>$team_members)
      ),
      github_repo := <str>$github_repo,
      yt_video_id := <str>$yt_video_id,
      website_link := <str>$website_url,
      description := <str>$description,
    }
  `,
      { id: projectId, ...data }
    );
  } else {
    await session.client.query(
      `
    insert Project {
      name := <str>$name,
      other_team_members := (
        select User
        filter .username in array_unpack(<array<str>>$team_members)
      ),
      github_repo := <str>$github_repo,
      yt_video_id := <str>$yt_video_id,
      website_link := <str>$website_url,
      description := <str>$description,
    }
  `,
      data
    );
  }
  redirect("/profile");
}
