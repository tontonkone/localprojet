'use client'
import { Button } from '@/components/ui/button'
import { addItem } from '@/store/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux'
import { Product } from '../../../../../../typing';

const AddCart = ({product}: { product: Product}) => {

  const dispatch = useDispatch();

  const handleAdd = (item:Product)=> dispatch(addItem(item));
  return (
    <Button onClick={()=> handleAdd(product)} className='mt-2'> Add to cart</Button>
  )
}

export default AddCart