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
    <div>
      
    </div>
  )
}

export default ProductDetails;