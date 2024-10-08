
import React from 'react'
import logoImage from '../images/logos/logo.jpeg'
import Link from 'next/link'
import { AspectRatio } from './aspect-ratio'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/' prefetch={false} className='overflow-hidden'>
      <div className='flex items-center w-72 h-14'>
        <AspectRatio
          ratio={16 / 9}
          className='flex items-center justify-center'>
          <Image
            alt='Logo'
            priority
            src={logoImage}
            className='rounded-full dark:filter dark:invert'
          />
        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo