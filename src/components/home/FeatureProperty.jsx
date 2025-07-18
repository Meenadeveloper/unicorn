import { Link } from 'react-router-dom';

import { propertyData } from '../../data/data'
const FeatureProperty = ({border}) => {
  return (
    <>
     <div className="row list-layout">
        {propertyData.slice(0,4).map((item,index)=>{
            return (
              <div className="col-xl-6 col-lg-6 col-md-12 h-100" key={index}>
                <div
                  className={`position-relative property-listing property-1 bg-white p-2 rounded ${
                    border ? "border" : "border-0"
                  }`}
                >
                  <span className="position-absolute top-0 start-0 badge bg-danger text-light m-2 z-1">
                    For Sale
                  </span>

                  <div className="listing-img-wrapper">
                    <Link to={`/property-detail/${item.id}`}>
                      {item.image.slice(0, 1).map((el, index) => {
                        return (
                          <img
                            src={el}
                            className="img-fluid mx-auto rounded"
                            alt=""
                            key={index}
                          />
                        );
                      })}
                    </Link>
                  </div>
                  <div className="listing-content">
                    <div className="listing-detail-wrapper-box">
                      <div className="listing-detail-wrapper d-flex align-items-top justify-content-between">
                        <div className="listing-short-detail ">
                          <h4 className="listing-name mb-1 mt-0 text-truncate-2">
                            <Link to={`/property-detail/${item.id}`}>
                              {item.name}
                            </Link>
                          </h4>
                          <div className="fr-can-rating">
                            <i
                              className="fas fa-star fs-xs filled"
                              style={{ margin: "0 2px" }}
                            ></i>
                            <i
                              className="fas fa-star fs-xs filled"
                              style={{ margin: "0 2px" }}
                            ></i>
                            <i
                              className="fas fa-star fs-xs filled"
                              style={{ margin: "0 2px" }}
                            ></i>
                            <i
                              className="fas fa-star fs-xs filled"
                              style={{ margin: "0 2px" }}
                            ></i>
                            <i
                              className="fas fa-star fs-xs"
                              style={{ margin: "0 2px" }}
                            ></i>
                            <span className="reviews_text fs-sm text-muted ms-2">
                              (42 Reviews)
                            </span>
                          </div>
                        </div>
                        <div className="list-price">
                          <h6 className="listing-card-info-price text-primary">
                            {item.value}
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div className="price-features-wrapper">
                      <div className="list-fx-features d-flex align-items-center justify-content-between mt-3 mb-1">
                        <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1">
                            <i className="fa-solid fa-building-shield fs-xs"></i>
                          </div>
                          <span className="text-muted-2 fs-sm">
                            {item.size}
                          </span>
                        </div>
                        <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1">
                            <i className="fa-solid fa-bed fs-xs"></i>
                          </div>
                          <span className="text-muted-2 fs-sm">
                            {item.beds}
                          </span>
                        </div>
                        <div className="listing-card d-flex align-items-center">
                          <div className="square--25 text-muted-2 fs-sm circle gray-simple me-1">
                            <i className="fa-solid fa-clone fs-xs"></i>
                          </div>
                          <span className="text-muted-2 fs-sm">
                            {item.sqft}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="listing-footer-wrapper">
                      <div className="listing-locate">
                        <span className="listing-location text-muted-2">
                          <i className="fa-solid fa-location-pin me-1"></i>
                          {item.loction}
                        </span>
                      </div>
                      <div className="listing-detail-btn">
                        <Link
                          to={`/property-detail/${item.id}`}
                          className="btn btn-sm px-4 fw-medium btn-primary"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
    </div>
    
    </>
  )
}

export default FeatureProperty