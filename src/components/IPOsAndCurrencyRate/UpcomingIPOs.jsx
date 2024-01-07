import React,{ useState } from 'react';
import useIPOsData from '../../hooks/useIPOsData'; 

const UpcomingIPOs = () => {
    const [refresh, setRefresh] = useState(false);
    const upcomingIPOs = useIPOsData(refresh); // Fetching IPOs data using the hook

    const handleRefresh = () => {
      setRefresh(!refresh);
    };

    return (
      <div className="upcoming-ipos-container">
        <h2>Upcoming IPOs</h2>
        <button onClick={handleRefresh} className="refresh-button">Refresh</button>
        <div className="ipo-cards">
          {upcomingIPOs.map((ipo, index) => (
            <div key={index} className="ipo-card">
              <h3>{ipo.companyName}</h3>
              <p>Symbol: {ipo.symbol}</p>
              <p>Offering Date: {ipo.offeringDate}</p>
              <p>Volume: {ipo.volume}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default UpcomingIPOs;
