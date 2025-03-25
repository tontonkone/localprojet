import React from 'react'
import { Product } from '../../../../../../typing';
import { getProductByCategory, getSingleProduct } from '@/request/requests';
import Image from 'next/image';
import { StarIcon } from 'lucide-react';
import AddCart from './add-cart';
import ProductCard from '@/components/Home/ProductCard';

interface ProductDetailsProps {
  params: { id: string };
}
const ProductDetails = async ({params}: ProductDetailsProps) => {

  const { id } = await params;

  const singleProduct: Product = await getSingleProduct(id);
  const relatedProducts: Product[] = await getProductByCategory(singleProduct.category);

    console.log(relatedProducts);
  const num = Math.round(singleProduct?.rating.rate);
  const starArrays = new Array(num).fill(0); 
  console.log(starArrays);
  return (
    <div className="mt-20">
    <div className='grid grid-cols-1 lg:grid-cols-7 items-center gap-4 mx-auto w-4/5'>
      <div className='col-span-3 mb-6 lg:mb-0'>
        <Image src={singleProduct.image} width={400} height={400} alt={singleProduct.title} />
      </div>
      <div className=' col-span-4'>
        <h1 className=' font-bold'> {singleProduct.title}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex items-center">
            {
              starArrays.map(()=>{
                return <StarIcon key={Math.random() * 5000} size={20} fill='yellow' className=' text-yellow-600' />
              })
            }
          </div>
            <p className=' text-base text-gray-400 font-semibold'> {singleProduct?.rating.count} avis</p>
        </div>
            <span className="w-1/4 h-[1.3px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
            <h1 className='lg:text-6xl text-3xl md:text-4xl font-bold'>{singleProduct.price.toFixed(2)} €</h1>

            <p className=' text-base text-gray-300'>{singleProduct.description}</p>
            <p className=' text-gray-400 text-sm'>Category: {singleProduct.category} </p>
            <p className=' text-sm text-gray-400'>tag: DGV</p>
            <AddCart/>
      </div>
    </div>
          <div className="w-4/5 mx-auto mt-16">
        <h1 className="text-bold">Product related </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts.map((product)=>(
            <ProductCard  key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>

  )
} 

export default ProductDetails