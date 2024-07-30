import React, { Children } from 'react'

const Button = () => {
  return (
    <button 
     className='border border-black bg-grey-700 text-black rounded px-4 py-2'>
        {children}
    </button>
  )
}

export default Button