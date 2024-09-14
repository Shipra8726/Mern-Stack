import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className="h-[100vh] flex space-evenly items-center w-full bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/564x/5d/d6/4f/5dd64f8c6e2a7b5067115d18e65ed729.jpg')` }}  >
        <div className='w-80 h-[63vh] rounded-lg max-w-md mx-auto'>
          <div className=" rounded-lg border-2 shadow  bg-green-100 p-8">
            <h3 className="uppercase font-bold my-6 text-2xl text-center text-green-600">Login Here</h3>
            <form>
              <label htmlFor="email">Email Address</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold" id="email" type="email" />
              <label htmlFor="password">Password</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold " id="password" type="password" />
              <Link href="#" className="block text-black font-bold">
                Forgot Password
              </Link>
              <button className="border bg-green-600 text-white mt-5 px-3 py-2 rounded w-full">Submit</button>
              <Link href="/signup" className="block text-base text-gray-500 text-center  ">
                Don't Have an Account? <span className='text-red-600'>SignUp</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login