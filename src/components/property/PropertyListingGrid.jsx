import { Link } from 'react-router-dom';

import map from '../../assets/img/svg/map-1.svg'
import moon from '../../assets/img/svg/moon.svg'
import verified from '../../assets/img/svg/verified.svg'
import user from '../../assets/img/svg/user-1.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const PropertyListingGrid = ({item}) => {
  return (
    <>
      <div className="property-listing card border-0 rounded-3">
        <div className="listing-img-wrapper p-3">
          <div className="position-relative">
            {/* <div className="position-absolute top-0 left-0 ms-3 mt-3 z-1">
              {item.tag.map((el, index) => {
                return (
                  <div
                    key={index}
                    className={`label text-light d-inline-flex align-items-center justify-content-center mx-1 ${
                      el === "Verified" ? "bg-success" : ""
                      }
                       ${el === "SuperAgent" ? "bg-purple" : ""} 
                    ${
                      el === "New" ? "bg-danger" : ""
                    }`}
                  >
                    {el === "Verified" && (
                      <img src={verified} alt="" className="me-1" />
                    )}

                    {el === "SuperAgent" && (
                      <img src={user} alt="" className="me-1" />
                    )}

                    {el === "New" && <img src={moon} alt="" className="me-1" />}
                    {el}
                  </div>
                );
              })}
            </div> */}
            <div className="list-img-slide">
              <div className="click mb-0 rounded-3 overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  //   navigation
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="rounded-3 overflow-hidden"
                  style={{ height: "200px" }} // or any fixed height you want
                >
                  {item.image.map((el, index) => (
                    <SwiperSlide key={index}>
                      <Link to={`/property-detail/${item.id}`}>
                        <img
                          src={el}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            display: "block",
                          }}
                          alt=""
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="listing-caption-wrapper px-3">
          <div className="listing-detail-wrapper">
            <div className="listing-short-detail-wrap">
              <div className="listing-short-detail">
                <div className="d-flex align-items-center mb-1">
                  {item.tag2 === "For Rent" && (
                    <span className="label bg-light-success text-success prt-type me-2">
                      For Rent
                    </span>
                  )}
                  {item.tag2 === "For Sell" && (
                    <span className="label bg-light-danger text-danger prt-type me-2">
                      For Sell
                    </span>
                  )}
                  <span className="label bg-light-purple text-purple property-cats">
                    {item.type}
                  </span>
                </div>
                <h4 className="listing-name fw-semibold fs-6 mb-2 mt-3">
                  <Link
                    to={`/property-detail/${item.id}`}
                    className="prt-link-detail"
                  >
                    {item.name}
                  </Link>
                </h4>
                <div className="prt-location text-muted-2 d-flex">
                  <img src={map} alt="" className="me-1" />
                  {item.location}
                </div>
              </div>
            </div>
          </div>

          <div className="price-features-wrapper d-flex align-items-center justify-content-between my-4">
            <div className="listing-short-detail-flex">
              <h6 className="listing-card-info-price text-primary ps-0 m-0">
                {item.value}
              </h6>
            </div>
            <div className="lst-short-btns-groups d-flex align-items-center">
              {/* <Link
                to="#"
                className="square--50 circle text-primary bg-light-primary me-2"
              >
                <i className="fa-solid fa-code-compare"></i>
              </Link> */}
              <Link
                to="https://wa.me/+97466760543" // Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="square--50 circle text-success bg-light-success me-2"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </Link>

              <Link
                to="#"
                className="square--50 circle text-danger bg-light-danger"
              >
                <i className="fa-solid fa-heart-circle-check"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="lst-detail-footer d-flex align-items-center justify-content-between border-top py-2 px-3">
          <div className="footer-first">
            <div className="foot-reviews-wrap">
              <div className="foot-reviews-stars mb-1">
                <span>
                  <i
                    className="fa-solid fa-star text-warning fs-sm"
                    style={{ margin: "0 2px" }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-solid fa-star text-warning fs-sm"
                    style={{ margin: "0 2px" }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-solid fa-star text-warning fs-sm"
                    style={{ margin: "0 2px" }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-solid fa-star text-warning fs-sm"
                    style={{ margin: "0 2px" }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-solid fa-star text-warning fs-sm"
                    style={{ margin: "0 2px" }}
                  ></i>
                </span>
              </div>
              <div className="foot-reviews-subtitle">
                <span className="text-muted">47 Reviews</span>
              </div>
            </div>
          </div>
          <div className="footer-flex">
            <div className="list-fx-features d-flex align-items-center justify-content-between m-0">
              <div className="listing-card d-flex align-items-center me-3">
                <div className="square--30 text-muted-2 fs-sm circle gray-simple me-2">
                  <i className="fa-solid fa-building-shield fs-sm"></i>
                </div>
                <span className="text-muted-2">{item.size}</span>
              </div>
              <div className="listing-card d-flex align-items-center">
                <div className="square--30 text-muted-2 fs-sm circle gray-simple me-2">
                  <i className="fa-solid fa-clone fs-sm"></i>
                </div>
                <span className="text-muted-2">{item.sqft}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyListingGrid