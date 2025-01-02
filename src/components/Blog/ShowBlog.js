// filepath: /c:/Users/Sanjeev/Downloads/Fitness_app-main/Fitness_app-main/src/components/Blog/ShowBlog.js
import React, { useState } from 'react';
import Card from './Card';

const blog = [
  {
    "title": "Beginner Fitness Journey",
    "content": "Starting your fitness journey can be intimidating, but taking the first step is key. Begin with low-impact exercises like walking, yoga, or light strength training to build a foundation. Remember to warm up, stay hydrated, and set achievable goals. Track your progress to stay motivated and celebrate small wins. A 30-day plan could include three workout days per week, gradually increasing intensity.",
    "image": "https://via.placeholder.com/300x200?text=Beginner+Fitness"
  },
  {
    "title": "Nutrition and Fitness",
    "content": "Nutrition is the backbone of any fitness journey. Focus on balanced meals with lean proteins (chicken, fish, tofu), complex carbs (brown rice, quinoa), and healthy fats (avocado, nuts). Meal prepping can save time and help you stick to your diet. For post-workout snacks, consider options like Greek yogurt with fruit or a protein smoothie to aid muscle recovery.",
    "image": "https://via.placeholder.com/300x200?text=Nutrition+and+Fitness"
  },
  {
    "title": "Home Workouts",
    "content": "Not everyone has time to hit the gym, and that's okay! Try a 15-minute high-intensity interval training (HIIT) session at home. Exercises like squats, push-ups, and jumping jacks require no equipment and can be very effective. Investing in minimal equipment, such as resistance bands or dumbbells, can level up your routine. Stay consistent, and don’t forget to stretch afterward to prevent soreness.",
    "image": "https://via.placeholder.com/300x200?text=Home+Workouts"
  },
  {
    "title": "Mental Health and Fitness",
    "content": "Exercise isn’t just about physical health; it’s a fantastic stress reliever and mood booster. Activities like yoga and pilates combine physical activity with mindfulness, helping you stay present and reduce anxiety. Running or cycling outdoors can clear your mind while providing a healthy dose of endorphins. Incorporating fitness into your routine can lead to better sleep, improved focus, and a more positive outlook.",
    "image": "https://via.placeholder.com/300x200?text=Mental+Health+and+Fitness"
  },
  {
    "title": "Fitness Myths Debunked",
    "content": "There are many misconceptions about fitness that might hold you back. For example, lifting weights does NOT make women bulky—it actually helps build a toned physique. Another myth is that you can target fat loss in specific areas; in reality, fat loss occurs throughout the body. Supplements like protein powders can help but aren’t necessary if you have a well-rounded diet.",
    "image": "https://via.placeholder.com/300x200?text=Fitness+Myths"
  },
  {
    "title": "Fitness Challenges",
    "content": "Fitness challenges are a fun way to stay engaged and push your limits. A 30-day squat challenge, for example, can help strengthen your legs and improve your stamina. Start with 20 squats on Day 1 and increase by 5 each day. Keep track of your progress and share it with friends to stay accountable. Challenges can also be tailored to include planks, push-ups, or even daily steps.",
    "image": "https://via.placeholder.com/300x200?text=Fitness+Challenges"
  }
];

const ShowBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blog.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(blog.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl font-bold text-red-600 my-10 text-center'>Fitness Club</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {currentItems.map((blog, index) => (
          <Card key={index} title={blog.title} content={blog.content} image={blog.image} />
        ))}
      </div>
      <div className='flex justify-between mt-8'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='w-[150px] px-4 py-2 mx-2 bg-red-400 hover:bg-red-600 rounded-full disabled:opacity-70'
        >
          {`${"<<"} Previous`}
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='w-[150px] px-4 py-2 mx-2 bg-red-400 hover:bg-red-600 rounded-full disabled:opacity-70'
        >
          {`Next ${">>"}`}
        </button>
      </div>
    </div>
  );
};

export default ShowBlog;