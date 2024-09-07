import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center w-full bg-cover bg-center"
        style={{ backgroundImage: `url('https://www.druidebio.fr/img/cms/BLOG/Pourquoi-choisir-des-produits-ecologiques-durables-pour-l-hygiene-corporelle.jpg')` }}  >
        <div className='w-96 rounded-lg mx-auto'>
          <div className=" rounded-lg border-2 shadow  bg-gray-50 p-8">
            <h3 className="uppercase font-bold my-3 text-2xl text-center text-black">Sign Up</h3>
            <form>
              <label htmlFor="Name">Name</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold" id="Name" type="Name" />
              <label htmlFor="email">Email Address</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold" id="email" type="email" />
              <label htmlFor="password">Password</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold " id="password" type="password" />
              <label htmlFor=" Confirm Password"> Confirm Password</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold " id="password" type="password" />
              <Link href="#" className="block text-red-400  text-decoration underline ">
                Forgot Password
              </Link>
              <button className="border bg-green-600 text-white mt-5 px-3 py-2 rounded w-full">Submit</button>
              <Link href="#" className="block text-base text-gray-500 text-center  ">
            Already have an account? <span className='text-red-400' >Sign in</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login