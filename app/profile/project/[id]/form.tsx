"use client";

import { useState } from "react";
import { classNames } from "@/src/utils";
import { type ProjectInfo } from "./page";
import { Button } from "@/components/Button";
import { saveProject } from "./_actions";
import { useFormState, useFormStatus } from "react-dom";

export default function ProjectForm({
  initialData,
}: {
  initialData: ProjectInfo | null;
}) {
  const [state, formAction] = useFormState(saveProject, null);

  const errors = state?.errors ?? {};

  const [teamMember, setTeamMember] = useState("");
  const [team, setTeam] = useState<string[]>(initialData?.team_members ?? []);

  return (
    <form className="w-full flex flex-col space-y-6" action={formAction}>
      <input type="hidden" name="project_id" value={initialData?.id} />

      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-xl text-textBase">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={initialData?.name}
          placeholder="My project"
          className={classNames(
            "font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4",
            errors.name && "border-red-500"
          )}
        />
        {errors.name && (
          <span className="text-red-500 text-xs font-sans">{errors.name}</span>
        )}
      </div>

      <div className="flex flex-col space-y-2 text-textBase">
        <label htmlFor="team" className="text-xl text-textBase">
          Team members
        </label>
        <div className="flex gap-x-3 gap-y-3 flex-wrap">
          {team.map((member, index) => (
            <div key={index} className="flex items-center h-8">
              <div className="font-sans bg-gray50 text-gray14 rounded-l-sm px-4">
                {member}
              </div>
              <button
                type="button"
                onClick={() => {
                  setTeam((prev) => prev.filter((_, i) => i !== index));
                }}
                className="border-gray30 font-sans min-h-full font-bold bg-gray30 px-3 rounded-r-sm text-gray10"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.344296 10.4092C-0.00011602 10.7537 -0.00011614 11.3121 0.344296 11.6565C0.688708 12.0009 1.24711 12.0009 1.59152 11.6565L6.00135 7.24647L10.411 11.6562C10.7554 12.0006 11.3139 12.0006 11.6583 11.6562C12.0027 11.3117 12.0027 10.7533 11.6583 10.4089L7.24858 5.99925L11.6585 1.59003C12.0029 1.24562 12.0029 0.687216 11.6585 0.342805C11.3141 -0.00160706 10.7557 -0.0016073 10.4113 0.342804L6.00135 4.75202L1.59147 0.342293C1.24706 -0.00211853 0.688659 -0.00211853 0.344247 0.342293C-0.000165403 0.686705 -0.000165582 1.24511 0.344246 1.58952L4.75413 5.99925L0.344296 10.4092Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm flex">
          <input
            type="text"
            value={teamMember}
            onChange={(e) => setTeamMember(e.target.value)}
            placeholder="@username1"
            className="font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4"
          />
          <button
            type="button"
            onClick={() => {
              setTeam((prev) => [...new Set([...prev, teamMember]).values()]);
              setTeamMember("");
            }}
            disabled={teamMember.trim() === ""}
            className="text-gray10 font-sans font-semibold bg-gray50 rounded-r-sm text-xs w-1/5 px-4"
          >
            Add member
          </button>
        </div>
        <input type="hidden" name="team_members" value={team.join(",")} />
        {errors.team_members && (
          <span className="text-red-500 text-xs font-sans">
            {errors.team_members}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="github_repo" className="text-xl text-textBase">
          GitHub Repo
        </label>
        <input
          type="text"
          id="github_repo"
          name="github_repo"
          defaultValue={initialData?.github_repo}
          placeholder="username/repo"
          className={classNames(
            "font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4",
            errors.github_repo && "border-red-500"
          )}
        />
        {errors.github_repo && (
          <span className="text-red-500 text-xs font-sans">
            {errors.github_repo}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="website_url" className="text-xl text-textBase">
          Preview Website URL
        </label>
        <input
          type="text"
          id="website_url"
          name="website_url"
          defaultValue={initialData?.website_link}
          placeholder="https://myapp.vercel.app"
          className={classNames(
            "font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4",
            errors.website_url && "border-red-500"
          )}
        />
        {errors.website_url && (
          <span className="text-red-500 text-xs font-sans">
            {errors.website_url}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="yt_video_id" className="text-xl text-textBase">
          Short YouTube video ID
        </label>
        <input
          type="text"
          id="yt_video_id"
          name="yt_video_id"
          defaultValue={initialData?.yt_video_id}
          placeholder="0QEliuNU2fI"
          className={classNames(
            "font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4",
            errors.yt_video_id && "border-red-500"
          )}
        />
        {errors.yt_video_id && (
          <span className="text-red-500 text-xs font-sans">
            {errors.yt_video_id}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="text-xl text-textBase">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={initialData?.description}
          placeholder="A short description of your project..."
          className={classNames(
            "font-sans w-full h-32 border border-gray14 bg-gray14 rounded-sm px-4 py-2",
            errors.description && "border-red-500"
          )}
        />
        {errors.description && (
          <span className="text-red-500 text-xs font-sans">
            {errors.description}
          </span>
        )}
      </div>
      <div className="w-1/3 self-center">
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="primary"
      title={pending ? "Saving..." : "Save"}
      type="submit"
      disabled={pending}
    />
  );
}
