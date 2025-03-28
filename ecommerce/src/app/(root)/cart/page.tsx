'use client'
import { RootLocalState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../../../../typing'

const Cart = () => {

  const  items : Product[] = useSelector((state: RootLocalState)=> state.cartReducer.item );
  console.log(items)

  const totalPrice = items.reduce((total,item)=>  total + item.price * (item.quantity || 1),0  ).toFixed(2);
  

  const vat = parseInt((+totalPrice * 0.15).toFixed(2));

  const totalPriceWithVat = (+totalPrice + vat).toFixed(2);


  return (
    <div className='flex items-center w-full h-[60vh]'>
      {
        items.length == 0 && (
          <div className="flex items-center w-full flex-col justify-center">
            <p> panier vide</p>
          </div>
        )
      }
      {
        items.length > 0 && (
          <div className="flex">
            <div className="md:4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
              <div className=' rounded-lg shadow-lg overflow-hidden xl:col-span-4'>
                <h1>Your Cart ({totalPriceWithVat}) </h1>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart