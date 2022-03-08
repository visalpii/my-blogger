import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="/images/logo.png"
            alt="logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-black px-4 py-1 text-white">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <h3>Sign In</h3>
        <h3 className="border border-black px-4 py-1 rounded-full">Get Started</h3>
      </div>
    </header>
  )
}

export default Header
