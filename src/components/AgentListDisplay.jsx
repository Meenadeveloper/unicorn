import React, { useState } from 'react';
import agent1 from '../assets/img/team-1.jpg';
import agent2 from '../assets/img/team-2.jpg';

import agent3 from '../assets/img/team-3.jpg';

import agent4 from '../assets/img/team-4.jpg';

import agent5 from '../assets/img/team-5.jpg';
import companylogo from '../assets/img/companylogo.webp';
import StarIcon from '@mui/icons-material/Star'; // Filled star
import StarHalfIcon from '@mui/icons-material/StarHalf'; // Half-filled star
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const AgentListDisplay = () => {
  const navigate = useNavigate();
  const [favoriteAgents, setFavoriteAgents] = useState([]);

  const toggleFavorite = (agentId) => {
    if (favoriteAgents.includes(agentId)) {
      setFavoriteAgents(favoriteAgents.filter(id => id !== agentId));
    } else {
      setFavoriteAgents([...favoriteAgents, agentId]);
    }
  };


  const handlecard = () => {
    navigate("/agents-details");
  }
  const agents = [
    {
      id: 1,
      name: "Dana Vilmane",
      title: "Sr. Client Manager",
      company: "ELITE BROKERS",
      companyLogo: companylogo,
      rating: 5.0,
      nationality: "Latvia",
      languages: "English, Russian, Latvian",
      forSale: 25,
      forRent: 2,
      image: agent1
    },
    {
      id: 2,
      name: "Russell Wilson", 
      title: "Executive Director",
      company: "ARABIAN",
      companyLogo: companylogo,
      rating: 5.0,
      nationality: "United Kingdom",
      languages: "English",
      forSale: 3,
      forRent: 0,
      image: agent2
    },
    {
      id: 3,
      name: "Sunny Adhiya",
      title: "Associate Partner", 
      company: "D",
      companyLogo:companylogo,
      rating: 5.0,
      nationality: "India",
      languages: "English, Hindi, Gujarati",
      forSale: 9,
      forRent: 7,
      image: agent3
    },
    {
      id: 4,
      name: "Daniel Fowler",
      title: "Managing Director",
      company: "Tier ONE", 
      companyLogo:companylogo,
      rating: 5.0,
      nationality: "United Kingdom",
      languages: "English",
      forSale: 10,
      forRent: 4,
      image: agent4
    }
  ];

  return (
    <>
      

      <div className="unicorn-agents-container">
        <div className="unicorn-agents-grid ">
          {agents.map((agent) => (
            <div key={agent.id} className="unicorn-agent-card" onClick={handlecard} style={{cursor:"pointer"}}>
              <div className="unicorn-agent-image-container" style={{overflow:"hidden"}}>
                <div className="unicorn-agent-image" >
                 <img src={agent.image}  style={{width:"100%" , height:"100%", objectFit:"cover"}}/>
                </div>
              </div>

              <div className="unicorn-agent-info">
                <div>
                  <div className="unicorn-agent-header">
                    <div className="unicorn-agent-main-info">
                      <h3 className="unicorn-agent-name">{agent.name}</h3>
                      <div className="unicorn-agent-title">{agent.title}</div>
                    </div>
                    {/* <div className="unicorn-company-logo ">
                      <img src={agent.companyLogo} style={{objectFit:"cover", width:"100%", height:"100%"}} />
                    </div> */}
                  </div>

                  <div className="unicorn-superagent-rating">
                    <div className="unicorn-superagent-badge">
                     <StarIcon style={{ color: '#FFD700' }} />    SUPERAGENT
                    </div>
                    <div className="unicorn-rating">
                     <Rating
  name="read-only"
  value={4.5}
  readOnly
  precision={0.5}
/>
                      <span>{agent.rating}</span>
                    </div>
                  </div>

                  <div className="unicorn-agent-details">
                    <div className="unicorn-detail-row">
                      <span className="unicorn-detail-label">Nationality:</span>
                      <span className="unicorn-detail-value">{agent.nationality}</span>
                    </div>
                    <div className="unicorn-detail-row">
                      <span className="unicorn-detail-label">Languages:</span>
                      <span className="unicorn-detail-value">{agent.languages}</span>
                    </div>
                  </div>
                </div>

                <div className="unicorn-agent-stats">
                  <div className="unicorn-stat-item">
                    <span className="unicorn-stat-label">For Sale:</span>
                    <span className="unicorn-stat-number">{agent.forSale}</span>
                  </div>
                  <div className="unicorn-stat-item">
                    <span className="unicorn-stat-label">For Rent:</span>
                    <span className="unicorn-stat-number">{agent.forRent}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AgentListDisplay;