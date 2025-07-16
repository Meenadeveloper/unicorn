import { clientData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-12 col-md-12">
        <div className="smart-textimonials smart-center" id="smart-textimonials">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            breakpoints={{
    578: {
      slidesPerView: 1, // 👈 mobile
    },
    768: {
      slidesPerView: 2, // 👈 tablet
    },
    992: {
      slidesPerView: 3, // 👈 large desktop
    },
  }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
          >
            {clientData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="item-box">
                  <div className="smart-tes-author">
                    <div className="st-author-box">
                      <div className="st-author-thumb">
                        <div className={`quotes ${item.quote}`}>
                          <i className="fa-solid fa-quote-left"></i>
                        </div>
                        <img src={item.image} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="smart-tes-content">
                    <p>{item.desc}</p>
                  </div>

                  <div className="st-author-info">
                    <h4 className="st-author-title">{item.name}</h4>
                    <span className="st-author-subtitle">{item.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
