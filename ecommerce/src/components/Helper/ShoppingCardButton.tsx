'use client'
import { RootLocalState } from '@/store/store';
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import CartSidebar from './CartSidebar';

const ShoppingCardButton = () => {

  const items = useSelector((state: RootLocalState)=> state.cartReducer.item);
  const quantityTotal = items.reduce((acc, item)=> acc + (item.quantity  || 0), 0);
  return (
    <Sheet>
      <SheetTrigger>
      <div className='relative'>
        <span className=' absolute -right-2 -top-3 w-6 h-6 bg-red-500 text-center  rounded-full text-white'>{quantityTotal}</span>
        <ShoppingBag cursor={"pointer"} size={26}/>
      </div>
      </SheetTrigger>
      <SheetContent className=' overflow-auto h-full' >
        <CartSidebar items={items}/>  
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCardButton