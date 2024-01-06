import React from 'react';
import useCurrencyRatesData from '../../hooks/useCurrencyRatesData';

const CurrencyRates = () => {
  const currencyRates = useCurrencyRatesData();

  return (
    <div className="currency-rates-container">
      <h2>Latest Currency Rates</h2>
      <ul>
        {currencyRates && currencyRates.map((rate) => (
          <li key={rate.symbol}>
            <strong>{rate.symbol}:</strong> {rate.rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyRates;
