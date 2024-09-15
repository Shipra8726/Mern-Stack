import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex space-evenly items-center w-full bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/564x/bf/16/e9/bf16e9012fe733d0181dcc978eb3897d.jpg')` }}  >
        <div className='w-96 rounded-lg max-w-md mx-auto'>
          <div className=" rounded-lg border-2 shadow  bg-green-100 p-8">
            <h3 className="uppercase font-bold my-3 text-2xl text-center text-green-600">Add Product</h3>
            <form>
              <label >Title</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold" id="title" type="text" />
              <label>Category</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold " id="category" type="text" />         
              <label>Description</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold " id="description" type="text" />         
              <label>Price</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold " id="price"  />         
              <label></label>
              <input className="border rounded w-full px-3 py-2 mb-2 font-bold " id="image" type="file" />         
              <button type='submit' className="border bg-green-600 text-white  px-3 py-2 rounded w-full">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login