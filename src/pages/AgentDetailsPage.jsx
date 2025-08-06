import React from "react";
import {
  EmojiEvents,
  Info,
  Share,
  WhatsApp,
  Business,
  Star,
  StarBorder,
} from "@mui/icons-material";
import PropertyListingCards from "../components/property/PropertyListingCards";
import AgentPropertyListCards from "../components/property/AgentPropertyListCards";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
const AgentDetailsPage = () => {
    const navigate = useNavigate();
    const handleViewProperty = () => {
        navigate("/property-list");
    }
    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const message = "Hello, I would like to enquire about your property.";

    const handleWhatsAppClick = () => {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    };

    const handleShare = () => {
      if (navigator.share) {
        navigator
          .share({
            title: "Check this profile",
            text: "Take a look at this awesome profile!",
            url: window.location.href, // current page URL
          })
          .then(() => console.log("Profile shared successfully"))
          .catch((error) => console.error("Error sharing", error));
      } else {
        alert("Sharing is not supported in this browser.");
      }
    };


    return (
      <>
        <Navbar transparent={false} />
        <div className="container-fluid p-0" style={{ minHeight: "500px" }}>
          {/* Main Profile Card */}
          <div className="row g-3 p-3">
            {/* Left Profile Section */}
            <div className="col-12 col-lg-8">
              <div
                className="card border-0 shadow-lg"
                style={{
                  backgroundColor: "#ab9471",
                  //   backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-auto mb-3 mb-md-0">
                      <div className="position-relative d-inline-block">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                          alt="Niel Els"
                          className="rounded-circle border border-warning border-3"
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md">
                      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mb-3">
                        <div className="mb-2 mb-md-0">
                          <div className="d-flex align-items-center mb-2">
                            <span className="badge bg-light text-dark me-2 px-2 py-1">
                              <EmojiEvents
                                sx={{ fontSize: 14 }}
                                className="me-1"
                              />
                              SUPERAGENT
                            </span>
                            {/* <button className="btn btn-sm btn-outline-light rounded-circle">
                              <Info sx={{ fontSize: 12 }} />
                            </button> */}
                          </div>
                          <h1
                            className="text-white mb-2 fw-bold"
                            style={{ fontSize: "2.5rem" }}
                          >
                            Niel Els
                          </h1>
                          <div className="d-flex align-items-center mb-2">
                            <span className="text-warning me-1 fw-bold">
                              4.5
                            </span>
                            <div className="me-2">
                              {[...Array(5)].map((_, i) =>
                                i < 4 ? (
                                  <Star
                                    key={i}
                                    sx={{ fontSize: 16, color: "#ffc107" }}
                                  />
                                ) : (
                                  <StarBorder
                                    key={i}
                                    sx={{ fontSize: 16, color: "#ffc107" }}
                                  />
                                )
                              )}
                            </div>
                            {/* <span className="text-white-50">12 Ratings</span>
                            <button className="btn btn-sm btn-outline-light rounded-circle p-1 ms-2">
                              <Info sx={{ fontSize: 12 }} />
                            </button> */}
                          </div>
                          <p className="text-white-50 mb-0">
                            South Africa, English, Afrikaans, +6 Years of
                            experience
                          </p>
                        </div>

                        <button
                          onClick={handleShare}
                          className="btn btn-outline-light d-flex align-items-center"
                        >
                          <Share sx={{ fontSize: 18 }} className="me-2" />
                          Share profile
                        </button>
                      </div>

                      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                        {/* <div className="d-flex align-items-center mb-2 mb-md-0">
                          <div
                            className="bg-success rounded-circle me-2"
                            style={{ width: "8px", height: "8px" }}
                          ></div>
                          <small className="text-white-50">
                            Niel Els usually responds within 5 minutes
                          </small>
                        </div> */}

                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-light d-flex align-items-center px-4"
                            onClick={handleWhatsAppClick}
                          >
                            <WhatsApp
                              sx={{ fontSize: 18, color: "#25d366" }}
                              className="me-2"
                            />
                            WhatsApp
                          </button>
                          <button
                            className="btn btn-outline-light d-flex align-items-center px-4"
                            onClick={handleViewProperty}
                          >
                            <Business sx={{ fontSize: 18 }} className="me-2" />
                            View properties
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Brokerage Section */}
            <div className="col-12 col-lg-4">
              <div
                className="card border-0 shadow-lg h-100"
                style={{
                  backgroundColor: "#ab9471",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="card-body p-4 d-flex flex-column align-items-center text-center">
                  <h5 className="text-white mb-3">Brokerage</h5>
                  <div
                    className="bg-white rounded p-3 mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <div className="w-100 h-100 bg-dark rounded d-flex align-items-center justify-content-center">
                      <span
                        className="text-white fw-bold"
                        style={{ fontSize: "10px" }}
                      >
                        Paragon
                      </span>
                    </div>
                  </div>
                  <h6 className="text-white mb-2">Paragon Properties</h6>
                  <a
                    href="#"
                    className="text-white-50 text-decoration-underline small"
                  >
                    About Company
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="row g-0 mx-3 mb-3">
            <div className="col-12">
              <div
                className="card border-0 shadow-lg"
                style={{
                  backgroundColor: "#ab9471",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="card-body p-4">
                  <div className="row text-center">
                    <div className="col-6 col-md-3">
                      <div className="border-end border-light border-opacity-25 pe-3">
                        <h2
                          className="text-white fw-bold mb-1"
                          style={{ fontSize: "3rem" }}
                        >
                          9
                        </h2>
                        <p className="text-white-50 mb-0 small">
                          Properties For Sale
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="border-end border-light border-opacity-25 pe-3">
                        <h2
                          className="text-white fw-bold mb-1"
                          style={{ fontSize: "3rem" }}
                        >
                          0
                        </h2>
                        <p className="text-white-50 mb-0 small">
                          Properties For Rent
                        </p>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="border-end border-light border-opacity-25 pe-3">
                        <div className="d-flex align-items-center justify-content-center">
                          <h2
                            className="text-white fw-bold mb-1 me-2"
                            style={{ fontSize: "3rem" }}
                          >
                            19
                          </h2>
                        </div>
                        <p className="text-white-50 mb-0 small">Closed Deals</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="d-flex align-items-center justify-content-center">
                        <h2
                          className="text-white fw-bold mb-1 me-2"
                          style={{ fontSize: "3rem" }}
                        >
                          58M AED
                        </h2>
                      </div>
                      <p className="text-white-50 mb-0 small">
                        Total Deals Value
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bootstrap CSS */}

          <style jsx>{`
            .card {
              transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .card:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
            }

            .btn {
              transition: all 0.2s ease;
            }

            .btn:hover {
              transform: translateY(-1px);
            }

            .border-end:last-child {
              border-right: none !important;
            }

            @media (max-width: 768px) {
              .border-end {
                border-right: none !important;
                border-bottom: 1px solid rgba(255, 255, 255, 0.25) !important;
                padding-bottom: 1rem !important;
                margin-bottom: 1rem !important;
              }

              .border-end:last-child {
                border-bottom: none !important;
                margin-bottom: 0 !important;
                padding-bottom: 0 !important;
              }
            }

            @media (max-width: 576px) {
              h1 {
                font-size: 2rem !important;
              }

              h2 {
                font-size: 2rem !important;
              }

              .d-flex.gap-2 {
                flex-direction: column;
                gap: 0.5rem !important;
              }
            }
          `}</style>
        </div>

        <AgentPropertyListCards />
      </>
    );
};

export default AgentDetailsPage;
