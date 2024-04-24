import Link from 'next/link'
import { Button } from './Button'

export default function ExampleApps() {
  return (
    <>
      <div className="space-y-4 flex flex-col">
        <Link href="https://github.com/edgedb/nextjs-edgedb-auth-starter">
          <Button
            title="Template: Next.js + Auth"
            variant="secondary"
          />
        </Link>
      </div>
      <div className="space-y-4 flex flex-col">
        <Link href="https://github.com/beerose/edgedb-ai-booking-assistant">
          <Button
            title="Demo: Vercel AI SDK"
            variant="secondary"
          />
        </Link>
      </div>
    </>
  )
}
