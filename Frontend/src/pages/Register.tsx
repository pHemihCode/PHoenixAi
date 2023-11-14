import React from 'react'
import {Link} from 'react-router-dom'

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e
}

const handleSignUp = () => {

}
function Register() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5 absolute top-44 w-80'>
        <div className="input flex flex-col gap-2 ">
            <label htmlFor="name" className='text-white'>Name</label>
            <input type="name" name='name' placeholder='Full name' className='py-1 font-light capitalize rounded-md px-2 outline-none placeholder:italic'/>
        </div>
        <div className="input flex flex-col gap-2 ">
            <label htmlFor="email" className='text-white'>Email</label>
            <input type="email" name='email' placeholder='abc@gmail.com' className='py-1 font-light rounded-md px-2 outline-none placeholder:italic'/>
        </div>
        <div className="input flex flex-col gap-2">
            <label htmlFor="password" className='text-white'>Password</label>
            <input type="password" name='password' placeholder='*******' className='py-1 font-ligh rounded-md px-2 outline-none placeholder:italic'/>
        </div>
        <button className="bg-blue-600 text-white font-normal text-base w-full px-10 py-2 rounded-md hover:bg-blue-900 ">Sign Up</button>
        <div>
            <p className='text-white text-sm font-light text-center'>You have an account ? <Link to='/login' className='text-blue-500'>Login</Link></p>
        </div>
        </form>
</div>
  )
}

export default Register