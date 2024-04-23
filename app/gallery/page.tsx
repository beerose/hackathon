import ProjectCard from '@/components/ProjectCard'

const sample = [
  {
    title: 'Project 1',
    description: 'Description 1',
    teamMembers: ['Member 1', 'Member 2'],
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    teamMembers: ['Member 1'],
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 3',
    description: 'Description 3',
    teamMembers: ['Member 1', 'Member 2'],
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 4',
    description: 'Description 4',
    teamMembers: ['Member 1', 'Member 2'],
    image: 'https://via.placeholder.com/150',
  },
]

export default function Page() {
  return (
    <div className="flex flex-col items-center md:w-10/12 lg:w-8/12 xl:w-6/12 z-10">
      <div className="mt-20 md:mt-32 flex items-center flex-col">
        <h3 className="text-primary text-5xl font-bold mb-12 text-center">
          Project Gallery
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sample.map((project) => (
            <ProjectCard
              project={project}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
