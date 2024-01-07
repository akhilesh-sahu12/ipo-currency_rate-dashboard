import React, { useState } from 'react';
import useCurrencyRatesData from '../../hooks/useCurrencyRatesData';

const CurrencyRates = () => {
  const [refresh, setRefresh] = useState(false);
  const currencyRates = useCurrencyRatesData(refresh);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="currency-rates-container">
      <h2>Latest Currency Rates</h2>
      <button onClick={handleRefresh}>Refresh</button>
      <ul>
        {currencyRates && currencyRates.map((currencyRate) => (
          <li key={currencyRate.symbol}>
            <li><strong>Date:</strong> {new Date(currencyRate.timestamp).toLocaleString()}</li>
            <li><strong>{currencyRate.symbol}:</strong> {currencyRate.rate}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyRates;
