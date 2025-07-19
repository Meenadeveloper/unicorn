import React from 'react'
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

    const minprice = [
        { value: '1', label: '$500' },
        { value: '1', label: '$1000' },
        { value: '1', label: '$1500' },
        { value: '1', label: '$2000' },
        { value: '1', label: '$3000' },
    ];
    const maxprice = [
        { value: '1', label: '$1000' },
        { value: '1', label: '$1500' },
        { value: '1', label: '$2000' },
        { value: '1', label: '$3000' },
        { value: '1', label: '$3000' },
    ];

    const propertyType = [
        { value: '1', label: 'Rental' },
        { value: '1', label: 'Villas' },
        { value: '1', label: 'Offices' },
        { value: '1', label: 'Condos' },
        { value: '1', label: 'Studios' },
    ]
    const rooms = [
        { value: '1', label: '1' },
        { value: '1', label: '2' },
        { value: '1', label: '3' },
        { value: '1', label: '4' },
        { value: '1', label: '5' },
    ]
    const loction = [
        { value: '1', label: 'Los Angeles, CA' },
        { value: '1', label: 'New York City, NY' },
        { value: '1', label: 'Chicago, IL' },
        { value: '1', label: 'Houston, TX' },
        { value: '1', label: 'Philadelphia, PA' },
        { value: '1', label: 'San Antonio, TX' },
        { value: '1', label: 'San Jose, CA' },
    ]


  return (
    <>
      <Navbar transparent={false} />

      <div
        className="image-cover hero-banner"
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
      >
        <div className="container">
          <div className="hero-search-wrap">
            <div className="hero-search">
              <h1>Find accessible homes to rent</h1>
            </div>
            <div className="hero-search-content side-form">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a location"
                      />
                      <img src={map} width="18" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="mb-2">Min Price</label>
                    <Select
                      options={minprice}
                      className="form-control"
                      placeholder="No Min"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="mb-2">Max Price</label>
                    <Select
                      options={maxprice}
                      className="form-control"
                      placeholder="No Max"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="mb-2">Property Type</label>
                    <Select
                      options={propertyType}
                      className="form-control"
                      placeholder="Show All"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="mb-2">Bed Rooms</label>
                    <Select
                      options={rooms}
                      className="form-control"
                      placeholder="Bedrooms"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="mb-2">Property Location</label>
                    <Select
                      options={loction}
                      className="form-control"
                      placeholder="All Cities"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-search-action">
              <Link to="#" className="btn full-width btn-primary">
                Search Result
              </Link>
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
                to="/listings-list-with-sidebar"
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
                  trends, and real estate news. Don’t miss out on the latest
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
