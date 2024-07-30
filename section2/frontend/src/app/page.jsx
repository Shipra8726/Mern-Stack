import React from 'react';
import image from 'next.image';

const Home = () => {
  const cartItems = 10;
  const displayMessage = (msg) => {
  return (
           <div className='border border-red-500 bg-red-100 p-3 rounded-md w-1/2 mx-auto my-3'>
            <span className='text-red-500 font-bold'>{msg}</span>
          </div> 
  )
}
return(


    <div>
      {displayMessage('opps! your details are not correct')}
         <h1 style={{color: 'blue', textAlign:'center', fontSize:'50'}}>
          My Home Page
          </h1>

          
          <br/>
          <input type="text" />
          <img src="/next.svg" alt="" />
          <img src="{image.src}" alt="" />

          <h2 className='text-2xl text-center'>CartItems : {cartItems + 5} </h2>
         <button className='btn'>My button</button>

         </div>
  )
}

export default Home

