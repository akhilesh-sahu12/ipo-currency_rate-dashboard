import React from 'react';
import useIPOsData from '../../hooks/useIPOsData'; 

const UpcomingIPOs = () => {
    const upcomingIPOs = useIPOsData(); // Fetching IPOs data using the hook

    return (
      <div className="upcoming-ipos-container">
        <h2>Upcoming IPOs</h2>

        <div className="ipo-cards">
          {upcomingIPOs.map((ipo, index) => (
            <div key={index} className="ipo-card">
              <h3>{ipo.companyName}</h3>
              <p>Symbol: {ipo.symbol}</p>
              <p>Offering Date: {ipo.offeringDate}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default UpcomingIPOs;
