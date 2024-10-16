'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ProductDetails = () => {

  const { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);

  const getProductDetails = () => {
    axios.get('http://localhost:5000/product/getbyid/' + id)
      .then((result) => {
        setProductDetails(result.data);
        console.log(result.data);
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProductDetails();
  }, [])


  return (
    <div className="min-h-screen bg-green-50  flex items-center justify-center p-6">
      {
        productDetails !== null ? (
          <div className="bg-white shadow-md rounded-lg w-[90%] overflow-hidden flex flex-col md:flex-row max-w-5xl">

            <div className="md:w-1/2">
              <img
                src={productDetails.image}
                alt="Eco Friendly Product"
                className="w-full h-full object-cover"
              />
            </div>


            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {productDetails.title}
                </h1>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold">Category:</span> {productDetails.category}
                  </p>
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold">Brand:</span> {productDetails.brand}
                  </p>

                </div>

                <div className="mt-3">
                  <p className="text-xl font-semibold text-gray-800">Price:{productDetails.price}</p>
                  <p className="text-sm text-gray-500 mt-1">Free Shipping & 30-day returns</p>
                </div>

                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-800">Key Features:</h2>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                    <li>100% biodegradable materials</li>
                    <li>Eco-friendly packaging</li>
                    <li>Carbon-neutral shipping</li>
                    <li>Reusable and recyclable</li>
                  </ul>
                </div>
              </div>


              <div className="mt-8">
                <button className="w-full bg-green-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-green-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

        ) : (
          <h1>Loading ...</h1>
        )
      }
    </div>
  )
}

export default ProductDetails;