import { ShoppingBag } from 'lucide-react'
import React from 'react'

const ShoppingCardButton = () => {
  return (
    <div className='relative'>
      <span className=' absolute -right-2 -top-3 w-6 h-6 bg-red-500 text-center  rounded-full text-white'>4</span>
      <ShoppingBag cursor={"pointer"} size={26}/>
    </div>
  )
}

export default ShoppingCardButton