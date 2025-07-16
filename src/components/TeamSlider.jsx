import React from 'react'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { teamData } from '../data/data'

 const TeamSlider = () =>{
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="team-slide item-slide">
                    <Swiper
                        // Basic settings
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        speed={500}
                        
                        // Autoplay settings
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        
                        // Pagination settings
                        // pagination={{
                        //     clickable: true,
                        //     dynamicBullets: true,
                        // }}
                        
                        // Navigation settings (optional - uncomment if needed)
                        // navigation={true}
                        
                        // Modules
                        modules={[Navigation, Pagination, Autoplay]}
                        
                        // Responsive breakpoints
                        breakpoints={{
                            // Mobile devices
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            // Small mobile devices
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // Tablets
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            // Small laptops
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            // Desktop
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        
                        // Additional options
                        grabCursor={true}
                        centeredSlides={false}
                        watchSlidesProgress={true}
                        
                        // Custom className
                        className="team-swiper-slider"
                    >
                        {teamData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="single-team">
                                        <div className="team-grid">
                                            {/* Team member image */}
                                            <div className="teamgrid-user">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.name || `Team member ${index + 1}`} 
                                                    className="img-fluid" 
                                                />
                                            </div>

                                            {/* Team member content */}
                                            <div className="teamgrid-content">
                                                <h4>{item.name}</h4>
                                                <span>Agent</span>
                                                {/* Optional: Add more details */}
                                                {/* {item.property && (
                                                    <p className="team-property">{item.property}</p>
                                                )}
                                                {item.call && (
                                                    <p className="team-contact">
                                                        <i className="fa fa-phone"></i> {item.call}
                                                    </p>
                                                )}
                                                {item.review && (
                                                    <p className="team-review">
                                                        <i className="fa fa-star"></i> {item.review}
                                                    </p>
                                                )} */}
                                            </div>

                                            {/* Social media links */}
                                            <div className="teamgrid-social">
                                                <ul>
                                                    <li>
                                                        <Link 
                                                            to="#" 
                                                            className="f-cl"
                                                            aria-label="Facebook"
                                                        >
                                                            <i className="fa-brands fa-facebook"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link 
                                                            to="#" 
                                                            className="t-cl"
                                                            aria-label="Twitter"
                                                        >
                                                            <i className="fa-brands fa-twitter"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link 
                                                            to="#" 
                                                            className="i-cl"
                                                            aria-label="Instagram"
                                                        >
                                                            <i className="fa-brands fa-instagram"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link 
                                                            to="#" 
                                                            className="l-cl"
                                                            aria-label="LinkedIn"
                                                        >
                                                            <i className="fa-brands fa-linkedin"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default TeamSlider
