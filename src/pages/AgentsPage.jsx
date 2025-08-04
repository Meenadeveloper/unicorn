import React, { useState } from 'react';
import AgentListDisplay from '../components/AgentListDisplay';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import banner from "../assets/img/tour-1.jpg"
import Navbar from '../components/navbar/Navbar';
const AgentsPage = () => {
  const [activeTab, setActiveTab] = useState('agents');
  const [searchValue, setSearchValue] = useState('');
  const [selectedService, setSelectedService] = useState('Service needed');
  const [selectedLanguage, setSelectedLanguage] = useState('Language');
  const [selectedNationality, setSelectedNationality] = useState('Nationality');
  const [dropdownOpen, setDropdownOpen] = useState('');

  const serviceOptions = [
    'Service needed',
    'Residential For Sale',
    'Residential For Rent',
    'Commercial For Sale',
    'Commercial For Rent'
  ];

  const languageOptions = [
    'Language',
    'English',
    'Arabic',
    'Hindi',
    'Urdu',
    'French',
    'Russian',
    'Filipino'
  ];

  const nationalityOptions = [
    'Nationality',
    'UAE',
    'Indian',
    'Pakistani',
    'British',
    'American',
    'Lebanese',
    'Egyptian'
  ];

  const companies = [
    {
      id: 1,
      name: 'McCone Commercial',
      type: 'Head office',
      location: 'Dubai',
      agents: 4,
      superAgents: 4,
      forSale: 3,
      forRent: 63,
      logo: 'MC'
    },
    {
      id: 2,
      name: 'Arabian Estates',
      type: 'Head office',
      location: 'Dubai',
      agents: 48,
      superAgents: 41,
      forSale: 393,
      forRent: 84,
      logo: 'ARA'
    },
    {
      id: 3,
      name: 'Espace Real Estate',
      type: 'Head office',
      location: 'Dubai',
      agents: 25,
      superAgents: 18,
      forSale: 156,
      forRent: 234,
      logo: 'ER'
    },
    {
      id: 4,
      name: 'Metropolitan Premium Properties',
      type: 'Branch office',
      location: 'Abu Dhabi',
      agents: 32,
      superAgents: 15,
      forSale: 89,
      forRent: 167,
      logo: 'MPP'
    }
  ];

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? '' : dropdown);
  };

  const handleSearch = () => {
    console.log('Search triggered:', {
      tab: activeTab,
      search: searchValue,
      service: selectedService,
      language: selectedLanguage,
      nationality: selectedNationality
    });
  };

  return (
    <>
      <style>{`
        .unicorn-agents-page {
          min-height: 100vh;
         
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .unicorn-hero-section {
          padding: 80px 0 60px;
          text-align: center;
        }

        .unicorn-hero-title {
          color: white;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 40px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .unicorn-search-container {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          max-width: 1000px;
          margin: 0 auto;
        }

        .unicorn-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 30px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e9ecef;
          width: fit-content;
        }

        .unicorn-tab {
          background: white;
          border: none;
          padding: 12px 24px;
          cursor: pointer;
          font-weight: 500;
          color: #666;
          transition: all 0.3s ease;
          border-right: 1px solid #e9ecef;
        }

        .unicorn-tab:last-child {
          border-right: none;
        }

        .unicorn-tab.active {
          background: #ab9471;
          color: white;
        }

        .unicorn-tab:hover:not(.active) {
          background: #f8f9fa;
          color: #333;
        }

        .unicorn-search-form {
          display: flex;
          gap: 15px;
          align-items: center;
          flex-wrap: wrap;
        }

        .unicorn-search-input-container {
          flex: 1;
          min-width: 250px;
          position: relative;
        }

        .unicorn-search-input {
          width: 100%;
          padding: 14px 20px 14px 50px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .unicorn-search-input:focus {
          border-color: #ab9471;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .unicorn-search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 18px;
        }

        .unicorn-dropdown {
          position: relative;
          min-width: 180px;
        }

        .unicorn-dropdown-btn {
          width: 100%;
          padding: 14px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          color: #333;
          transition: all 0.3s ease;
        }

        .unicorn-dropdown-btn:hover {
          border-color: #ab9471;
        }

        .unicorn-dropdown-btn.open {
          border-color: #ab9471;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .unicorn-dropdown-arrow {
          transition: transform 0.3s ease;
          color: #9ca3af;
        }

        .unicorn-dropdown-btn.open .unicorn-dropdown-arrow {
          transform: rotate(180deg);
        }

        .unicorn-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          z-index: 1000;
          margin-top: 8px;
          border: 1px solid #e9ecef;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          max-height: 250px;
          overflow-y: auto;
        }

        .unicorn-dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .unicorn-dropdown-item {
          padding: 12px 20px;
          cursor: pointer;
          transition: background 0.2s ease;
          border-bottom: 1px solid #f0f0f0;
          font-size: 15px;
          color: #333;
        }

        .unicorn-dropdown-item:last-child {
          border-bottom: none;
        }

        .unicorn-dropdown-item:hover {
          background: #f8f9fa;
          color: #6366f1;
        }

        .unicorn-search-btn {
          background: #ab9471;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 14px 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 120px;
          justify-content: center;
        }

        .unicorn-search-btn:hover {
          background: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
        }

        .unicorn-results-section {
          background: white;
          padding: 60px 0;
        }

        .unicorn-company-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .unicorn-company-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .unicorn-company-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .unicorn-company-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
        }

        .unicorn-company-logo {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
          color: white;
          flex-shrink: 0;
        }

        .unicorn-company-logo.mccone {
          background: #1e40af;
        }

        .unicorn-company-logo.ara {
          background: #1f2937;
        }

        .unicorn-company-logo.espace {
          background: #059669;
        }

        .unicorn-company-logo.mpp {
          background: #7c3aed;
        }

        .unicorn-company-info h3 {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .unicorn-company-type {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .unicorn-company-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          font-size: 14px;
        }

        .unicorn-company-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .unicorn-stat-item {
          text-align: center;
        }

        .unicorn-stat-number {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: center;
        }

        .unicorn-stat-label {
          font-size: 12px;
          color: #6b7280;
          margin-top: 2px;
        }

        .unicorn-company-properties {
          display: flex;
          gap: 20px;
          padding-top: 16px;
          border-top: 1px solid #f0f0f0;
        }

        .unicorn-property-stat {
          flex: 1;
          text-align: center;
        }

        .unicorn-property-number {
          font-size: 18px;
          font-weight: 600;
          color: #6366f1;
        }

        .unicorn-property-label {
          font-size: 12px;
          color: #6b7280;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .unicorn-hero-title {
            font-size: 2rem;
            margin-bottom: 30px;
          }

          .unicorn-search-container {
            margin: 0 20px;
            padding: 20px;
          }

          .unicorn-search-form {
            flex-direction: column;
            align-items: stretch;
          }

          .unicorn-search-input-container {
            min-width: 100%;
          }

          .unicorn-dropdown {
            min-width: 100%;
          }

          .unicorn-search-btn {
            min-width: 100%;
          }

          .unicorn-company-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .unicorn-company-header {
            flex-direction: column;
            text-align: center;
          }

          .unicorn-company-stats {
            flex-wrap: wrap;
            gap: 16px;
          }

          .unicorn-company-properties {
            flex-direction: column;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .unicorn-tabs {
            width: 100%;
          }

          .unicorn-tab {
            flex: 1;
            padding: 10px 16px;
            font-size: 14px;
          }

          .unicorn-company-card {
            padding: 16px;
          }

          .unicorn-company-logo {
            width: 60px;
            height: 60px;
            font-size: 16px;
          }
        }
      `}</style>

      <Navbar transparent={false} />
      <div className="unicorn-agents-page">
        {/* Hero Section */}
        <section
          className="unicorn-hero-section"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
          }}
        >
          <div className="container">
            <h1 className="unicorn-hero-title">
              {activeTab === "agents"
                ? "Find your agent to find a home"
                : "Find the best real estate companies"}
            </h1>

            <div className="unicorn-search-container">
              {/* Tabs */}
              <div className="unicorn-tabs">
                <button
                  className={`unicorn-tab ${
                    activeTab === "agents" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("agents")}
                >
                  Agents
                </button>
                <button
                  className={`unicorn-tab ${
                    activeTab === "companies" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("companies")}
                >
                  Companies
                </button>
              </div>

              {/* Search Form */}
              <div className="unicorn-search-form">
                {/* Search Input */}
                <div className="unicorn-search-input-container">
                  <div className="unicorn-search-icon">
                    <MyLocationIcon style={{ color: "gray", fontSize: 24 }} />
                  </div>
                  <input
                    type="text"
                    className="unicorn-search-input"
                    placeholder={
                      activeTab === "agents"
                        ? "Enter location or agent name"
                        : "Enter location or company name"
                    }
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>

                {/* Service Dropdown */}
                <div className="unicorn-dropdown">
                  <button
                    className={`unicorn-dropdown-btn ${
                      dropdownOpen === "service" ? "open" : ""
                    }`}
                    onClick={() => toggleDropdown("service")}
                  >
                    <span>{selectedService}</span>
                    <span className="unicorn-dropdown-arrow">▼</span>
                  </button>
                  <div
                    className={`unicorn-dropdown-menu ${
                      dropdownOpen === "service" ? "show" : ""
                    }`}
                  >
                    {serviceOptions.map((option, index) => (
                      <div
                        key={index}
                        className="unicorn-dropdown-item"
                        onClick={() => {
                          setSelectedService(option);
                          setDropdownOpen("");
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Language Dropdown - Only for agents */}
                {activeTab === "agents" && (
                  <div className="unicorn-dropdown">
                    <button
                      className={`unicorn-dropdown-btn ${
                        dropdownOpen === "language" ? "open" : ""
                      }`}
                      onClick={() => toggleDropdown("language")}
                    >
                      <span>{selectedLanguage}</span>
                      <span className="unicorn-dropdown-arrow">▼</span>
                    </button>
                    <div
                      className={`unicorn-dropdown-menu ${
                        dropdownOpen === "language" ? "show" : ""
                      }`}
                    >
                      {languageOptions.map((option, index) => (
                        <div
                          key={index}
                          className="unicorn-dropdown-item"
                          onClick={() => {
                            setSelectedLanguage(option);
                            setDropdownOpen("");
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Nationality Dropdown - Only for agents */}
                {activeTab === "agents" && (
                  <div className="unicorn-dropdown">
                    <button
                      className={`unicorn-dropdown-btn ${
                        dropdownOpen === "nationality" ? "open" : ""
                      }`}
                      onClick={() => toggleDropdown("nationality")}
                    >
                      <span>{selectedNationality}</span>
                      <span className="unicorn-dropdown-arrow">▼</span>
                    </button>
                    <div
                      className={`unicorn-dropdown-menu ${
                        dropdownOpen === "nationality" ? "show" : ""
                      }`}
                    >
                      {nationalityOptions.map((option, index) => (
                        <div
                          key={index}
                          className="unicorn-dropdown-item"
                          onClick={() => {
                            setSelectedNationality(option);
                            setDropdownOpen("");
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search Button */}
                <button className="unicorn-search-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="unicorn-results-section">
          <div className="container">
            <h2 className="mb-4">
              {activeTab === "agents"
                ? "Top Real Estate Agents"
                : "Top Real Estate Companies"}
            </h2>
            <p className="text-muted mb-0">
              Find the best {activeTab} in your area with verified reviews and
              ratings
            </p>

            {/* Companies Grid */}
            {activeTab === "companies" && <AgentListDisplay />}

            {/* Agents Results Placeholder */}
            {activeTab === "agents" && <AgentListDisplay />}
          </div>
        </section>
      </div>
    </>
  );
};

export default AgentsPage;