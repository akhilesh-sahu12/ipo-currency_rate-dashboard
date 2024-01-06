import React from 'react';
import UpcomingIPOs from '../IPOsAndCurrencyRate/UpcomingIPOs'; 
import CurrencyRates from '../IPOsAndCurrencyRate/CurrencyRates';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
    <div className='ipos'>
        <UpcomingIPOs />
        
    </div>
    <div className='currency-rate'>
        <CurrencyRates/>
    </div>
    </div>
  );
};

export default Dashboard;
