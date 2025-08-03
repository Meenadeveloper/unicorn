import React from 'react';
import team from "../../assets/img/user-1.jpg"
const ProvidedByCards = () => {
  const agencyData = {
    name: "Tier ONE",
    logo: "Tier | ONE",
    exclusiveText: "Exclusively on Property Finder",
    propertiesCount: 53,
    bgColor: "#e8e5f3"
  };

  const agentData = {
    name: "Daniel Fowler",
    photo: "/api/placeholder/80/80",
    rating: 5.0,
    ratingsCount: 2,
    responseTime: "within 5 minutes",
    closedDeals: 12,
    languages: "English",
    propertiesCount: 14,
    superAgent: true
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="material-icons" style={{ color: '#ffc107', fontSize: '16px' }}>
        star
      </span>
    ));
  };

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        rel="stylesheet"
      />
      <style>{`
        .unicorn-provided-section {
          padding: 20px 0;
          background: #ffffff;
        }

        .unicorn-section-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
        }

        .unicorn-card {
          border-radius: 12px;
          border: 1px solid #e9ecef;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          background: white;
        }

        .unicorn-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .unicorn-agency-card {
          background: #e8e5f3;
          padding: 30px 25px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
        }

        .unicorn-agency-logo {
          width: 200px;
          height: 80px;
          background: #64748b;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          color: white;
          font-weight: 700;
          font-size: 16px;
          text-align: center;
          line-height: 1.2;
        }

        .unicorn-exclusive-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #4a5568;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 25px;
        }

        .unicorn-exclusive-icon {
          color: #4a5568;
          font-size: 18px;
        }

        .unicorn-agency-btn {
          background: white;
          color: #ab9471;
          border: 2px solid #e9ecef;
          border-radius: 25px;
          padding: 12px 24px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          margin-top: auto;
        }

        .unicorn-agency-btn:hover {
          background: #ab9471;
          color: white;
          border-color: #ab9471;
          text-decoration: none;
        }

        .unicorn-agent-card {
          padding: 25px;
          background: white;
          display: flex;
          flex-direction: column;
          min-height: 320px;
        }

        .unicorn-agent-header {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 20px;
        }

        .unicorn-agent-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          background: linear-gradient(135deg, #ab9471 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .unicorn-agent-info {
          flex: 1;
        }

        .unicorn-superagent-badge {
          background: #ab9471;
          color: white;
          padding: 4px 10px;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 8px;
          text-transform: uppercase;
          width:fit-content;
        }

        .unicorn-superagent-badge .material-icons {
          font-size: 12px;
        }

        .unicorn-agent-name {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .unicorn-rating-section {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .unicorn-rating-number {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .unicorn-ratings-count {
          color: #6b7280;
          font-size: 14px;
        }

        .unicorn-agent-details {
          flex: 1;
          margin-bottom: 20px;
        }

        .unicorn-detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
          font-size: 14px;
        }

        .unicorn-detail-row:last-child {
          border-bottom: none;
        }

        .unicorn-detail-label {
          color: #6b7280;
          font-weight: 500;
        }

        .unicorn-detail-value {
          color: #1f2937;
          font-weight: 500;
          text-align: right;
        }

        .unicorn-agent-btn {
          background: white;
          color: #ab9471;
          border: 2px solid #e9ecef;
          border-radius: 25px;
          padding: 12px 24px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          text-align: center;
          margin-top: auto;
        }

        .unicorn-agent-btn:hover {
          background: #ab9471;
          color: white;
          border-color: #ab9471;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .unicorn-agency-card,
          .unicorn-agent-card {
            min-height: auto;
            padding: 20px;
          }

          .unicorn-agency-logo {
            width: 160px;
            height: 60px;
            font-size: 14px;
          }

          .unicorn-agent-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }

          .unicorn-agent-photo {
            width: 70px;
            height: 70px;
            font-size: 20px;
          }

          .unicorn-agent-name {
            font-size: 18px;
          }

          .unicorn-rating-section {
            justify-content: center;
          }

          .unicorn-detail-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            text-align: left;
          }

          .unicorn-detail-value {
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .unicorn-section-title {
            font-size: 20px;
          }

          .unicorn-agency-card,
          .unicorn-agent-card {
            padding: 16px;
          }

          .unicorn-agency-logo {
            width: 140px;
            height: 50px;
            font-size: 12px;
          }

          .unicorn-agent-photo {
            width: 60px;
            height: 60px;
            font-size: 18px;
          }

          .unicorn-agent-name {
            font-size: 16px;
          }

          .unicorn-agency-btn,
          .unicorn-agent-btn {
            padding: 10px 20px;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="unicorn-provided-section">
        <div className="container">
          <h2 className="unicorn-section-title">Provided by</h2>
          
          <div className="row g-4">
            {/* Agency Card */}
            <div className="col-md-6">
              <div className="unicorn-card">
                <div className="unicorn-agency-card" style={{height:"100%", minHeight:"100%"}}>
                  <div>
                    <div className="unicorn-agency-logo">
                      {agencyData.logo}
                    </div>
                    
                    <div className="unicorn-exclusive-badge">
                      <span className="material-icons unicorn-exclusive-icon">diamond</span>
                      <span>{agencyData.exclusiveText}</span>
                    </div>
                  </div>
                  
                  <a href="#" className="unicorn-agency-btn">
                    See agency properties ({agencyData.propertiesCount})
                  </a>
                </div>
              </div>
            </div>

            {/* Agent Card */}
            <div className="col-md-6">
              <div className="unicorn-card">
                <div className="unicorn-agent-card">
                  <div className="unicorn-agent-header">
                    <div className="unicorn-agent-photo" style={{width:"80px", height:"80px", borderRadius:"50%", overflow:"hidden"}}>
                      <img src={team} style={{width:"100%", height:"100%", objectFit:"cover"}} />
                    </div>
                    <div className="unicorn-agent-info">
                      {agentData.superAgent && (
                        <div className="unicorn-superagent-badge">
                          <span className="material-icons">star</span>
                          SUPERAGENT
                        </div>
                      )}
                      <h3 className="unicorn-agent-name">{agentData.name}</h3>
                      <div className="unicorn-rating-section">
                        <span className="unicorn-rating-number">{agentData.rating}</span>
                        <div className="d-flex">
                          {renderStars(agentData.rating)}
                        </div>
                        <span className="unicorn-ratings-count">{agentData.ratingsCount} Ratings</span>
                      </div>
                    </div>
                  </div>

                  <div className="unicorn-agent-details">
                    <div className="unicorn-detail-row">
                      <span className="unicorn-detail-label">Response time</span>
                      <span className="unicorn-detail-value">{agentData.responseTime}</span>
                    </div>
                    <div className="unicorn-detail-row">
                      <span className="unicorn-detail-label">Closed Deals</span>
                      <span className="unicorn-detail-value">{agentData.closedDeals}</span>
                    </div>
                    <div className="unicorn-detail-row">
                      <span className="unicorn-detail-label">Languages</span>
                      <span className="unicorn-detail-value">{agentData.languages}</span>
                    </div>
                  </div>

                  <a href="#" className="unicorn-agent-btn">
                    See agent properties ({agentData.propertiesCount})
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProvidedByCards;