import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authcontext/AuthContext.js';
import Input from './Input.js'; // Make sure the path to Input is correct

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async data => {
     let data1=(data.usernameOremail.includes('@'))?{email:data.usernameOremail,password:data.password}:{username:data.usernameOremail,password:data.password}; 
    

    try {

      const response=await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data1),
      });
      const responseData=await response.json();
      if(!response.ok){
        throw new Error(responseData.message || 'Something went wrong');
      }
      login(); 
      navigate('/');
      
    } catch (error) {
      console.log(error.message);
      
    }
  

  };

  return (
    <>
      <div className='h-auto w-1/2 my-7 mx-auto flex flex-col bg-gray-50 justify-center items-center'>
        <h1 className='text-4xl font-bold text-red-600 my-10'>Fitness App</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center space-y-4 p-4 w-full max-w-xs'>
          
          {/* Username or Email Input */}
          <Input
            register={register}
            errors={errors}
            name='usernameOremail'
            placeholder='username or email'
            rules={{
              required: 'Username or Email is required',
              validate: value =>
                value.includes('@') ? /^\S+@\S+\.\S+$/.test(value) || 'Invalid email address' : true,
            }}
            className="focus:border-red-500"
          />
          
          {/* Password Input */}
          <Input
          type='password'
            register={register}
            errors={errors}
            name='password'
            placeholder='password'
            rules={{ required: 'Password is required' }}
            className="focus:border-red-500"
          />

          {/* Submit Button */}
          <input
            type="submit"
            value="Submit"
            className="w-[400px] p-3 bg-red-600 text-white rounded-md focus:outline-none focus:border-2 focus:border-red-500 cursor-pointer"
          />
        </form>

        <button className='mb-10'>Forgot password?</button>
      </div>

      <div className='h-[100px] w-1/2 my-16 mx-auto flex flex-col bg-gray-50 justify-center items-center'>
        <h1>Don't have an account? <span className='text-red-600 font-bold '><a href='/signup'>SignUp</a></span></h1>
      </div>
    </>
  );
}

export default Login;
