import Link from 'next/link'
import { Button } from './Button'

export const resources = [
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

export default function Resource({
  resource,
}: {
  resource: (typeof resources)[0]
}) {
  return (
    <Link
      key={resource.title}
      href={resource.href}
    >
      <Button
        title={resource.title}
        variant="secondary"
      />
    </Link>
  )
}
