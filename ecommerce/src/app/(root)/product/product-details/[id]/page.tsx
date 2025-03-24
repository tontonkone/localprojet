import React from 'react'
import { Product } from '../../../../../../typing';
import { getProductByCategory, getSingleProduct } from '@/request/requests';
import Image from 'next/image';

interface ProductDetailsProps {
  params: { id: string };
}
const ProductDetails = async ({params}: ProductDetailsProps) => {

  const { id } = await params;

  const singleProduct: Product = await getSingleProduct(id);
  const relatedProducts: Product[] = await getProductByCategory(singleProduct.category);

  const num = Math.round(singleProduct?.rating.rate);
  const starArrays = new Array(num).fill(0); 
  console.log(starArrays);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-7 items-center gap-4 mx-auto w-4/5'>
      <div className='col-span-3 mb-6 lg:mb-0'>
        <Image src={singleProduct.image} width={400} height={400} alt={singleProduct.title} />
      </div>
      <div className=' col-span-4'>
        <h1 className=' font-bold'> {singleProduct.title}</h1>
      </div>
    </div>
  )
} 

export default ProductDetails