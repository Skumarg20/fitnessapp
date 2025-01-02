import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from './Input'; 

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate();
  const onSubmit =async data => {
    try {
      console.log(JSON.stringify(data));
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });
      const responseData = await response.json();
    
      if(!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }

     
      console.log(responseData);
      navigate('/login');
    } catch (error) {
      console.log(error.message);
      
    }
  };
      
  return (
    <>
      <div className='h-auto w-1/2 my-7 mx-auto flex flex-col bg-gray-50 justify-center items-center '>
        <h1 className='text-4xl font-bold text-red-600 my-10'>Fitness App</h1>
        
        <div className="w-[400px] border border-gray-300 p-4 text-center">
          <p className="break-words">
            Sign up to unlock your <span className='text-red-600 font-bold'><i>best self</i></span> and achieve the <span className='text-red-600 font-bold'>body</span> you've always dreamed of.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center space-y-4 p-4 w-full max-w-xs'>
          
          {/* First Name Input */}
          <Input
          type='text'
            register={register}
            errors={errors}
            name="firstname"
            placeholder="First name"
            rules={{ required: 'First name is required' }}
            className="focus:border-red-500"
          />

          {/* Last Name Input */}
          <Input
          text='text'
            register={register}
            errors={errors}
            name="lastname"
            placeholder="Last name"
            rules={{ required: 'Last name is required' }}
            className="focus:border-red-500"
          />

          {/* Email Input */}
          <Input
        type='email'
            register={register}
            errors={errors}
            name="email"
            placeholder="Email"
            rules={{
              required: 'Email is required',
              validate: value => value.includes('@') ? /^\S+@\S+\.\S+$/.test(value) || 'Invalid email address' : true,
            }}
            className="focus:border-red-500"
          />

          {/* Username Input */}
          <Input
          type='text'
            register={register}
            errors={errors}
            name="username"
            placeholder="Username"
            rules={{ required: 'Username is required' }}
            className="focus:border-red-500"
          />

          {/* Password Input */}
          <Input
            
            register={register}
            errors={errors}
            name="password"
            placeholder="Password"
            type="password"
            rules={{ required: 'Password is required' }}
            className="focus:border-red-500"
          />

          {/* Agreement Text */}
          <p className='w-[400px] m-4'> By signing up, you agree to our Terms of Service, Privacy Policy, and Cookie Policy.</p>

          {/* Submit Button */}
          <input
            type="submit"
            value="Sign Up"
            className="w-[400px] p-3 bg-red-600 text-white rounded-md focus:outline-none focus:border-2 focus:border-red-500 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default SignUp;
