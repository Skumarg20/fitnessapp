import React from 'react';
const Input = ({
  type = 'text', // Added type as a prop with a default value
  register,
  errors,
  name,
  placeholder,
  rules,
  className = '',
  errorClassName = 'text-red-500',
}) => {
  return (
    <div>
      <input
        type={type} // Used type prop here
        placeholder={placeholder}
        className={`w-[400px] p-3 text-black rounded-md focus:outline-none focus:border-2 focus:border-red-500 cursor-pointer ${className}`}
        {...register(name, rules)}
      />
      {errors[name] && (
        <span className={`${errorClassName} text-sm`}>{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default Input;

