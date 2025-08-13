import React, { useEffect, useState } from 'react'
import { default as axios } from 'axios';
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router'
import LoadingPage from "./../../components/LoadingPage/LoadingPage"
export default function Products({Search}) {
const [IsLoading, setIsLoading] = useState(true)
const [Products, setProducts] = useState([])
async function getData() {
try
{
  const word = Search==="" ? "pizza": Search
  setIsLoading(true)
  const {data} = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${Search}`)
  console.log(data)
  setProducts(data.data.recipes)
  setIsLoading(false)  
}
catch (error) 
{
  console.log(error)  
}
}
  useEffect(() => {
    getData()
  } , [Search])
  return(
  <>
  
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-6 my-10 p-5 cursor-pointer   '>
        {
                      IsLoading ? <LoadingPage/> :
          Products.map((product, index) => (
            <Link key={index} to={`/ProductsDetails/${product.id}`}>
        <div  className='shadow-xl p-2 h-110 hover:transform hover:scale-105 transition-all duration-400'>
          <img className='w-full h-70 object-contain' src={product.image_url} alt="" />
          <div className="Cardcontent flex items-center justify-between">
            <div className="titles">
            <h1 className='mt-5 md:text-md '>{product.publisher.split(" ").slice(0, 3).join(" ")}</h1>
            <h1>{product.title}</h1>
            </div>
            <FaHeart className='cursor-pointer' size={20}/>
            </div>
            </div>
            </Link>
          ))
        } 
      </div>
  </>
  )
}