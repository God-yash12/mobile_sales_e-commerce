import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import UnboxPhones from "../Components/Unbox Phones/UnboxPhones";
import RefurbishPhones from "../Components/Refurbish_Phones/RefurbishPhones";
import RefurbishLaptop from "../Components/Refurbish_Laptop/RefurbishLaptop";
import SPLCategory from "../Components/SPL_Categories/SPLCategory";
import Accessories from "../Components/Accessories/Accessories";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ForgotPassword from "../Components/Auth/ForgotPawwsord";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ScrollToTop from "../Components/scrollToTop/ScrollToTop";
import ShippingPolicy from "../Pages/Shipping Policy/ShoppingPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import WarrantyPolicy from "../Pages/Warranty Policy/WarrantyPolicy";
import FAQs from "../Pages/FAQs/FAQs";
import PrivacyPolicy from "../Pages/Privacy policy/PrivacyPolicy";
import ReplacementPolicy from "../Pages/Replacemnet policy/ReplacementPolicy";
import RefundAndCancellation from "../Pages/Refund/Refund&Cancellation";
import Layout from "../layout/Layout";


const RouteApp = () => {
  return (
    <>
     
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Hero />} />
            <Route path="/unboxPhones" element={<UnboxPhones />} />
            <Route path="/refurbishedPhones" element={<RefurbishPhones />} />
            <Route path="/SPLCategory" element={<SPLCategory />} />
            <Route path="/refurbishedLaptops" element={<RefurbishLaptop />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/termsandconditions"element={<TermsAndConditions />} />
            <Route path="/shippingpolicy" element={<ShippingPolicy />} />
            <Route path="/warrantypolicy" element={<WarrantyPolicy />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/replacementpolicy" element={<ReplacementPolicy />} />
            <Route path="/refund&cancellationpolicy" element={<RefundAndCancellation />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          
        </Routes>
     
    </>
  );
};

export default RouteApp;
