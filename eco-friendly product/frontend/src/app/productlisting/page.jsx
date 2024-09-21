'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (products) => {
    const existingItem = cart.find((item) => item.id === products.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === products.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  const [productList, setProductList] = useState([]);

  const productsData = async () => {
    const res = await axios.get('http://localhost:5000/product/getall');
    console.log(res.status);
    console.table(res.data);
    setProductList(res.data);
  }

  useEffect(() => {
    productsData();
  }, []);



  return (
    <div className=" min-h-screen w-[100%]  "
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/e7/cf/93/e7cf937185f5301efb33a04071e91020.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='h-[50vh] w-full flex justify-center items-center'>
        <div className='h-full w-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-5xl text-white font-bold ' >Lorem ipsum dolor sit amet.</h1>
          <p className='text-xl text-gray-100 mt-5 mb-5 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestias quidem quaerat tenetur ipsam! Temporibus, maxime. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. </p>

          <input className='w-2/3 py-2 rounded-3xl px-5' type="Search" placeholder='Search here..' />
        </div>

      </div>
      {/* Main Section with product Gallery */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productList.map((products) => (
          <div key={products.id} className="bg-white rounded-lg shadow-md p-4"
            style={{
            }}
          >
            <img
              src={products.image}
              alt={products.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <p className="">{products.brand}</p>
            <h2 className="text-lg font-bold">{products.title}</h2>
            <p className="text-gray-500 mb-4">₹{products.price}</p>
            <Link
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              href={'/product-details/'+products._id}
            >
              View Details
            </Link>

          </div>
        ))}
      </section>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Earthly Goods</h2>
              <button
                className="text-gray-500 hover:text-red-500"
                onClick={() => setIsCartOpen(false)}
              >
                X
              </button>
            </div>

            <div className="cart-items max-h-60 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p>${item.price} x {item.quantity}</p>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold">
                Total: ${totalAmount.toFixed(2)}
              </h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;