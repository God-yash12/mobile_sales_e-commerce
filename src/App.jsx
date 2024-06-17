import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import UnboxPhones from './Components/Unbox Phones/UnboxPhones';
import RefurbishPhones from './Components/Refurbish_Phones/RefurbishPhones';
import RefurbishLaptop from './Components/Refurbish_Laptop/RefurbishLaptop';
import SPLCategory from './Components/SPL_Categories/SPLCategory';
import Accessories from './Components/Accessories/Accessories';
import Blog from './Components/Blog/Blog';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgotPassword from './Components/Auth/ForgotPawwsord';
import DealsofDay from './Components/Hero/DealsoftheDay'




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/unboxPhones" element={<UnboxPhones />} />
      <Route path="/refurbishedPhones" element={<RefurbishPhones />} />
      <Route path="/SPLCategory" element={<SPLCategory />} />
      <Route path="/refurbishedLaptops" element={<RefurbishLaptop />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/dealsoftheday" element={<DealsofDay />} />
      </Routes>
    </Router>
  )
}

export default App
