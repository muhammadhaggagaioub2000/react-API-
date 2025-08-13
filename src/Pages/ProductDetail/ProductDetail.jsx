import React, { useState , useEffect } from 'react'
import { Link, useParams } from 'react-router'
import axios from 'axios'
import LoadingPage from "./../../components/LoadingPage/LoadingPage"
export default function ProductDetail() {
  const [ProductDetail, setProductDetail] = useState([])
  const [IsLoading, setIsLoading] = useState(true)
  const {id} = useParams()
 async function  getProductDetail(id) { 
  try
  {
    setIsLoading(true)
    const {data} = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    setProductDetail(data.data.recipe)
    console.log(data.data.recipe);
    setIsLoading(false)
        
  }
  catch (error)
  {
    console.log(error)
  }
  }
  useEffect(() => {
    getProductDetail(id)
  }, [])
  return (
    <>
    { IsLoading ? <LoadingPage/> :
    <div className="items p-5 shadow-2xl w-90%">
    <div className='flex flex-col items-center justify-center gap-2 shadow-2xl w-fit m-auto p-2 ' key={ProductDetail.id} >
          <img className='w-full h-70 object-contain' src={ProductDetail.image_url} alt="" />
      <h1>{ProductDetail.publisher}</h1>
      <h1>{ProductDetail.title}</h1>
      <Link to={`/Products`}>
      <button className='bg-slate-950 text-white p-3 cursor-pointer my-3'>Show More Recipes</button>
      </Link>    
    </div>
    </div>}
    </>
  )
}
