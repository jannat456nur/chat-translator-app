import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Link from 'next/link'
import { MessagesSquare } from 'lucide-react'
async function Header () {

  const session = await getServerSession(authOptions)
  return (
    <header className='sticky top-0 z-50'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2
             bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
          <Logo/>
          <div className='flex-1 flex ietms-center justify-end space-x-4'>
            {/* languageselect */}
            {
              session ? (

                <>
                <Link href={'/chat'} prefetch={false}>
                  <MessagesSquare className='text-black dark:text-white' />

                </Link>
                </>
              ):(<Link href={'/Pricing' } prefetch={false}>
                Pricing
                </Link>
          )
            }
            
            <DarkModeToggle />
            <UserButton  session={session}/>
          </div>
        </nav>
        {/* upgradesession */}
    </header>
  )
}

export default Header