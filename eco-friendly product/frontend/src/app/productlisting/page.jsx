'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

 
const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);



    const products = [
        { id: 1, name: 'pruduct 1', price: 50, img: 'https://via.placeholder.com/150' },
        { id: 2, name: 'product 2', price: 60, img: 'https://via.placeholder.com/150' },
        { id: 3, name: 'product 3', price: 60, img: 'https://via.placeholder.com/150' },
        { id: 4, name: 'product 4', price: 60, img: 'https://via.placeholder.com/150' },
        { id: 5, name: 'product 5', price: 60, img: 'https://via.placeholder.com/150' },
        { id: 6, name: 'product 6', price: 60, img: 'https://via.placeholder.com/150' },
        { id: 7, name: 'product 7', price: 60, img: 'https://via.placeholder.com/150' },
        { id: 8, name: 'product 8', price: 60, img: 'https://via.placeholder.com/150' },
        // Add more products as needed
    ];



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


        const [userList, setUserList] = useState([]);
    
        const productsData = async () => {
            const res = await axios.get('http://localhost:5000/user/getall');
            console.log(res.status);
            console.table(res.data);
            setUserList(res.data);
        }
    
        useEffect(() => {
            productsData();
        }, []);
    
        

    return (
        <div className=" min-h-screen"
        style={{
            backgroundImage:
              'url("https://i.pinimg.com/564x/93/5d/84/935d84804d113eb2f9f0ff48a23af96c.jpg")'
              
          }}
        >
            {/* Navbar */}
            <nav className="shadow-md p-4 flex justify-between items-center"
            style={{
                backgroundImage:
                  'url("")'
                  
              }}
            >
                <h1 className="text-2xl text-white font-bold">Earthly goods</h1>
                <button
                    className="relative flex items-center bg-green-800 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                >
                    <span>EcoCart</span>
                    <span className="ml-2 bg-red-500 text-xs font-semibold px-2 py-1 rounded-full">
                        {cart.length}
                    </span>
                </button>
            </nav>
            {/* Main Section with product Gallery */}
            <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((products) => (
                    <div key={products.id} className="bg-white rounded-lg shadow-md p-4"
                    style={{
                      
                      }}
                    >
                        <img
                            src={products.img}
                            alt={products.name}
                            className="w-full h-40 object-cover mb-4 rounded"
                        />
                        <h2 className="text-lg font-bold">{products.name}</h2>
                        <p className="text-gray-500 mb-4">₹{products.price}</p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            onClick={() => addToCart(products)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </section>

            {/* Cart Modal */}
            {isCartOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Your Eco Cart</h2>
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