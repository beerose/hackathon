import { auth } from '@/edgedb'
import { redirect } from 'next/navigation'

const handleSignOut = async () => {
  'use server'

  const { signout } = auth.createServerActions()
  await signout()
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = auth.getSession()
  const signedIn = await session.isSignedIn()

  if (!signedIn) {
    redirect(auth.getBuiltinUIUrl())
  }

  return (
    <div className="min-h-full w-full">
      <div className="relative isolate px-4 pt-8 sm:px-6 xl:px-12">
        <main>
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  )
}
