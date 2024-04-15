import { Button } from '@/components/Button'
import Link from 'next/link'

const resources = [
  {
    title: 'EdgeDB + Next.js Guide',
    href: 'https://docs.edgedb.com/guides/tutorials/nextjs_app_router',
  },
  {
    title: 'TypeScript/JavaScript Client Docs',
    href: 'https://docs.edgedb.com/libraries/js',
  },
  {
    title: 'EdgeDB Cheatsheet',
    href: 'https://docs.edgedb.com/database/cheatsheets',
  },
  {
    title: 'EdgeDB Cloud Docs',
    href: 'https://docs.edgedb.com/cloud',
  },
  {
    title: 'Connecting EdgeDB Cloud with Vercel',
    href: 'https://docs.edgedb.com/cloud/deploy/vercel',
  },
  {
    title: 'EddgeDB Live Tutorial',
    href: 'https://docs.edgedb.com/tutorial',
  },
]

export default function Page() {
  return (
    <div className="md:mt-32 flex items-center flex-col">
      <h3 className="text-primary text-5xl font-bold mb-12 text-center">
        Resources
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4 flex flex-col">
          {resources.slice(0, 3).map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
            >
              <Button
                title={resource.title}
                variant="secondary"
              />
            </Link>
          ))}
        </div>
        <div className="space-y-4 flex flex-col">
          {resources.slice(3, 6).map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
            >
              <Button
                title={resource.title}
                variant="secondary"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}