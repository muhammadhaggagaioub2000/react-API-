import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar({setSearch}) {
    return (
        <>
            <div className="nav bg-slate-950 text-white p-8">
                <div className="container">
                    <div className="navContent flex items-center justify-between">
                        <div className="badge font-bold text-3xl">
                           <Link to="Products"> <h1 className='cursor-pointer font-bold'>Forkify</h1></Link>
                        </div>
                        <input className='bg-white text-black w-50 md:w-100  p-2 rounded-md border-none outline-none' type="text" placeholder='Search' 
                        onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaHeart className='cursor-pointer' size={30} />
                    </div>
                </div>
            </div>

        </>
    )
}
