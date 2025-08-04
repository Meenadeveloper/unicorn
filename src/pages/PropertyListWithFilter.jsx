import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/navbar/Navbar';
import PropertyListingCards from '../components/property/PropertyListingCards';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import DiamondIcon from '@mui/icons-material/Diamond'; // or CategoryIcon

const PropertyListWithFilter = () => {

    const [activeDropdown, setActiveDropdown] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedRent, setSelectedRent] = useState('Rent');
  const [selectedPropertyType, setSelectedPropertyType] = useState('Property type');
  const [selectedBeds, setSelectedBeds] = useState('Beds & Baths');
  const [selectedPrice, setSelectedPrice] = useState('Price');
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState('Yearly');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showMoreFiltersModal, setShowMoreFiltersModal] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedFurnishing, setSelectedFurnishing] = useState('All furnishings');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');

  const dropdownRef = useRef(null);

  const popularLocations = [
    { name: 'Dubai Marina', city: 'Dubai' },
    { name: 'Downtown Dubai', city: 'Dubai' },
    { name: 'Business Bay', city: 'Dubai' },
    { name: 'JBR - Jumeirah Beach Residence', city: 'Dubai' },
    { name: 'Palm Jumeirah', city: 'Dubai' },
    { name: 'DIFC', city: 'Dubai' }
  ];

  const rentOptions = ['Rent', 'Buy', 'Commercial rent', 'Commercial buy', 'New Projects'];
  const propertyTypes = ['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Duplex', 'Studio'];
  const bedroomOptions = ['Studio', '1', '2', '3', '4', '5', '6', '7+'];
  const bathroomOptions = ['1', '2', '3', '4', '5', '6', '7', '7+'];
  const periods = ['Yearly', 'Monthly', 'Weekly', 'Daily'];
  const furnishingOptions = ['All furnishings', 'Furnished', 'Unfurnished', 'Partly furnished'];
  const amenities = ['Central A/C', 'Maids Room', 'Balcony', 'Shared Pool', 'Shared Spa', 'Shared Gym'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? '' : dropdownName);
  };

  const handleLocationSelect = (location) => {
    setSearchValue(location.name);
    setActiveDropdown('');
  };

  const handleBedroomSelect = (bedroom) => {
    if (selectedBedrooms.includes(bedroom)) {
      setSelectedBedrooms(selectedBedrooms.filter(b => b !== bedroom));
    } else {
      setSelectedBedrooms([...selectedBedrooms, bedroom]);
    }
    updateBedsText();
  };

  const handleBathroomSelect = (bathroom) => {
    if (selectedBathrooms.includes(bathroom)) {
      setSelectedBathrooms(selectedBathrooms.filter(b => b !== bathroom));
    } else {
      setSelectedBathrooms([...selectedBathrooms, bathroom]);
    }
    updateBedsText();
  };

  const updateBedsText = () => {
    const bedText = selectedBedrooms.length > 0 ? `${selectedBedrooms.length} Bed${selectedBedrooms.length > 1 ? 's' : ''}` : '';
    const bathText = selectedBathrooms.length > 0 ? `${selectedBathrooms.length} Bath${selectedBathrooms.length > 1 ? 's' : ''}` : '';
    
    if (bedText && bathText) {
      setSelectedBeds(`${bedText} & ${bathText}`);
    } else if (bedText) {
      setSelectedBeds(bedText);
    } else if (bathText) {
      setSelectedBeds(bathText);
    } else {
      setSelectedBeds('Beds & Baths');
    }
  };

  const handleAmenityToggle = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleSearch = () => {
    const searchData = {
      location: searchValue,
      rentType: selectedRent,
      propertyType: selectedPropertyType,
      bedrooms: selectedBedrooms,
      bathrooms: selectedBathrooms,
      minPrice,
      maxPrice,
      period: selectedPeriod,
      amenities: selectedAmenities,
      furnishing: selectedFurnishing,
      minArea,
      maxArea
    };
    
    console.log('Search Data:', searchData);
    alert('Search initiated! Check console for details.');
  };

  return (
    <>
      <Navbar transparent={false} />
      {/* Sticky Filters */}
      <div className="unicorn-sticky-filters">
        <div className="container">
          <div className="row g-2 align-items-center" ref={dropdownRef}>
            {/* Search Input */}
            <div className="col-12 col-lg-3">
              <div className="position-relative ">
                <input
                  type="text"
                  className="unicorn-search-input"
                  placeholder="City, community or building"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => toggleDropdown("search")}
                />
                <div
                  className={`unicorn-dropdown-menu unicorn-popular-locations ${
                    activeDropdown === "search" ? "show" : ""
                  }`}
                >
                  <h6>Popular locations</h6>
                  {popularLocations.map((location, index) => (
                    <div
                      key={index}
                      className="unicorn-location-item"
                      onClick={() => handleLocationSelect(location)}
                    >
                      <div className="unicorn-location-icon" style={{background:"transparent"}}>
                        <LocationOnIcon
                          style={{ color: "#ff3d00", fontSize: 20 }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500 }}>{location.name}</div>
                        <div style={{ fontSize: "12px", color: "#666" }}>
                          {location.city}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rent Dropdown */}
            <div className="col-6 col-lg-auto">
              <div className="position-relative">
                <button
                  className={`unicorn-filter-btn ${
                    activeDropdown === "rent" ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown("rent")}
                >
                  <span>{selectedRent}</span>
                  <span className="unicorn-dropdown-arrow">▼</span>
                </button>
                <div
                  className={`unicorn-dropdown-menu ${
                    activeDropdown === "rent" ? "show" : ""
                  }`}
                  style={{ width: "250px" }}
                >
                  {rentOptions.map((option, index) => (
                    <div
                      key={index}
                      className="unicorn-dropdown-item"
                      onClick={() => {
                        setSelectedRent(option);
                        setActiveDropdown("");
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Type Dropdown */}
            <div className="col-6 col-lg-auto">
              <div className="position-relative">
                <button
                  className={`unicorn-filter-btn ${
                    activeDropdown === "propertyType" ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown("propertyType")}
                >
                  <span>{selectedPropertyType}</span>
                  <span className="unicorn-dropdown-arrow">▼</span>
                </button>
                <div
                  className={`unicorn-dropdown-menu ${
                    activeDropdown === "propertyType" ? "show" : ""
                  }`}
                  style={{ width: "250px" }}
                >
                  {propertyTypes.map((type, index) => (
                    <div
                      key={index}
                      className="unicorn-dropdown-item"
                      onClick={() => {
                        setSelectedPropertyType(type);
                        setActiveDropdown("");
                      }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Beds & Baths Dropdown */}
            <div className="col-6 col-lg-auto">
              <div className="position-relative">
                <button
                  className={`unicorn-filter-btn ${
                    activeDropdown === "beds" ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown("beds")}
                >
                  <span>{selectedBeds}</span>
                  <span className="unicorn-dropdown-arrow">▼</span>
                </button>
                <div
                  className={`unicorn-dropdown-menu ${
                    activeDropdown === "beds" ? "show" : ""
                  }`}
                  style={{ width: "360px" }}
                >
                  <div
                    style={{
                      padding: "15px 20px",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  >
                    <h6 style={{ marginBottom: "10px", fontSize: "14px" }}>
                      Bedrooms
                    </h6>
                    <div className="unicorn-bedroom-grid">
                      {bedroomOptions.map((bedroom, index) => (
                        <div
                          key={index}
                          className={`unicorn-bedroom-btn ${
                            selectedBedrooms.includes(bedroom) ? "selected" : ""
                          }`}
                          onClick={() => handleBedroomSelect(bedroom)}
                        >
                          {bedroom}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "15px 20px" }}>
                    <h6 style={{ marginBottom: "10px", fontSize: "14px" }}>
                      Bathrooms
                    </h6>
                    <div className="unicorn-bedroom-grid">
                      {bathroomOptions.map((bathroom, index) => (
                        <div
                          key={index}
                          className={`unicorn-bedroom-btn ${
                            selectedBathrooms.includes(bathroom)
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => handleBathroomSelect(bathroom)}
                        >
                          {bathroom}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Dropdown */}
            <div className="col-6 col-lg-auto">
              <div className="position-relative">
                <button
                  className={`unicorn-filter-btn ${
                    activeDropdown === "price" ? "open" : ""
                  }`}
                  onClick={() => toggleDropdown("price")}
                >
                  <span>{selectedPrice}</span>
                  <span className="unicorn-dropdown-arrow">▼</span>
                </button>
                <div
                  className={`unicorn-dropdown-menu ${
                    activeDropdown === "price" ? "show" : ""
                  }`}
                  style={{ width: "320px" }}
                >
                  <div className="unicorn-price-section">
                    <div className="unicorn-price-inputs">
                      <input
                        type="text"
                        className="unicorn-price-input"
                        placeholder="Min. Price (AED)"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        style={{ width: "100px" }}
                      />
                      <span>—</span>
                      <input
                        type="text"
                        className="unicorn-price-input"
                        placeholder="Max. Price (AED)"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        style={{ width: "100px" }}
                      />
                    </div>
                    <h6 style={{ marginBottom: "10px", fontSize: "14px" }}>
                      Rental Period
                    </h6>
                    <div className="unicorn-rental-period">
                      {periods.map((period, index) => (
                        <div
                          key={index}
                          className={`unicorn-period-btn ${
                            selectedPeriod === period ? "selected" : ""
                          }`}
                          onClick={() => setSelectedPeriod(period)}
                        >
                          {period}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Filters */}
            <div className="col-6 col-lg-auto">
              <button
                className="unicorn-filter-btn"
                onClick={() => setShowMoreFiltersModal(true)}
              >
                <span>More Filters</span>
                <span className="unicorn-dropdown-arrow">▼</span>
              </button>
            </div>

            {/* Find Button */}
            <div className="col-12 col-lg-auto">
              <button className="unicorn-find-btn w-100" onClick={handleSearch}>
                Find
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* More Filters Modal */}
      {showMoreFiltersModal && (
        <div className="unicorn-modal">
          <div className="unicorn-modal-content">
            <div className="unicorn-modal-header">
              <h5>More Filters</h5>
              <button
                className="unicorn-modal-close"
                onClick={() => setShowMoreFiltersModal(false)}
              >
                ×
              </button>
            </div>
            <div className="unicorn-modal-body">
              {/* Furnishing */}
              <div className="unicorn-filter-section">
                <h6>
                  {" "}
                  <BathtubIcon /> Furnishing
                </h6>
                <div className="unicorn-rental-period">
                  {furnishingOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`unicorn-period-btn ${
                        selectedFurnishing === option ? "selected" : ""
                      }`}
                      onClick={() => setSelectedFurnishing(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Size */}
              <div className="unicorn-filter-section">
                <h6>
                  <SquareFootIcon /> Property Size (Sqft)
                </h6>
                <div className="unicorn-price-inputs">
                  <input
                    type="text"
                    className="unicorn-price-input"
                    placeholder="Min. Area"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                  />
                  <span>—</span>
                  <input
                    type="text"
                    className="unicorn-price-input"
                    placeholder="Max. Area"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                  />
                </div>
              </div>

              {/* Amenities */}
              <div className="unicorn-filter-section">
                <h6>
                  {" "}
                  <DiamondIcon style={{ color: "purple" }} />
                  Amenities
                </h6>
                <div className="unicorn-amenity-grid">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="unicorn-amenity-item"
                      onClick={() => handleAmenityToggle(amenity)}
                    >
                      <div
                        className={`unicorn-checkbox ${
                          selectedAmenities.includes(amenity) ? "checked" : ""
                        }`}
                      >
                        {selectedAmenities.includes(amenity) && "✓"}
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="unicorn-results-btn"
                onClick={() => {
                  setShowMoreFiltersModal(false);
                  handleSearch();
                }}
              >
                Show 127,493 results
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container unicorn-content">
        {/* Results Header */}
        <div className="unicorn-results-header">
          <div>
            <h2>Properties</h2>
            <p className="text-muted">127,493 properties</p>
          </div>
        </div>

        {/* Sort Options */}
        <div className="d-flex justify-content-end mb-4">
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontSize: "14px", color: "#666" }}>Sort by:</span>
            <select
              className="form-select"
              style={{ width: "auto", fontSize: "14px" }}
            >
              <option>Featured</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Property Listings Grid */}

        <PropertyListingCards />
      </div>
    </>
  );
}

export default PropertyListWithFilter