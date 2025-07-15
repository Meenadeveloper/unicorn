import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import TinySlider from "tiny-slider-react";
import "../node_modules/tiny-slider/dist/tiny-slider.css";
import ResponsiveMasonry from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Parallax } from "react-parallax";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../src/assets/img/banner-1.jpg";
import Home from './pages/Home';

const images = [bgImage, bgImage, bgImage];

function App() {
  const [isOpen, setOpen] = useState(false);

const settings = {
  items: 1,
  controls: false,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  nav: true,
  speed: 400,
  gutter: 0,
};

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


    </>
  );
}

export default App
