import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ResponsiveMasonry from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Parallax } from "react-parallax";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';
import PropertyDescription from './pages/PropertyDescription';
import MyProfile from './pages/userprofile/MyProfile';
import Wishlist from './pages/userprofile/Wishlist';
import ChangePassword from './features/ChangePassword';
import ErrorPage from './pages/ErrorPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import CreateAccount from './features/CreateAccount';


function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propert-list" element={<PropertyList />} />
        <Route path="/property-detail/:id" element={<PropertyDescription />} />
        <Route path="user/my-profile" element={<MyProfile />} />
        <Route path="user/wishlist" element={<Wishlist />} />
        <Route path="user/change-password" element={<ChangePassword />} />
        <Route path="/not-found" element={<ErrorPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App
