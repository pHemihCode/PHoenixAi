import {Link} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function Login() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()
         const formData = new FormData(e.currentTarget)
         const email = formData.get("email") as string
         const password = formData.get("password") as string
         console.log(email, password)
         try {
            await auth?.login(email, password);
            toast.success("Signed in successfully!")
            navigate("/chat")
         } catch (error) {
            console.log(error)
            toast.error("Signing in failed!")
         }
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-white text-md font-normal absolute top-48'>Welcome back!</p>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5 absolute top-60 w-80'>
          <div className="input flex flex-col gap-2 ">
            <label htmlFor="email" className='text-white text-md'>Email</label>
            <input type="email" name='email' placeholder='abc@gmail.com' className='py-1 rounded-md px-2 outline-none placeholder:italic'/>
          </div>
          <div className="input flex flex-col gap-2">
            <label htmlFor="password" className='text-white text-md'>Password</label>
            <input type="password" name='password' placeholder='*******' className='py-1 capitalize rounded-md px-2 outline-none placeholder:italic'/>
          </div>
          <button className="bg-blue-700 text-white font-normal text-base w-full px-10 py-2 rounded-md ">Log In</button>
          <div>
            <p className='text-white text-sm font-light text-center'>You don't have an account ? <Link to='/register' className='text-blue-500'>Signup</Link></p>
          </div>
        </form>
    </div>
  )
}

export default Login