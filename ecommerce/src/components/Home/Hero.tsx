import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' w-full h-[calc(100vh-12vh)] flex justify-center flex-col '>
      <div className=' w-4/5 grid items-center grid-cols-1 lg:grid-cols-2 gap-12 mx-auto'>
        <div >
          <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'> Shop test <span className=' text-red-400'> Offer -90</span> offer up {" "} </h1>
          <p className=' text-sm md:text-base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam minima alias laboriosam, corrupti magni blanditiis, a voluptates, autem sit quae dolor? Sit error esse tempore illo, atque neque recusandae voluptatem?
          </p>
          <div className='flex mt-6 items-center space-x-4'>
            <Button size={"lg"}> Shop </Button>
            <Button size={"lg"} className=''> Explore</Button>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Image 
            width={500}
            height={500}
            src={'next.svg'} 
            alt='logo hero' 
            className='lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]'/>
        </div>
      </div>
    </div>
  )
}

export default Hero