import Link from 'next/link'

interface NavbarProps {
  isSignedIn: boolean
}
export default function Navbar({ isSignedIn }: NavbarProps) {
  return (
    <div className="flex space-x-1 text-xl lg:text-2xl">
      <div className="bg-black rounded-lg rounded-r-none space-x-4 shadow-sm py-2 px-5 font-bold text-white">
        <Link href="/">
          <span className="hover:text-primary cursor-pointer transition-all duration-200">
            <span className="text-primary">/</span>home
          </span>
        </Link>
        <Link href="/">
          <span className="hover:text-primary cursor-pointer transition-all duration-200">
            <span className="text-primary">/</span>resources
          </span>
        </Link>
        <Link href="/">
          <span className="hover:text-primary cursor-pointer transition-all duration-200">
            <span className="text-primary">/</span>project gallery
          </span>
        </Link>
        <Link href="/">
          <span className="hover:text-primary cursor-pointer transition-all duration-200">
            <span className="text-primary">/</span>legal info
          </span>
        </Link>
      </div>
      <div className="flex items-center bg-black/80 rounded-lg rounded-l-none gap-x-2 shadow-sm py-2 px-5 font-bold text-2xl text-white hover:text-primary cursor-pointer transition-all duration-200">
        <div className="rounded-[4px] border-[3px] border-primary w-5 h-5" />
        {isSignedIn ? 'profile' : 'Log in'}
      </div>
    </div>
  )
}
