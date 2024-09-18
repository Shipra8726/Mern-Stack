'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const AddProduct = () => {

  const productForm = useFormik({
    initialValues: {
      title: '',
      brand: '',
      category: '',
      quantity: '',
      price: '',
      image: ''
    },
    onSubmit: (values) => {
      console.log(values);

    }
  })

  const handleUpload = (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mypreset');
    formData.append('cloud_name', 'drqxuctyt');

    axios.post('https://api.cloudinary.com/v1_1/drqxuctyt/image/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((result) => {
        console.log(result.data);
        toast.success('File Uploaded Successfully');
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to Upload File');
      });
  }

  return (
    <>
      <div className="min-h-screen flex space-evenly items-center w-full bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/564x/bf/16/e9/bf16e9012fe733d0181dcc978eb3897d.jpg')` }}  >
        <div className='w-96 rounded-lg max-w-md mx-auto'>
          <div className=" rounded-lg border-2 shadow  bg-green-100 p-8">
            <h3 className="uppercase font-bold my-3 text-2xl text-center text-green-600">Add Product</h3>
            <form onSubmit={productForm.handleSubmit} >
              <label >Title</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold"
                id="title"
                onChange={productForm.handleChange}
                value={productForm.values.title}
                type="text" />
              <label>Brand</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold "
               id="Brand"
               onChange={productForm.handleChange}
               value={productForm.values.brand}
               type="text" />
              <label>Category</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold " 
              id="Category" 
              onChange={productForm.handleChange}
              value={productForm.values.category}
              type="text" />
              <label>Quantity</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold "
               id="Quantity" 
               onChange={productForm.handleChange}
               value={productForm.values.quantity}
               type="text" />
              <label>Price</label>
              <input className="border rounded w-full px-3 py-2 mb-4 font-bold "
               id="price" />
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

export default AddProduct;