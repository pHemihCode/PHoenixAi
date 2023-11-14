import React, { useState } from 'react'
import {Outlet, Link, useNavigate} from "react-router-dom"
import logo from '../assets/white.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSabres } from "react-icons/gi";
import { useAuth } from '../context/AuthContext';
function NavBar() {
  const auth = useAuth()
  return (
    <main className='px-7 py-5'>
        <div className='flex justify-between items-center'>
            <div>
               <Link to='/' className='flex items-center'>
                <img src={logo} alt="phoenixAi" className='w-14 h-14 -ml-1.5'/>
                <h1 className='text-white text-2xl font-extrabold'>phoenixAi</h1>
               </Link>
            </div>
           {/* <div className='text-white '>
             {
                show ? <GiHamburgerMenu className='w-10 h-10' onClick={() => setShow(!show)}/> : <GiCrossedSabres className='w-9 h-9' onClick={() => setShow(!show)}/>
             }
           </div> */}
        </div>
        <Outlet />
    </main>
  )
}



export default NavBar