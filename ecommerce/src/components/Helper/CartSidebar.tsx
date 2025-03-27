'use client'
import React from 'react'
import { Product } from '../../../typing'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { addItem, remove } from '@/store/cartSlice'

type Props = {
  items: Product[]
}

const CartSidebar = ({items}: Props) => {

const dispatch = useDispatch();

const handleRemove = (id:number)=> dispatch(remove({id}))
const handleAdd = (item: Product)=> dispatch(addItem(item))
  return (
    <div className='mb-6 mt-6 h-full'>
      <h1 className=' text-center font-bold text-lg'>Your Cart</h1>
      {items.length === 0 && (
        <>
        <p>Votre panier est vide </p>
        </>
      )}
      {
        items.length > 0 && (
          <div>
            {
              items.map((item)=>(
              <div className=' p-4 pb-4 border-b-2 border-gray-50 flex-col items-center  ' key={item.id}>
                <div>
                <Image src={item?.image} width={50} height={50} alt={item.title} className=' object-cover mb-4'/>
                </div>
                <div>
                  <h1 className=' text-sm font-semibold truncate'>{item.title}</h1>
                  <h1 className=' text-base font-bold'>{item.price * (item.quantity ?? 1)}</h1>
                  <h1 className=' text-base font-bold'> Quantité : {item.quantity}</h1>
                  <Button onClick={()=> handleRemove(item.id)} variant={"destructive"} className=' mx-2' size={"sm"}>Remove</Button>
                  <Button onClick={()=> handleAdd(item)} size={"sm"}>Add</Button>
                </div>
              </div>
              
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default CartSidebar