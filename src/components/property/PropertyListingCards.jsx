import React, { useState } from "react";
import property1 from '../../assets/img/ct-1.png';
import property2 from '../../assets/img/ct-2.png';
import property3 from '../../assets/img/ct-3.png';
import property4 from '../../assets/img/ct-4.png';
import property5 from '../../assets/img/ct-5.png';
import property6 from '../../assets/img/ct-6.png';
import property7 from '../../assets/img/ct-7.png';
import team1 from '../../assets/img/user-1.jpg';
import team2 from '../../assets/img/user-2.jpg';
import team3 from '../../assets/img/user-3.jpg';
import team4 from '../../assets/img/user-4.jpg';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { FaWhatsapp } from 'react-icons/fa';
import BedIcon from '@mui/icons-material/Bed';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BathtubIcon from '@mui/icons-material/Bathtub';
import { Link } from "react-router-dom";

const PropertyListingCards = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (propertyId) => {
    if (favorites.includes(propertyId)) {
      setFavorites(favorites.filter((id) => id !== propertyId));
    } else {
      setFavorites([...favorites, propertyId]);
    }
  };

  const properties = [
    {
      id: 1,
      images: property1,
      type: "Apartment",
      price: "810,000 AED/year",
      title: "HIGH FLOOR | ONE AND ONLY | BURJ KHALIFA VIEW",
      location: "One Za'abeel Tower, Zabeel 1, Zabeel, Dubai",
      bedrooms: 2,
      bathrooms: 3,
      area: "1,539 sqft",
      badges: ["VERIFIED", "SUPERAGENT"],
      isPremium: true,
      listedDate: "2 days ago",
      agentName: "Agent Name",
      agentImage: team1,
    },
    {
      id: 2,
      images: property2,
      type: "Villa",
      price: "1,200,000 AED/year",
      title: "LUXURY VILLA | PRIVATE GARDEN | COMMUNITY POOL",
      location: "Emirates Hills, Dubai",
      bedrooms: 4,
      bathrooms: 5,
      area: "3,250 sqft",
      badges: ["VERIFIED"],
      isPremium: false,
      listedDate: "1 day ago",
      agentName: "Property Expert",
      agentImage:team2,
    },
  ];

  const popularSearches = [
    "Apartments for rent in UAE",
    "Furnished Properties for rent in UAE",
    "1 bedroom Properties for rent in UAE",
    "2 bedroom Properties for rent in UAE",
    "Villas for rent in UAE",
    "3 bedroom Properties for rent in UAE",
    "Studio Properties for rent in UAE",
    "Properties for rent in UAE monthly",
    "Furnished Properties for rent in UAE monthly",
    "4 bedroom Properties for rent in UAE",
    "5 bedroom Properties for rent in UAE",
    "Townhouses for rent in UAE",
  ];

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            {properties.map((property) => (
              <Link to={`/property-detail/${property.id}`} 
               key={property.id} className="unicorn-property-card">
                <div className="unicorn-property-card-top">
                  <div className="unicorn-image-container product-card-left">
                    <img
                      src={property.images}
                      alt={property.title}
                      className="unicorn-property-image"
                    />

                   

                    <div className="unicorn-badges">
                      {property.badges.includes("VERIFIED") && (
                        <div className="unicorn-badge verified">✓ VERIFIED</div>
                      )}
                      
                    </div>

                    <div className="unicorn-action-buttons">
                      <button
                        className="unicorn-icon-button"
                        title="Save to favorites"
                      >
                          <LocationOnIcon style={{ color: '#f44336', fontSize: 18 }} />
                      </button>
                      <button
                        className={`unicorn-icon-button unicorn-favorite-btn ${
                          favorites.includes(property.id) ? "active" : ""
                        }`}
                        onClick={() => toggleFavorite(property.id)}
                        title="Add to favorites"
                      >
                        {favorites.includes(property.id) ? "❤️" : "🤍"}
                      </button>
                    </div>
                  </div>

                  <div className="unicorn-card-content product-card-right">
                    <div className="unicorn-property-header">
                      <div>
                        <div className="unicorn-property-type">
                          {property.type}
                        </div>
                        <div className="unicorn-property-price">
                          {property.price}
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-end gap-2">
                        {property.isPremium && (
                          <div className="unicorn-premium-badge">PREMIUM</div>
                        )}
                        <div className="unicorn-tier-badge">Tier | ONE</div>
                      </div>
                    </div>

                    <h3 className="unicorn-property-title">{property.title}</h3>

                    <div className="unicorn-property-location">
                      <LocationOnIcon style={{ color: '#f44336', fontSize: 28 }} />
 {property.location}
                    </div>

                    <div className="unicorn-property-features">
                      <div className="unicorn-feature-item">
                     <BedIcon style={{ fontSize: 24 }} />
 {property.bedrooms}
                      </div>
                      <div className="unicorn-feature-item">
                        <BathtubIcon style={{ fontSize: 24 }} />
 {property.bathrooms}
                      </div>
                      <div className="unicorn-feature-item">
                        <SquareFootIcon style={{ fontSize: 24 }} />
 {property.area}
                      </div>
                    </div>
                  </div>
                </div>
<div className="unicorn-property-card-bottom">
                <div className="unicorn-agent-section">
                  <div className="unicorn-agent-info" style={{display:'flex', gap:"10px", flexDirection:"row", alignItems:"center" }}>
                    <img
                      src={property.agentImage}
                      alt={property.agentName}
                      className="unicorn-agent-avatar"
                    />
                    <div className="unicorn-agent-details" style={{marginBottom:"0px"}}>
                      Listed {property.listedDate}
                    </div>
                  </div>
                </div>
                <div className="unicorn-contact-buttons">
                  <button className="unicorn-contact-btn unicorn-call-btn">
                     <CallIcon /> Call
                  </button>
                  <button className="unicorn-contact-btn unicorn-email-btn">
                     <EmailIcon style={{ marginRight: '8px' }} /> Email
                  </button>
                  <button className="unicorn-contact-btn unicorn-whatsapp-btn">
                    <FaWhatsapp style={{ color: '#25D366', fontSize: 24 }} />
 WhatsApp
                  </button>
                  <button className="unicorn-more-btn">⋯</button>
                </div>
                </div>
              </Link>
            ))}

            {/* Load More Button */}
            <div className="text-center mt-4">
              <button className="btn btn-outline-primary px-5 py-2">
                Load More Properties
              </button>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="unicorn-popular-searches">
              <h4>Popular Searches</h4>
              {popularSearches.map((search, index) => (
                <a key={index} href="#" className="unicorn-search-link">
                  {search}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListingCards;
