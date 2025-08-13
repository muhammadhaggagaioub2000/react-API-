import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function LoadingPage() {
  return (
    <>
<div className= "flex flex-col items-center justify-center ">
<FaSpinner className='animate-spin text-center'size={60}/>
<h1>Loading.......</h1>   
</div>
    </>

)
}
