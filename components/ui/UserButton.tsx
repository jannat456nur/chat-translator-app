'use client'

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Useravatar from './Useravatar'
import { Session } from 'next-auth'
import { Button } from './button'
import { signIn, signOut } from 'next-auth/react'
// console
function UserButton({ session }: { session: Session | null }) {
  if (!session) return (
    <Button variant={'outline'} onClick={() => signIn()}> Sign in</Button>
  )
  //Session...
  return session && (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Useravatar name={session.user?.name} image={session.user?.image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserButton