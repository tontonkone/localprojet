import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import ShoppingCardButton from '../Helper/ShoppingCardButton'
import { Heart, User } from 'lucide-react'

export const Nav = () => {
  return (
    <div className=' bg-white sticky h-[12vh] z-[1] top-0 shadow-md'>
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* Logo */}

        <Link href={"/"}>
          <Image width={140} height={140} src={'next.svg'} alt='logo'/>
        </Link>

        {/* Icons */}

          <div className='flex items-center space-x-6'>
          <SearchBox/>
          <Heart cursor={"pointer"}  size={26}/>
          <ShoppingCardButton/>
          <User  cursor={"pointer"} size={26}/>
          </div>
      </div>
    </div>
  )
}
