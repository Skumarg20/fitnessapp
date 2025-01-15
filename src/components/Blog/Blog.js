import React from 'react';
import { useParams } from 'react-router-dom';
import {blog} from './data'
const BlogPage = () => {
  const { blogId } = useParams();

  const selectedBlog = blog[parseInt(blogId)]; 

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-white">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img src={selectedBlog.image} alt="blog image" className="w-full h-auto rounded-lg"/>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 pl-0 md:pl-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{selectedBlog.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{selectedBlog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
