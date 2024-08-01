import React from 'react';
import classes from './login.module.css';
import Input from '@/components/Input';
import Button from '@/components/Button';
const Login = () => {

  return (
    <div>
<h1 className='text-center text-2xl font-bold'>Login Page</h1>
  <button className='btn'>Login button</button>
  <button className={classes.myBtn}>Module CSS</button>


  <Input id={'name'} label={'full name'} type={'text'}/> 
  <Input id={'email'} label={'Email Address'} type={'text'}/> 
  <Input id={'password'} label={'Password'} type={'text'}/> 
  <Button>Login</Button>

    </div>
  )
}

export default Login;