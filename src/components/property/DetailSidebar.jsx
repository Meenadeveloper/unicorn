import React from 'react'
import { Link } from 'react-router-dom'

import user from '../../assets/img/user-6.jpg'

import { featureProperty } from '../../data/Propery'

const DetailSidebar = () => {
  return (
    <>
      <div className="details-sidebar div property-sidebar side_stiky">
        <div className="like_share_wrap b-0">
          <ul className="like_share_list">
            <li>
              <a
                href="https://wa.me/+97466760543?text=Hello%2C%20I%20am%20interested%20in%20your%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-likes"
                data-toggle="tooltip"
                data-original-title="Share on WhatsApp"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="tel:+97466760543"
                className="btn btn-likes"
                data-toggle="tooltip"
                data-original-title="Call"
              >
                <i
                  className="fas fa-phone-alt "
                  style={{ transform: "scaleX(-1)" }}
                ></i>{" "}
                Call
              </a>
            </li>
          </ul>
        </div>
        <div className="sides-widget">
          <div className="sides-widget-header bg-primary">
            {/* <div className="agent-photo">
              <img src={user} alt="" />
            </div> */}
            <div className="sides-widget-details">
              <h4>
                <Link to="#">Enquiry Now</Link>
              </h4>
              {/* <span>
                <i className="lni-phone-handset"></i>(91) 123 456 7895
              </span> */}
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="sides-widget-body simple-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Phone"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea className="form-control">
                I'm interested in this property.
              </textarea>
            </div>
            <button className="btn btn-light-primary fw-medium rounded full-width">
              Send Message
            </button>
          </div>
        </div>

        {/* <div className="sides-widget">
          <div className="sides-widget-header bg-primary">
            <div className="sides-widget-details">
              <h4>Mortgage Calculator</h4>
              <span>View your Interest Rate</span>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="sides-widget-body simple-form">
            <div className="form-group">
              <div className="input-with-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sale Price"
                />
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
            </div>

            <div className="form-group">
              <div className="input-with-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Down Payment"
                />
                <i className="fa-solid fa-piggy-bank"></i>
              </div>
            </div>

            <div className="form-group">
              <div className="input-with-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Loan Term (Years)"
                />
                <i className="fa-regular fa-calendar-days"></i>
              </div>
            </div>

            <div className="form-group">
              <div className="input-with-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Interest Rate"
                />
                <i className="fa fa-percent"></i>
              </div>
            </div>
            <button className="btn btn-light-primary fw-medium rounded full-width">
              Calculate
            </button>
          </div>
        </div> */}

        <div className="sidebar-widgets">
          <h4>Featured Property</h4>

          <div className="sidebar_featured_property">
            {featureProperty.map((item, index) => {
              return (
                <div className="sides_list_property" key={index}>
                  <div className="sides_list_property_thumb">
                    <img src={item.image} className="img-fluid" alt="" />
                  </div>
                  <div className="sides_list_property_detail">
                    <h4>
                      <Link to="#">{item.name}</Link>
                    </h4>
                    <span>
                      <i className="fa-solid fa-location-dot mt-2"></i>
                      {item.loction}
                    </span>
                    <div className="lists_property_price">
                      <div className="lists_property_types">
                        {item.type === "For Sale" && (
                          <div className="property_types_vlix sale">
                            For Sale
                          </div>
                        )}
                        {item.type === "For Rent" && (
                          <div className="property_types_vlix">For Rent</div>
                        )}
                      </div>
                      <div className="lists_property_price_value">
                        <h4>{item.value}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailSidebar