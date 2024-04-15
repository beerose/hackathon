'use client'

import Link from 'next/link'

import { Disclosure } from '@headlessui/react'
import { classNames } from '@/src/utils'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Resources', href: '/resources' },
  { name: 'Project Gallery', href: '/gallery' },
  { name: 'Legal Info', href: '/legal' },
]

interface NavbarProps {
  isSignedIn: boolean
}
export default function Navbar({ isSignedIn }: NavbarProps) {
  const pathname = usePathname()

  return (
    <div className="w-full">
      <div className="mt-8 space-x-1 text-xl lg:text-2xl hidden md:flex justify-center shadow-md">
        <div className="bg-black rounded-lg rounded-r-none space-x-4 shadow-sm py-2 px-5 font-bold text-white flex items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
            >
              <span className="hover:text-primary cursor-pointer transition-all duration-200">
                <span className="text-primary">/</span>
                <span
                  className={
                    pathname === item.href ? 'text-primary' : 'text-white'
                  }
                >
                  {item.name}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center bg-black/80 rounded-lg rounded-l-none gap-x-2 shadow-sm py-2 px-5 font-bold text-white hover:text-primary cursor-pointer transition-all duration-200">
          <div className="rounded-[4px] border-[3px] border-primary w-5 h-5" />
          {isSignedIn ? 'profile' : 'Log in'}
        </div>
      </div>
      <Disclosure
        as="nav"
        className="w-full md:hidden relative"
      >
        {({ open }) => (
          <>
            <div
              className={classNames(
                'mx-auto px-8 py-4',
                open ? 'bg-black' : ''
              )}
            >
              <div className="flex h-16 justify-between">
                <div className="-mr-2 flex items-center md:hidden ml-auto">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <IconX aria-hidden="true" />
                    ) : (
                      <IconBurger aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden bg-black w-full absolute">
              <div className="pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-full"
                  >
                    <Disclosure.Button
                      key={item.name}
                      as="span"
                      className={classNames(
                        pathname === item.href
                          ? 'bg-primary text-black'
                          : 'border-transparent text-gray-400 hover:bg-primary hover:text-black',
                        'block py-4 pl-5 text-xl font-bold w-full'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      <span className="cursor-pointer transition-all duration-200 w-full">
                        <span className="text-primary">/</span>
                        {item.name}
                      </span>
                    </Disclosure.Button>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

const IconBurger = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="2"
      width="24"
      height="4"
      rx="2"
      fill="#CCCCCC"
    />
    <rect
      y="10"
      width="24"
      height="4"
      rx="2"
      fill="#CCCCCC"
    />
    <rect
      y="18"
      width="24"
      height="4"
      rx="2"
      fill="#CCCCCC"
    />
  </svg>
)

export const IconX = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="2.82837"
      width="4"
      height="26.8727"
      rx="2"
      transform="rotate(-45 0 2.82837)"
      fill="#B3B3B3"
    />
    <rect
      x="2.82837"
      y="21.8303"
      width="4"
      height="26.8727"
      rx="2"
      transform="rotate(-135 2.82837 21.8303)"
      fill="#B3B3B3"
    />
  </svg>
)
