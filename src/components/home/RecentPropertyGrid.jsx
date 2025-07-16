import React from 'react'
import { Link } from 'react-router-dom';

import send from '../../assets/img/svg/send.svg'
import map from '../../assets/img/svg/map-1.svg'
import moon from '../../assets/img/svg/moon.svg'
import verified from '../../assets/img/svg/verified.svg'
import user from '../../assets/img/svg/user-1.svg'

import TinySlider from "tiny-slider-react";
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const RecentPropertyGrid = ({item,border}) => {
  return (
    <>
    
      <div className={`property-listing card rounded-3 ${border ? 'border' : 'border-0'}`}>
          <div className={`listing-img-wrapper p-3 `}>
              <div className="list-img-slide position-relative">
                  <div className="position-absolute top-0 left-0 ms-3 mt-3 z-1">
                    {item.tag.map((el, index)=>{
                      return(
                        
                        <div key={index} className={`label text-light d-inline-flex align-items-center justify-content-center mx-1 ${el === 'Verified' ? 'bg-success' : ''} ${el === 'SuperAgent' ? 'bg-purple' : ''} ${el === 'New' ? 'bg-danger' : ''}`}>
                          {el === 'Verified' && <img src={verified} alt="" className='me-1' />}

                          {el === 'SuperAgent' && <img src={user} alt="" className='me-1'/>}

                          {el === 'New' && <img src={moon} alt="" className='me-1'/>}
                            {el}
                        </div>
                      )
                    })}
                  </div>
                  <div className="click rounded-3 overflow-hidden mb-0">
                      {/* <TinySlider settings={settings}>
                        {item.image.map((el, index) => {
                          return(
                            <div key={index}>
                                <Link to={`/single-property-1/${item.id}`}>
                                <img src={el} className="img-fluid" alt="" />
                                </Link></div>
                          )
                        })}
                      </TinySlider> */}

<Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={10}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }}
  className="rounded-3 overflow-hidden"
>
  {item.image.map((el, index) => (
    <SwiperSlide key={index}>
      <Link to={`/single-property-1/${item.id}`}>
        <img src={el} className="img-fluid" alt={`slide-${index}`} />
      </Link>
    </SwiperSlide>
  ))}
</Swiper>


                  </div>
              </div>
          </div>
          
          <div className="listing-caption-wrapper px-3">
              <div className="listing-detail-wrapper">
                  <div className="listing-short-detail-wrap">
                      <div className="listing-short-detail">
                          <div className="d-flex align-items-center">
                            {item.tag2 === "For Rent" && <span className="label bg-light-success text-success prt-type me-2">For Rent</span>}
                            {item.tag2 === "For Sell" && <span className="label bg-light-danger text-danger prt-type me-2">For Sell</span>}
                              <span className="label bg-light-purple text-purple property-cats">{item.type}</span>
                          </div>
                          <h4 className="listing-name fw-semibold fs-5 mb-2 mt-3">
                            <Link to={`/single-property-1/${item.id}`} className="text-decoration-none">{item.name}</Link></h4>
                          <div className="prt-location text-muted-2 d-flex">
                               <img src={map} alt="" />
                              {item.loction}
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="price-features-wrapper">
                  <div className="list-fx-features d-flex align-items-center justify-content-between">
                      <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i className="fa-solid fa-building-shield fs-xs"></i></div><span className="text-muted-2 fs-sm">{item.size}</span>
                      </div>
                      <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i className="fa-solid fa-bed fs-xs"></i></div><span className="text-muted-2 fs-sm">{item.beds}</span>
                      </div>
                      <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1"><i className="fa-solid fa-clone fs-xs"></i></div><span className="text-muted-2 fs-sm">{item.sqft}</span>
                      </div>
                  </div>
              </div>
              
              <div className="listing-detail-footer d-flex align-items-center justify-content-between py-4">
                  <div className="listing-short-detail-flex">
                      <h6 className="listing-card-info-price m-0">{item.value}</h6>
                  </div>
                  <div className="footer-flex">
                      <Link to={`/single-property-1/${item.id}`} className="prt-view">
                          <img src={send} alt="" />
                      </Link>
                  </div>
              </div>
          
          </div>
          
        </div>
    
    
    </>
  )
}

export default RecentPropertyGrid