import { Textsms } from '@mui/icons-material';
import React from 'react';

const Card = ({ image, title, content,id }) => {
    const trancateContent=(text,wordLimit)=>{
        const words=text.split(' ');
      return words.length>wordLimit?words.slice(0,wordLimit).join(' ')+'...':text;
    }
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      <img src={image} alt="blog" className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-5'>{title}</h2>
        <p className='text-gray-700 text-base'>{trancateContent(content,50)}</p>
      </div>
    </div>
  );
}

export default Card;