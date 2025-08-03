import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import Select from 'react-select';

import bg from '../assets/img/homebanner.png'
import map from '../assets/img/pin.svg'
import HowItsWork from '../components/home/HowItsWork';
import RecentPropertyList from '../components/home/RecentPropertyList';
import BestLocation from '../components/home/BestLocation';
import Review from '../components/home/Review';
import FooterTop from '../components/footer/FooterTop';
import Footer from '../components/footer/Footer';
import FeatureProperty from '../components/home/FeatureProperty';
import Cta from '../components/home/Cta';
import BlogPost from '../components/home/BlogPost';
import PropertyType from '../components/home/PropertyType';

const Home = () => {
  const [activeTab, setActiveTab] = useState('rent');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedBedroom, setSelectedBedroom] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const dropdownRef = useRef(null);

  // Property configurations
  const propertyConfigs = {
    rent: {
      propertyTypes: ['Apartment', 'Villa', 'Townhouse', 'Studio', 'Penthouse', 'Duplex', 'Land'],
      areas: {
        // 'Apartment': ['500-800 sqft', '800-1200 sqft', '1200-1600 sqft', '1600+ sqft'],
        // 'Villa': ['2000-3000 sqft', '3000-4000 sqft', '4000-5000 sqft', '5000+ sqft'],
        // 'Townhouse': ['1200-1800 sqft', '1800-2500 sqft', '2500-3500 sqft', '3500+ sqft'],
        // 'Studio': ['300-500 sqft', '500-700 sqft', '700+ sqft'],
        // 'Penthouse': ['2500-4000 sqft', '4000-6000 sqft', '6000+ sqft'],
        // 'Duplex': ['1500-2500 sqft', '2500-3500 sqft', '3500+ sqft'],
        'Land': ['1000-5000 sqft', '5000-10000 sqft', '10000-20000 sqft', '20000+ sqft']
      },
      bedrooms: {
        'Apartment': ['Studio', '1 BR', '2 BR', '3 BR', '4+ BR'],
        'Villa': ['3 BR', '4 BR', '5 BR', '6+ BR'],
        'Townhouse': ['2 BR', '3 BR', '4 BR', '5+ BR'],
        'Studio': ['Studio'],
        'Penthouse': ['2 BR', '3 BR', '4 BR', '5+ BR'],
        'Duplex': ['2 BR', '3 BR', '4 BR', '5+ BR'],
        'Land': [] // No bedrooms for land
      }
    },
    buy: {
      propertyTypes: ['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Plot', 'Building', 'Land'],
      areas: {
        // 'Apartment': ['600-1000 sqft', '1000-1500 sqft', '1500-2000 sqft', '2000+ sqft'],
        // 'Villa': ['2500-4000 sqft', '4000-6000 sqft', '6000-8000 sqft', '8000+ sqft'],
        // 'Townhouse': ['1500-2500 sqft', '2500-3500 sqft', '3500-5000 sqft', '5000+ sqft'],
        // 'Penthouse': ['3000-5000 sqft', '5000-8000 sqft', '8000+ sqft'],
        'Plot': ['1000-3000 sqft', '3000-5000 sqft', '5000-10000 sqft', '10000+ sqft'],
        // 'Building': ['5000-10000 sqft', '10000-20000 sqft', '20000+ sqft'],
        'Land': ['2000-10000 sqft', '10000-25000 sqft', '25000-50000 sqft', '50000+ sqft']
      },
      bedrooms: {
        'Apartment': ['1 BR', '2 BR', '3 BR', '4+ BR'],
        'Villa': ['3 BR', '4 BR', '5 BR', '6+ BR'],
        'Townhouse': ['2 BR', '3 BR', '4 BR', '5+ BR'],
        'Penthouse': ['3 BR', '4 BR', '5 BR', '6+ BR'],
        'Plot': [], // No bedrooms for plot
        'Building': [], // No bedrooms for building
        'Land': [] // No bedrooms for land
      }
    },
    'new-projects': {
      propertyTypes: ['Residential Complex', 'Mixed Use', 'Gated Community', 'High-rise', 'Low-rise', 'Land'],
      areas: {
        // 'Residential Complex': ['800-1500 sqft', '1500-2500 sqft', '2500-4000 sqft', '4000+ sqft'],
        // 'Mixed Use': ['600-1200 sqft', '1200-2000 sqft', '2000-3000 sqft', '3000+ sqft'],
        // 'Gated Community': ['1200-2500 sqft', '2500-4000 sqft', '4000-6000 sqft', '6000+ sqft'],
        // 'High-rise': ['700-1400 sqft', '1400-2200 sqft', '2200-3500 sqft', '3500+ sqft'],
        // 'Low-rise': ['1000-2000 sqft', '2000-3500 sqft', '3500-5000 sqft', '5000+ sqft'],
        'Land': ['5000-15000 sqft', '15000-30000 sqft', '30000-50000 sqft', '50000+ sqft']
      },
      bedrooms: {
        'Residential Complex': ['1 BR', '2 BR', '3 BR', '4+ BR'],
        'Mixed Use': ['Studio', '1 BR', '2 BR', '3 BR'],
        'Gated Community': ['2 BR', '3 BR', '4 BR', '5+ BR'],
        'High-rise': ['1 BR', '2 BR', '3 BR', '4+ BR'],
        'Low-rise': ['2 BR', '3 BR', '4 BR', '5+ BR'],
        'Land': [] // No bedrooms for land
      }
    },
    commercial: {
      propertyTypes: ['Office', 'Retail', 'Warehouse', 'Restaurant', 'Showroom', 'Coworking', 'Land'],
      areas: {
        'Office': ['500-1500 sqft', '1500-3000 sqft', '3000-5000 sqft', '5000+ sqft'],
        'Retail': ['200-800 sqft', '800-1500 sqft', '1500-3000 sqft', '3000+ sqft'],
        'Warehouse': ['2000-5000 sqft', '5000-10000 sqft', '10000-20000 sqft', '20000+ sqft'],
        'Restaurant': ['800-2000 sqft', '2000-4000 sqft', '4000-8000 sqft', '8000+ sqft'],
        'Showroom': ['1000-3000 sqft', '3000-6000 sqft', '6000-10000 sqft', '10000+ sqft'],
        'Coworking': ['1000-3000 sqft', '3000-6000 sqft', '6000-12000 sqft', '12000+ sqft'],
        'Land': ['3000-10000 sqft', '10000-25000 sqft', '25000-50000 sqft', '50000+ sqft']
      },
      bedrooms: {
        'Office': [],
        'Retail': [],
        'Warehouse': [],
        'Restaurant': [],
        'Showroom': [],
        'Coworking': [],
        'Land': [] // No bedrooms for land
      }
    }
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedPropertyType('');
    setSelectedArea('');
    setSelectedBedroom('');
    setDropdownOpen('');
  };

  // Handle property type selection
  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
    setSelectedArea('');
    setSelectedBedroom('');
    setDropdownOpen('');
  };

  // Handle area selection
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setDropdownOpen('');
  };

  // Handle bedroom selection
  const handleBedroomSelect = (bedroom) => {
    setSelectedBedroom(bedroom);
    setDropdownOpen('');
  };

  // Toggle dropdown
  const toggleDropdown = (dropdownType) => {
    setDropdownOpen(dropdownOpen === dropdownType ? '' : dropdownType);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if bedrooms should be shown
  const shouldShowBedrooms = () => {
    if (!selectedPropertyType) return false;
    const config = propertyConfigs[activeTab];
    const bedroomOptions = config.bedrooms[selectedPropertyType];
    return bedroomOptions && bedroomOptions.length > 0;
  };

  // Check if area should be shown
  const shouldShowArea = () => {
    if (!selectedPropertyType) return false;
    const config = propertyConfigs[activeTab];
    const areaOptions = config.areas[selectedPropertyType];
    return areaOptions && areaOptions.length > 0;
  };

  // Handle search
  const handleSearch = () => {
    const searchData = {
      tab: activeTab,
      location: searchLocation,
      propertyType: selectedPropertyType,
      area: selectedArea,
      bedrooms: selectedBedroom
    };
    
    console.log('Search Data:', searchData);
    alert(`Searching for ${activeTab} properties...\n\nLocation: ${searchLocation || 'Any'}\nProperty Type: ${selectedPropertyType || 'Any'}\nArea: ${selectedArea || 'Any'}\nBedrooms: ${selectedBedroom || 'Any'}`);
  };

  const currentConfig = propertyConfigs[activeTab];

  return (
    <>
      

      <Navbar transparent={false} />

      {/* New Unicorn Search Banner */}
      <div
        className="unicorn-hero-banner"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
      >
       
        
        <div className="unicorn-search-container">

           <div className="unicorn-hero-title">
          <h1>Find Your Dream Property</h1>
          <p>Discover the perfect home for you and your family</p>
        </div>
          {/* Property Tabs */}
          <div className="unicorn-property-tabs">
            <div className="d-flex flex-wrap">
              {['rent', 'buy', 'new-projects', 'commercial'].map((tab) => (
                <button
                  key={tab}
                  className={`unicorn-tab-button flex-fill ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab === 'new-projects' ? 'New projects' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Search Form */}
          <div className="row g-2 align-items-center" ref={dropdownRef}>
            {/* Location Input */}
            <div className="col-12 col-md-4">
              <input
                type="text"
                className="form-control unicorn-search-input"
                placeholder="City, community or building"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>

            {/* Property Type Dropdown */}
            <div className="col-12 col-md-3">
              <div className="dropdown">
                <button
                  className={`unicorn-dropdown-button ${dropdownOpen === 'propertyType' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('propertyType')}
                >
                  <span>{selectedPropertyType || 'Property Type'}</span>
                  <span className="unicorn-dropdown-arrow">▼</span>
                </button>
                {dropdownOpen === 'propertyType' && (
                  <div className="unicorn-dropdown-menu show">
                    {currentConfig.propertyTypes.map((type) => (
                      <button
                        key={type}
                        className="unicorn-dropdown-item"
                        onClick={() => handlePropertyTypeSelect(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Area Dropdown - Only show if property type supports area */}
            {shouldShowArea() && (
              <div className="col-12 col-md-3">
                <div className="dropdown">
                  <button
                    className={`unicorn-dropdown-button ${dropdownOpen === 'area' ? 'open' : ''}`}
                    onClick={() => toggleDropdown('area')}
                  >
                    <span>{selectedArea || 'Area (sqft)'}</span>
                    <span className="unicorn-dropdown-arrow">▼</span>
                  </button>
                  {dropdownOpen === 'area' && (
                    <div className="unicorn-dropdown-menu show">
                      {currentConfig.areas[selectedPropertyType]?.map((area) => (
                        <button
                          key={area}
                          className="unicorn-dropdown-item"
                          onClick={() => handleAreaSelect(area)}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bedrooms Dropdown - Only show if property type supports bedrooms */}
            {shouldShowBedrooms() && (
              <div className="col-12 col-md-3">
                <div className="dropdown">
                  <button
                    className={`unicorn-dropdown-button ${dropdownOpen === 'bedrooms' ? 'open' : ''}`}
                    onClick={() => toggleDropdown('bedrooms')}
                  >
                    <span>{selectedBedroom || 'Bedrooms'}</span>
                    <span className="unicorn-dropdown-arrow">▼</span>
                  </button>
                  {dropdownOpen === 'bedrooms' && (
                    <div className="unicorn-dropdown-menu show">
                      {currentConfig.bedrooms[selectedPropertyType]?.map((bedroom) => (
                        <button
                          key={bedroom}
                          className="unicorn-dropdown-item"
                          onClick={() => handleBedroomSelect(bedroom)}
                        >
                          {bedroom}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Search Button */}
            <div className={`col-12 ${shouldShowArea() && shouldShowBedrooms() ? 'col-md-2' : shouldShowArea() || shouldShowBedrooms() ? 'col-md-2' : 'col-md-2'}`}>
              <button className="btn unicorn-search-button " onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <HowItsWork />
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Explore Recent Properties</h2>
                <p>
                  Discover the latest listings in your area, from modern
                  apartments to spacious family homes. Find your ideal property
                  with our most recent additions tailored to meet every
                  lifestyle and budget.
                </p>
              </div>
            </div>
          </div>

          <RecentPropertyList border={false} />

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
              <Link
                to="/property-list"
                className="btn btn-primary px-md-5 rounded "
              >
                Browse More Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="sec-heading text-center">
                <h2>Choose Property Type</h2>
                <p>
                  Browse a variety of property types including apartments,
                  villas, commercial spaces, and plots. Select the one that best
                  suits your lifestyle, needs, and investment goals.
                </p>
              </div>
            </div>
          </div>
          <PropertyType />
        </div>
      </section>
      <div className="clearfix"></div>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Featured Property For Sale</h2>
                <p>
                  Explore top-rated properties handpicked for their prime
                  locations, modern amenities, and excellent value. Find your
                  perfect home or investment opportunity among our featured
                  listings.
                </p>
              </div>
            </div>
          </div>
          <FeatureProperty border={false} />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-4">
              <Link
                to="/property-list"
                className="btn btn-primary px-lg-5 rounded"
              >
                Browse More Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Find Best Locations</h2>
                <p>
                  Discover prime neighborhoods with excellent connectivity,
                  top-rated schools, and thriving communities. Choose the
                  perfect location that fits your lifestyle and future plans.
                </p>
              </div>
            </div>
          </div>
          <BestLocation />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-5">
              <Link
                to="#"
                className="btn btn-primary px-md-5 rounded"
              >
                Browse More Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Good Reviews by Customers</h2>
                <p>
                  Hear from our satisfied clients who found their dream homes
                  and made smart investments with our trusted property services.
                  Your success story could be next!
                </p>
              </div>
            </div>
          </div>
          <Review />
        </div>
      </section>

      <div className="clearfix"></div>
      <Cta />

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
              <div className="sec-heading center">
                <h2>Latest Property Updates</h2>
                <p>
                  Stay informed with the newest property listings, market
                  trends, and real estate news. Don't miss out on the latest
                  opportunities in your preferred locations.
                </p>
              </div>
            </div>
          </div>
          <BlogPost />
        </div>
      </section>

      <FooterTop bg="theme-bg" />
      <Footer />
    </>
  );
}

export default Home