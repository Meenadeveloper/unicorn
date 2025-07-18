import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ModalVideo from 'react-modal-video';
import Select from 'react-select';

import floor from '../../assets/img/floor.jpg'
import image1 from '../../assets/img/pl-6.jpg'
import user1 from '../../assets/img/user-1.jpg'
import user5 from '../../assets/img/user-5.jpg'
import edu from '../../assets/img/edu.png'
import food from '../../assets/img/food.png'
import { galleryImg, propertyFeature } from '../../data/Propery'
import '../../../node_modules/react-modal-video/css/modal-video.css'

// Custom Lightbox Component
const CustomLightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
    };

    React.useEffect(() => {
        // Store original overflow value
        const originalOverflow = document.body.style.overflow;
        
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            // Restore original overflow or set to visible
            document.body.style.overflow = originalOverflow || 'visible';
        };
    }, []);

    return (
        <div 
            className="custom-lightbox-overlay" 
            onClick={handleBackdropClick}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                padding: '20px'
            }}
        >
            <div 
                className="lightbox-content"
                style={{
                    position: 'relative',
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '0',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '30px',
                        cursor: 'pointer',
                        zIndex: 10001,
                        padding: '5px'
                    }}
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Previous Button */}
                {images.length > 1 && (
                    <button
                        onClick={onPrev}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '24px',
                            cursor: 'pointer',
                            padding: '15px',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                )}

                {/* Image */}
                <img
                    src={images[currentIndex]}
                    alt={`Gallery ${currentIndex + 1}`}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        display: 'block'
                    }}
                />

                {/* Next Button */}
                {images.length > 1 && (
                    <button
                        onClick={onNext}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '24px',
                            cursor: 'pointer',
                            padding: '15px',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Next"
                    >
                        ›
                    </button>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-40px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontSize: '14px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            padding: '5px 10px',
                            borderRadius: '15px'
                        }}
                    >
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>
        </div>
    );
};

const PropertyDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    let [open, setOpen] = useState(true);
    let [open2, setOpen2] = useState(true);
    let [open3, setOpen3] = useState(true);
    let [open4, setOpen4] = useState(false);
    let [open5, setOpen5] = useState(false);
    let [open6, setOpen6] = useState(false);
    let [open7, setOpen7] = useState(false);
    let [open8, setOpen8] = useState(true);
    let [open9, setOpen9] = useState(true);
    let [open10, setOpen10] = useState(true);
    let [show, setShow] = useState(false);
    let [show2, setShow2] = useState(false);
    let [show3, setShow3] = useState(false);

    // Lightbox states
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const onImageClick = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        // Ensure scrolling is restored
        setTimeout(() => {
            document.body.style.overflow = 'visible';
        }, 100);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === galleryImg.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? galleryImg.length - 1 : prevIndex - 1
        );
    };

    const rating = [
        { value: '1', label: '01 Star' },
        { value: '2', label: '02 Star' },
        { value: '3', label: '03 Star' },
        { value: '4', label: '04 Star' },
        { value: '5', label: '05 Star' },
    ]

    return (
      <>
        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen(!open)}
              className={open ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Detail & Features</h4>
            </Link>
          </div>
          <div
            id="clOne"
            className={`panel-collapse collapse ${open ? "show" : ""}`}
          >
            <div className="block-body">
              <ul className="deatil_features">
                {propertyFeature.map((item, index) => {
                  return (
                    <li key={index}>
                      <strong>{item.title}</strong>
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen2(!open2)}
              className={open2 ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Description</h4>
            </Link>
          </div>
          <div
            id="clTwo"
            className={`panel-collapse collapse ${open2 ? "show" : ""}`}
          >
            <div className="block-body">
              <p>
                There are countless property platforms online, but what sets us
                apart is our commitment to verified listings, transparent
                communication, and personalized service. Whether you're buying,
                selling, or renting, we ensure a smooth, hassle-free experience
                with professional guidance every step of the way.
              </p>
              <p>
                From residential homes to commercial investments, our platform
                connects you with the right opportunities. Explore detailed
                property insights, trusted agent support, and user-friendly
                tools designed to help you make informed real estate decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen3(!open3)}
              className={open3 ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Ameneties</h4>
            </Link>
          </div>
          <div
            id="clThree"
            className={`panel-collapse collapse ${open3 ? "show" : ""}`}
          >
            <div className="block-body">
              <ul className="avl-features third color">
                <li>Air Conditioning</li>
                <li>Swimming Pool</li>
                <li>Central Heating</li>
                <li>Laundry Room</li>
                <li>Gym</li>
                <li>Alarm</li>
                <li>Window Covering</li>
                <li>Internet</li>
                <li>Pets Allow</li>
                <li>Free WiFi</li>
                <li>Car Parking</li>
                <li>Spa & Massage</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen4(!open4)}
              className={open4 ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Property video</h4>
            </Link>
          </div>

          <div
            id="clFour"
            className={`panel-collapse collapse ${open4 ? "show" : ""}`}
          >
            <div className="block-body">
              <div className="property_video">
                <div className="thumb">
                  <img
                    className="pro_img img-fluid w100"
                    src={image1}
                    alt="7.jpg"
                  />
                  <div className="overlay_icon">
                    <div className="bb-video-box">
                      <div className="bb-video-box-inner">
                        <div className="bb-video-box-innerup">
                          <Link
                            to="#"
                            onClick={() => setIsOpen(true)}
                            className="text-primary"
                          >
                            <i className="fa-solid fa-play"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => setIsOpen(false)}
          />
        </div>

        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen5(!open5)}
              className={open5 ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Floor Plan</h4>
            </Link>
          </div>
          <div
            id="clFive"
            className={`panel-collapse collapse ${open5 ? "show" : ""}`}
          >
            <div className="block-body">
              <div className="accordion" id="floor-option">
                <div className="card">
                  <div className="card-header" id="firstFloor">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className={`btn btn-link ${show ? "" : "collapsed"}`}
                      >
                        First Floor<span>740 sq ft</span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="firstfloor"
                    className={`collapse ${show ? "show" : ""}`}
                  >
                    <div className="card-body">
                      <img src={floor} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="seconfFloor">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        onClick={() => setShow2(!show2)}
                        className={`btn btn-link ${show2 ? "" : "collapsed"}`}
                      >
                        Second Floor<span>710 sq ft</span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="secondfloor"
                    className={`collapse ${show2 ? "show" : ""}`}
                  >
                    <div className="card-body">
                      <img src={floor} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="third-garage">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        onClick={() => setShow3(!show3)}
                        className={`btn btn-link ${show3 ? "" : "collapsed"}`}
                      >
                        Garage<span>520 sq ft</span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="garages"
                    className={`collapse ${show3 ? "show" : ""}`}
                  >
                    <div className="card-body">
                      <img src={floor} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen6(!open6)}
              className={open6 ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Location</h4>
            </Link>
          </div>
          <div
            id="clSix"
            className={`panel-collapse collapse ${open6 ? "show" : ""}`}
          >
            <div className="block-body">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3838103135677!2d80.87929001488125!3d26.827742183164247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe8bc34b51bb%3A0xa3ca86eec63f6f8!2sINFOSYS%20DIGITAL%20COMPUTER%20(Prabhat%20Computer%20Classes)!5e0!3m2!1sen!2sin!4v1680238790732!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  loading="lazy"
                  title="myframe"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen7(!open7)}
              className={open7 ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Gallery</h4>
            </Link>
          </div>

          <div
            id="clSev"
            className={`panel-collapse collapse ${open7 ? "show" : ""}`}
          >
            <div className="block-body">
              <ul className="list-gallery-inline">
                {galleryImg.map((item, index) => {
                  return (
                    <li key={index}>
                      <button
                        type="button"
                        className="mfp-gallery"
                        onClick={() => onImageClick(index)}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src={item}
                          className="img-fluid mx-auto"
                          alt={`Gallery ${index + 1}`}
                          style={{
                            width: "100%", // Fixed width (adjust as needed)
                            height: "170px", // Fixed height (adjust as needed)
                            objectFit: "cover", // Ensures cropped fit without stretching
                            borderRadius: "6px", // Optional: rounded corners
                            display: "block",
                          }}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <CustomLightbox
                images={galleryImg}
                currentIndex={currentImageIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
              />
            </div>
          </div>
        </div>

        <div className="rating-overview">
          <div className="rating-overview-box">
            <span className="rating-overview-box-total">4.2</span>
            <span className="rating-overview-box-percent">out of 5.0</span>
            <div className="star-rating" data-rating="5">
              <i className="fas fa-star fs-xs mx-1"></i>
              <i className="fas fa-star fs-xs mx-1"></i>
              <i className="fas fa-star fs-xs mx-1"></i>
              <i className="fas fa-star fs-xs mx-1"></i>
              <i className="fas fa-star fs-xs mx-1"></i>
            </div>
          </div>

          <div className="rating-bars">
            <div className="rating-bars-item">
              <span className="rating-bars-name">Service</span>
              <span className="rating-bars-inner">
                <span className="rating-bars-rating high" data-rating="4.7">
                  <span
                    className="rating-bars-rating-inner"
                    style={{ width: "85%" }}
                  ></span>
                </span>
                <strong>4.7</strong>
              </span>
            </div>
            <div className="rating-bars-item">
              <span className="rating-bars-name">Value for Money</span>
              <span className="rating-bars-inner">
                <span className="rating-bars-rating good" data-rating="3.9">
                  <span
                    className="rating-bars-rating-inner"
                    style={{ width: "75%" }}
                  ></span>
                </span>
                <strong>3.9</strong>
              </span>
            </div>
            <div className="rating-bars-item">
              <span className="rating-bars-name">Location</span>
              <span className="rating-bars-inner">
                <span className="rating-bars-rating mid" data-rating="3.2">
                  <span
                    className="rating-bars-rating-inner"
                    style={{ width: "52.2%" }}
                  ></span>
                </span>
                <strong>3.2</strong>
              </span>
            </div>
            <div className="rating-bars-item">
              <span className="rating-bars-name">Cleanliness</span>
              <span className="rating-bars-inner">
                <span className="rating-bars-rating poor" data-rating="2.0">
                  <span
                    className="rating-bars-rating-inner"
                    style={{ width: "20%" }}
                  ></span>
                </span>
                <strong>2.0</strong>
              </span>
            </div>
          </div>
        </div>

        {/* <div className="property_block_wrap style-2">
                <div className="property_block_wrap_header">
                    <Link to="#" onClick={() => setOpen8(!open8)} className={open8 ? '' : 'collapsed'}><h4 className="property_block_title">102 Reviews</h4></Link>
                </div>
                <div id="clEight" className={`panel-collapse collapse ${open8 ? 'show' : ''}`}>
                    <div className="block-body">
                        <div className="author-review">
                            <div className="comment-list">
                                <ul>
                                    <li className="article_comments_wrap">
                                        <article>
                                            <div className="article_comments_thumb">
                                                <img src={user1} alt="" />
                                            </div>
                                            <div className="comment-details">
                                                <div className="comment-meta">
                                                    <div className="comment-left-meta">
                                                        <h4 className="author-name">Rosalina Kelian</h4>
                                                        <div className="comment-date">19th June 2025</div>
                                                    </div>
                                                </div>
                                                <div className="comment-text">
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                    <li className="article_comments_wrap">
                                        <article>
                                            <div className="article_comments_thumb">
                                                <img src={user5} alt="" />
                                            </div>
                                            <div className="comment-details">
                                                <div className="comment-meta">
                                                    <div className="comment-left-meta">
                                                        <h4 className="author-name">Rosalina Kelian</h4>
                                                        <div className="comment-date">15th May 2025</div>
                                                    </div>
                                                </div>
                                                <div className="comment-text">
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link to="#" className="reviews-checked text-primary"><i className="fas fa-arrow-alt-circle-down mr-2"></i>See More Reviews</Link>
                    </div>
                </div>
            </div>

            <div className="property_block_wrap style-2">
                <div className="property_block_wrap_header">
                    <Link to="#" onClick={() => setOpen9(!open9)} className={open9 ? '' : 'collapsed'}><h4 className="property_block_title">Nearby</h4></Link>
                </div>
                <div id="clNine" className={`panel-collapse collapse ${open9 ? 'show' : ''}`}>
                    <div className="block-body">
                        <div className="nearby-wrap">
                            <div className="nearby_header">
                                <div className="nearby_header_first">
                                    <h5>Schools Around</h5>
                                </div>
                                <div className="nearby_header_last">
                                    <div className="nearby_powerd">Powerd by <img src={edu} className="img-fluid" alt="" /></div>
                                </div>
                            </div>
                            <div className="neary_section_list">
                                <div className="neary_section">
                                    <div className="neary_section_first">
                                        <h4 className="nearby_place_title">Green Iseland School<small>(3.52 mi)</small></h4>
                                    </div>
                                    <div className="neary_section_last">
                                        <div className="nearby_place_rate">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <small className="reviews-count">(421 Reviews)</small>
                                    </div>
                                </div>

                                <div className="neary_section">
                                    <div className="neary_section_first">
                                        <h4 className="nearby_place_title">Ragni Intermediate College<small>(0.52 mi)</small></h4>
                                    </div>
                                    <div className="neary_section_last">
                                        <div className="nearby_place_rate">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star-half filled"></i>
                                        </div>
                                        <small className="reviews-count">(470 Reviews)</small>
                                    </div>
                                </div>

                                <div className="neary_section">
                                    <div className="neary_section_first">
                                        <h4 className="nearby_place_title">Rose Wood Primary Scool<small>(0.47 mi)</small></h4>
                                    </div>
                                    <div className="neary_section_last">
                                        <div className="nearby_place_rate">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <small className="reviews-count">(204 Reviews)</small>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="nearby-wrap">
                            <div className="nearby_header">
                                <div className="nearby_header_first">
                                    <h5>Food Around</h5>
                                </div>
                                <div className="nearby_header_last">
                                    <div className="nearby_powerd">Powerd by <img src={food} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="neary_section_list">

                                <div className="neary_section">
                                    <div className="neary_section_first">
                                        <h4 className="nearby_place_title">The Rise hotel<small>(2.42 mi)</small></h4>
                                    </div>
                                    <div className="neary_section_last">
                                        <div className="nearby_place_rate">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                        </div>
                                        <small className="reviews-count">(105 Reviews)</small>
                                    </div>
                                </div>

                                <div className="neary_section">
                                    <div className="neary_section_first">
                                        <h4 className="nearby_place_title">Blue Ocean Bar & Restaurant<small>(1.52 mi)</small></h4>
                                    </div>
                                    <div className="neary_section_last">
                                        <div className="nearby_place_rate">
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star filled"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <small className="reviews-count">(40 Reviews)</small>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        <div className="property_block_wrap style-2">
          <div className="property_block_wrap_header">
            <Link
              to="#"
              onClick={() => setOpen10(!open10)}
              className={open10 ? "" : "collapsed"}
            >
              <h4 className="property_block_title">Write a Review</h4>
            </Link>
          </div>
          <div
            id="clTen"
            className={`panel-collapse collapse ${open10 ? "show" : ""}`}
          >
            <div className="block-body">
              <form className="form-submit">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <textarea
                        className="form-control ht-80"
                        placeholder="Messages"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <Select
                        options={rating}
                        placeholder="Choose Ratting"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <button
                        className="btn btn-primary fw-medium px-lg-5 rounded"
                        type="submit"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default PropertyDetail