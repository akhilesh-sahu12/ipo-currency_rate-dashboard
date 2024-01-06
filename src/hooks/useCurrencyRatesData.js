import { useState, useEffect } from 'react';

const useCurrencyRatesData = () => {
  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch(
          'https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_dc1a1dcdf92f4778a549db30dd4eafb4'
        );

        if (!response || !response.ok) {
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

  return currencyRates || []; // Return an empty array if IPOs is undefined
};

export default useCurrencyRatesData;
