'use client'
import { RootLocalState } from '@/store/store'
import React, {useMemo} from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../../../../typing'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Cart = () => {

  const  items : Product[] = useSelector((state: RootLocalState)=> state.cartReducer.item );


  // Calcul du prix total, TVA et prix final
  const { totalPrice, vat, totalPriceWithVat, totalQuantity } = useMemo(() => {
    const total = items.reduce((acc, item) => acc + (item.price || 0) * (item.quantity ?? 1), 0);
    const totalQuantity = items.reduce((acc, item)=> acc +( item.quantity ?? 1 ),0)
    const vatAmount = total * 0.15;
    return {
      totalPrice: total.toFixed(2),
      vat: vatAmount.toFixed(2),
      totalPriceWithVat: (total + vatAmount).toFixed(2),
      totalQuantity
    };
  }, [items]);

  const {user} = useUser()
  return (
    <div className='mt-8 min-h-[60vh]'>
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

                <div className=' xl:col-span-2 text-white font-bold'>
                  <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg">
                    <h1 className=' text-2xl font-semibold text-white mb-8 mt-8'> Summary</h1>
                    <div className="w-full h-[1.2px] bg-white opacity-20"></div>
                    <div className="semi-bold uppercase flex items-center justify-between mt-10 mb-10">
                      <span>price</span>
                      <span>{totalPrice}</span>
                    </div>
                    <div className="semi-bold text-xl uppercase flex items-center justify-between mt-10 mb-10">
                      <span>Vat</span>
                      <span>{vat}</span>
                    </div>
                    <div className="semi-bold uppercase flex items-center justify-between mt-10 mb-10">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                                      <div className="w-full h-[1.2px] bg-white opacity-20"></div>
                    <div className="semi-bold uppercase flex items-center justify-between mt-10 mb-10">
                      <span>Total</span>
                      <span>{totalPriceWithVat}</span>
                    </div>
                    {
                      !user && (
                        <Link href={'/sign-in'}>
                          <Button className=' bg-orange-500 w-full'> Checkout</Button>
                        </Link>
                      )
                    }
                    {
                      user && (
                        <Button className=' bg-orange-300 w-full' > Paypal</Button>
                      )
                    }
                  </div>

                </div>

            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart