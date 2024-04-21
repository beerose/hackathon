import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <span className="flex flex-row">
        <h2 className="text-3xl text-primary">Your projects</h2>
        <Link href="/profile/new-project">
          <button className="ml-4 w-8 h-8 flex items-center justify-center bg-primary text-black text-4xl transition-all duration-300 ease-in-out">
            +
          </button>
        </Link>
      </span>
      <div className="flex mt-4">
        <div className="w-48 h-48 border-dotted border-2 border-textPrimary/20 flex items-center justify-center">
          <Link href="/profile/new-project">
            <button className="w-8 h-8 flex items-center justify-center text-primary text-4xl transition-all duration-300 ease-in-out">
              +
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
