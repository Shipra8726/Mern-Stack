import React from 'react'

const Input = ({label, size, id, disabled = false}) => {
  return (
    <div>
<label htmlFor={id}>{label}</label>
<input id={id} type={type disabled={disabled}}
className='block w-full border-2 border-gray-500 pu-1 px-3 rounded' />
        
 </div>
  )
}

export default Input