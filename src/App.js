// filepath: /c:/Users/Sanjeev/Downloads/Fitness_app-main/Fitness_app-main/src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { AuthProvider } from './authcontext/AuthContext.js';
import ProtectedRoute from './authcontext/ProtectedRoute.js';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/usercomponents/login';
import SignUp from './components/usercomponents/signup';
import ShowBlog from './components/Blog/ShowBlog.js';
import Blog from './components/Blog/Blog.js';

const App = () => {
  return (
    <AuthProvider>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ProtectedRoute><ExerciseDetail /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<ProtectedRoute><ShowBlog /></ProtectedRoute>} />
          <Route path="/blog/:blogId" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Box>
    </AuthProvider>
  );
};

export default App;