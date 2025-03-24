'use client'
import React, { useEffect, useState } from 'react'
import { Product} from '../../../typing';
import { getAllProducts } from '@/request/requests';
import { Loader } from 'lucide-react';
import ProductCard from './ProductCard';

const AllProduct = () => {

  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const getData = async ()=> {
      try {
        const products: Product[] = await getAllProducts()
        setProducts(products)
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }

    getData();

  }, []);
  return (
    <div>
      <h1 className=' text-2xl font-bold text-center'>Produits</h1>
      {
        isLoading ? ( 
        <div className='flex justify-center items-center'>
          <Loader size={36} className=' animate-spin'/>
        </div>) : (
          <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12'>
              {
                products?.map((product)=>(
                  <ProductCard key={product.id} product={product} />
                ))
              }
          </div>
        )
      }
    </div>
  )
}

export default AllProduct