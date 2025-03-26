'use client'
import { RootLocalState } from '@/store/store';
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';

const ShoppingCardButton = () => {

  const items = useSelector((state: RootLocalState)=> state.cartReducer.item);
  const quantityTotal = items.reduce((acc, item)=> acc + (item.quantity  || 0), 0);
  return (
    <div className='relative'>
      <span className=' absolute -right-2 -top-3 w-6 h-6 bg-red-500 text-center  rounded-full text-white'>{quantityTotal}</span>
      <ShoppingBag cursor={"pointer"} size={26}/>
    </div>
  )
}

export default ShoppingCardButton