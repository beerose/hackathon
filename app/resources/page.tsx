import ExampleApps from '@/components/ExampleApps'
import Resource, { resources } from '@/components/Resource'

export default function Page() {
  return (
    <div className="flex flex-col items-center md:w-10/12 lg:w-8/12 xl:w-6/12 z-10">
      <div className="mt-20 md:mt-32 flex items-center flex-col">
        <h3 className="text-primary text-5xl font-bold mb-12 text-center">
          Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4 flex flex-col">
            {resources.slice(0, 3).map((resource) => (
              <Resource
                resource={resource}
                key={resource.href}
              />
            ))}
          </div>
          <div className="space-y-4 flex flex-col">
            {resources.slice(3, 6).map((resource) => (
              <Resource
                resource={resource}
                key={resource.href}
              />
            ))}
          </div>
        </div>
        <h3 className="mt-20 text-primary text-3xl font-bold mb-12 text-center">
          Example apps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <ExampleApps />
        </div>
      </div>
    </div>
  )
}
