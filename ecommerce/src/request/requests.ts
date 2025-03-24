export const getAllCategory = async ()=>{
  try{
    const fetchData =  fetch('https://fakestoreapi.com/products/categories')
  .then(response => response.json())
  return fetchData
  }catch(e){
    return console.warn(e)
  }
}

export const getAllProducts = async ()=>{
  try{
    const fetchData =  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  return fetchData
  }catch(e){
    return console.warn(e)
  }

}
export const getSingleProduct = async (id: string)=>{
  try{
    const fetchData =  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  return fetchData
  }catch(e){
    return console.warn(e)
  }

}
export const getProductByCategory = async (category: string)=>{
  try{
    const fetchData =  fetch(`https://fakestoreapi.com/products/category/${category}`)
  .then(response => response.json())
  return fetchData
  }catch(e){
    return console.warn(e)
  }
}