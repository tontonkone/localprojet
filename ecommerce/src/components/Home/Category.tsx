import { getAllCategory } from '@/request/requests'
import React from 'react'

const Category = async () => {

  const categories: string[] = await getAllCategory();

  return (
    <div className='pt-16 pb-12'>
      <h1 className=' font-bold text-center capitalize text-2xl'>Category</h1>
      <div className=' mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 w-4/5'>
      {
        categories.map((category, index)=> (
          <div key={index} className=' rounded-lg p-6 cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md' >
              {category}
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Category