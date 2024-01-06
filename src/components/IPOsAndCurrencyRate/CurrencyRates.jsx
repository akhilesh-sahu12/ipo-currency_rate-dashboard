import React, { useState, useEffect } from 'react';

const CurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          'https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_dc1a1dcdf92f4778a549db30dd4eafb4'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch currency rates');
        }

        const data = await response.json();
        setCurrencyRates(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCurrencyRates();
  }, []);

  return (
    <div className="currency-rates-container">
      <h2>Latest Currency Rates</h2>
      <ul>
        {currencyRates.map((rate) => (
          <li key={rate.symbol}>
            <strong>{rate.symbol}:</strong> {rate.rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyRates;
