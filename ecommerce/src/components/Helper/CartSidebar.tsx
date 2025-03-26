import React from 'react'
import { Product } from '../../../typing'

type Props = {
  items: Product[]
}

const CartSidebar = ({items}: Props) => {
  return (
    <div className='mb-6 mt-6 h-full'>
      <h1 className=' text-center font-bold text-lg'>Your Cart</h1>
      {items.length === 0 && (
        <>
        <p>Votre panier est vide </p>
        </>
      )}
    </div>
  )
}

export default CartSidebar