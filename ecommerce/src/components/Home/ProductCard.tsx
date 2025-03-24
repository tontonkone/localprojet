'use client'
import React from 'react'
import { Product } from '../../../typing'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag, StarIcon } from 'lucide-react'
import { Button } from '../ui/button'
type Props = {
  product: Product
}

const ProductCard = ({product}: Props) => {
  
  const num = Math.round(product.rating.rate);
  const arrayRanting = new Array(num).fill(0);

  return (
    <div className='p-4'>
      <div className=' w-[200px] h-[150px] object-contain'>
        <Image width={100} height={100} alt="produit" src={product.image} className=' object-contain w-[80%] h-[80%]'/>
      </div>
      <p className=' text-xs capitalize text-center'>{product.category}</p>
      <Link rel="stylesheet" href={`/product/product-details/${product.id}`}>
        <h1 className=' cursor-pointer text-lg hover:underline hover:text-blue-600 transition-all sm:truncate text-black font-semibold' >{product.title}</h1>
      </Link>
      <div className='flex items-center'>
      {
        arrayRanting.map(()=> {
          return <StarIcon key={Math.random() * 1000} size={18} fill='yellow' className=' text-yellow-300'/>
        })
      }
      </div>
      <div className=' mt-2 flex items-center space-x-2'>
        <p className=' text-black text-base line-through font-semibold opacity-60'>{ `${(product.price + 10).toFixed(2)} €`}</p>
        <p className=' font-bold text-lg opacity-80'>{product.price}</p>
      </div>
      <div className='mt-2 space-x-2 flex items-center'>
        <Button size={'icon'}>
          <ShoppingBag size={18}/>
        </Button>
        <Button size={'icon'} className=' bg-red-600'>
          <Heart size={18}/>
        </Button>
      </div>
    </div>
  )
}

export default ProductCard