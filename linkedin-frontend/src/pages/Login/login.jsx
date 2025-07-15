import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp'
const Login = () => {
  return (
    <div className="w-flex flex flex-col items-center justify-center">
      <div className='w-[85%] md:w-[26%] shadow-xl rounded-sm box p-10 '>
        <div className='text-3xl'>Sign In</div>
          <div className='my-5'><GoogleLoginComp /></div>
    
       <div className='flex items-center gap-1'>
             <div className='border-b-1 border-gray-400 w-[45%] '/> <div>or</div> <div className='border-b-1 border-gray-400 w-[45%] my-6 '/> 
        </div>
        
           <div className='flex flex-col gap-4'>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="email" placeholder='Enter your email' className='w-full text-xl border-2 rounded-lg px-5 py-1 ' />
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder='Enter your password' className='w-full text-xl border-2 rounded-lg px-5 py-1 ' />
            </div>


            <div className='w-full hover:bg-blue-900 bg-blue-800 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-2'>
                Sign In
            </div>

        </div>
        

       </div> 
       <div className='mt-4 mb-14 '>New to LinkedIn? <Link to={'/signUp'} className='text-blue-800'>Join Now</Link></div>
    </div>
  )
}

export default Login