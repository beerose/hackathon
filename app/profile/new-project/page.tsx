'use client'

import { Button } from '@/components/Button'
import { classNames } from '@/src/utils'
import Link from 'next/link'
import { useState } from 'react'

export default function NewProject() {
  const [name, setName] = useState('')
  const [teamMember, setTeamMember] = useState('')
  const [team, setTeam] = useState<string[]>([])
  const [githubUrl, setGithubUrl] = useState('')
  const [ytUrl, setYtUrl] = useState('')
  const [description, setDescription] = useState('')

  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const validate = () => {
    const errors: Record<string, string[]> = {}

    if (!name) {
      errors.name = ['Name is required']
    }

    if (!githubUrl) {
      errors.githubUrl = ['GitHub URL is required']
    }

    if (!ytUrl) {
      errors.ytUrl = ['YouTube URL is required']
    }

    if (!description) {
      errors.description = ['Description is required']
    }

    setErrors(errors)
  }

  return (
    <div className="w-full mt-10 md:mt-16 flex items-center flex-col text-textBase">
      <Link href="/profile">
        <Button
          variant="primary"
          title="Back to your profile"
          back
        />
      </Link>
      <h1 className="text-5xl text-primary mt-4">New project</h1>

      <div className="mt-20 w-full">
        <form
          className="w-full flex flex-col space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            validate()
          }}
        >
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="name"
              className="text-xl text-textBase"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My project"
              className={classNames(
                'font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4',
                errors.name && 'border-red-500'
              )}
            />
            {errors.name && (
              <span className="text-red-500 text-xs font-sans">
                {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2 text-textBase">
            <label
              htmlFor="team"
              className="text-xl text-textBase"
            >
              Team members
            </label>
            <div className="flex gap-x-3 gap-y-3 flex-wrap">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center h-8"
                >
                  <div className="font-sans bg-gray50 text-gray14 rounded-l-sm px-4">
                    {member}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setTeam((prev) => prev.filter((_, i) => i !== index))
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
                id="team"
                name="team"
                value={teamMember}
                onChange={(e) => setTeamMember(e.target.value)}
                placeholder="@username1"
                className="font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4"
              />
              <button
                type="button"
                onClick={() => {
                  setTeam((prev) => [...prev, teamMember])
                }}
                className="text-gray10 font-sans font-semibold bg-gray50 rounded-r-sm text-xs w-1/5 px-4"
              >
                Add member
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="github-url"
              className="text-xl text-textBase"
            >
              GitHub URL
            </label>
            <input
              type="text"
              id="github-url"
              name="github-url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/repo"
              className={classNames(
                'font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4',
                errors.githubUrl && 'border-red-500'
              )}
            />
            {errors.githubUrl && (
              <span className="text-red-500 text-xs font-sans">
                {errors.githubUrl}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="github-url"
              className="text-xl text-textBase"
            >
              Short video YouTube URL
            </label>
            <input
              type="text"
              id="yt-url"
              name="yt-url"
              value={ytUrl}
              onChange={(e) => setYtUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=video-id"
              className={classNames(
                'font-sans w-full h-12 border border-gray14 bg-gray14 rounded-sm px-4',
                errors.ytUrl && 'border-red-500'
              )}
            />
            {errors.ytUrl && (
              <span className="text-red-500 text-xs font-sans">
                {errors.ytUrl}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="description"
              className="text-xl text-textBase"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A short description of your project..."
              className={classNames(
                'font-sans w-full h-32 border border-gray14 bg-gray14 rounded-sm px-4 py-2',
                errors.description && 'border-red-500'
              )}
            />
            {errors.description && (
              <span className="text-red-500 text-xs font-sans">
                {errors.description}
              </span>
            )}
          </div>
          <div className="w-1/3 self-center">
            <Button
              variant="primary"
              title="Save"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
