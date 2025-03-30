'use client'
import { RootLocalState } from '@/store/store'
<<<<<<< HEAD
import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../../../../typing'
=======
import React, {useMemo} from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../../../../typing'
import Image from 'next/image'
>>>>>>> 9682cf3f9fbd94c14bf562b57e6854de74480332

const Cart = () => {

  const  items : Product[] = useSelector((state: RootLocalState)=> state.cartReducer.item );
<<<<<<< HEAD
  console.log(items)

  const totalPrice = items.reduce((total,item)=>  total + item.price * (item.quantity || 1),0  ).toFixed(2);
  

  const vat = parseInt((+totalPrice * 0.15).toFixed(2));

  const totalPriceWithVat = (+totalPrice + vat).toFixed(2);


  return (
    <div className='flex items-center w-full h-[60vh]'>
=======


  // Calcul du prix total, TVA et prix final
  const { totalPrice, vat, totalPriceWithVat, totalQuantity } = useMemo(() => {
    const total = items.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const totalQuantity = items.reduce((acc, item)=> acc +( item.quantity ?? 0),0)
    const vatAmount = total * 0.15;
    return {
      totalPrice: total.toFixed(2),
      vat: vatAmount.toFixed(2),
      totalPriceWithVat: (total + vatAmount).toFixed(2),
      totalQuantity
    };
  }, [items]);
  return (
    <div className='mt-8 min-h-[60vh]'>
>>>>>>> 9682cf3f9fbd94c14bf562b57e6854de74480332
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
<<<<<<< HEAD
            <div className="md:4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
              <div className=' rounded-lg shadow-lg overflow-hidden xl:col-span-4'>
                <h1>Your Cart ({totalPriceWithVat}) </h1>
              </div>
=======
            <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12 mt-10">
              <div className=' rounded-lg shadow-lg overflow-hidden xl:col-span-4'>
                <h1 className='p-4 text-xl bg-blue-600 text-white'>Your Cart ({totalQuantity}) </h1>
                {
                  items.map((item)=>(
                    <div key={item.id}>
                      <div className="flex space-y-5 items-center border-b-2 border-gray-500 space-x-10">
                        <div>
                          <Image src={item.image} height={150} width={150} alt={item.title} />
                        </div>
                        <div>
                          <h1 className=' '>{item.title}</h1>
                          <h1>Category: {item.category} </h1>
                          <h1>Price: {item.price} </h1>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>

                <div className=' xl:col-span-2'>
                  <div className="bg-indigo-500 sticky top-[25vh] p-6 rounded-lg">
                    <h1> Summary</h1>
                    <div className="w-full h-[1.2px]"></div>
                  </div>
                </div>

>>>>>>> 9682cf3f9fbd94c14bf562b57e6854de74480332
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart