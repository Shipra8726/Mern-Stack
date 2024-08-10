import React from 'react';
import classes from './login.module.css';
//import Input from '@/components/Input';
//import Button from '@/components/Button';
import {TextField,InputAdornment ,IconButton } from
 '@material-ui/core';
 import {Person, Lock} from '@material-ui/icons';
 //import PersonIcon from '@material-ui/icons/Person';
 //import LockIcon from '@material-ui/icons/Lock';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Login = () => {
     
    const formik = useFormik({
initialValues:{
Email:'',
password:'',
},
validationSchema:Yup.objects({
  email:Yup.string().email("Invalid email address")
  .required("Email address is required"),
  password: Yup.string().required("Password is required")
    }),
 onSubmit:(values) => {
console.log(values);

 }
    })

  return (
    <div classname="cntainer">
      <div classname="signin signin_wrapper">
         <form onsubmit={formik.handleSubmit}>
          <h2>Login Form</h2>
          <TextField
           name= "email" 
          type="text"
          placeholder="Email"
          classname="textfield" 
          inputProps={{
            startAdornment:(
           <InputAdornment>
              <IconButton>
                <Person />
              </IconButton>
           </InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          />
          {
            formik.touched.email && formik.errors.email
            ? something : something,
          }

<TextField
           name= "password" 
          type="password"
          placeholder="Password"
          classname="textfield" 
          inputProps={{
            startAdornment:(
           <InputAdornment>
              <IconButton>
                <Lock/>
              </IconButton>
           </InputAdornment>
            ),
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          />


          <button type="submit">
            Login
          </button>
          
         </form>


      </div>


    </div>
  )
}

export default Login;