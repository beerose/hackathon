type Project = {
  id: string
  title: string
  teamMembers: string[]
  description: string
  ytUrl: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group hover:bg-gray30 border-2 border-gray30 rounded-sm p-6 text-textBase">
      <h3 className="group-hover:text-primary text-2xl font-bold mb-2">
        {project.title}
      </h3>
      <div className="flex flex-col space-y-2 font-sans text-base">
        <div>
          <span
            className="
          group-hover:text-primary
          font-semibold
          "
          >
            Team members:
          </span>
          {project.teamMembers.map((teamMember) => (
            <div
              key={teamMember}
              className="text-white rounded-md"
            >
              @{teamMember}
            </div>
          ))}
        </div>
        <div>
          <span
            className="
          group-hover:text-primary
          font-semibold
          "
          >
            Description:
          </span>
          <p
            className="
          text-white
          "
          >
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}
