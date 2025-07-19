import { Link, useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bg1 from '../assets/img/p-1.jpg'
import bg2 from '../assets/img/p-2.jpg'
import bg3 from '../assets/img/p-3.jpg'
import bg4 from '../assets/img/p-4.jpg'
import bed from '../assets/img/bed.svg'
import bathtub from '../assets/img/bathtub.svg'
import move from '../assets/img/move.svg'
import { propertyData } from '../data/data';
import Navbar from '../components/navbar/Navbar';
import FooterTop from '../components/footer/FooterTop';
import Footer from '../components/footer/Footer';
import PropertyDetail from '../components/property/PropertyDetail';
import DetailSidebar from '../components/property/DetailSidebar';

const PropertyDescription = () => {
     let params = useParams()
    let id = params.id
    let data = propertyData.find((item)=>item.id === parseInt(id))
  return (
    <>
      <Navbar transparent={false} />

      <div className="featured_slick_gallery gray">
        <div className="featured_slick_gallery-slide home-slider">
          <div className="position-relative">
            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                768: { slidesPerView: 2, spaceBetween: 0 },
              }}
              className="featured_slick_gallery-swiper"
            >
              {[bg1, bg2, bg3, bg4].map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="featured_slick_padd"
                    style={{
                      width: "100%",
                      height: "500px", // fixed height
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <a href={img} className="mfp-gallery">
                      <img
                        src={img}
                        className="img-fluid w-100 h-100"
                        style={{
                          objectFit: "cover", // ensures crop + fill
                          width: "100%",
                          height: "100%",
                          display: "block",
                        }}
                        alt={`property-${index + 1}`}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev swiper-button">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="custom-swiper-button-next swiper-button">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <Link to="#" className="btn-view-pic">
          View photos
        </Link>
      </div>

      <section className="gray-simple">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="property_block_wrap style-2 p-4">
                <div className="prt-detail-title-desc">
                  <span className="label text-light bg-success">For Sale</span>
                  <h3 className="mt-3">
                    {data?.name
                      ? data?.name
                      : "Jannat Graynight Mood In Siver Colony, London"}
                  </h3>
                  <span>
                    <i className="lni-map-marker"></i> 778 Country St. Panama
                    City, FL
                  </span>
                  <h3 className="prt-price-fix text-primary mt-2">
                    $7,600<sub>/month</sub>
                  </h3>
                  <div className="list-fx-features">
                    <div className="listing-card-info-icon">
                      <div className="inc-fleat-icon me-1">
                        <img src={bed} width="13" alt="" />
                      </div>
                      3 Beds
                    </div>
                    <div className="listing-card-info-icon">
                      <div className="inc-fleat-icon me-1">
                        <img src={bathtub} width="13" alt="" />
                      </div>
                      1 Bath
                    </div>
                    <div className="listing-card-info-icon">
                      <div className="inc-fleat-icon me-1">
                        <img src={move} width="13" alt="" />
                      </div>
                      800 sqft
                    </div>
                  </div>
                </div>
              </div>
              <PropertyDetail />
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <DetailSidebar />
            </div>
          </div>
        </div>
      </section>

      <FooterTop bg="theme-bg" />
      <Footer />
    </>
  );
}

export default PropertyDescription