import React, { useState, useEffect } from 'react';
import Highchart from './Highchart';

const HighChartDataFetcher = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [errorMsg, serErrorMsg]=useState("");
  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await fetch('https://api.iex.cloud/v1/fx/historical?symbols=USDEUR&last=100&token=pk_dc1a1dcdf92f4778a549db30dd4eafb4');

        if (!response.ok) {
          throw new Error('Failed to fetch historical data');
        }

        const data = await response.json();
        setHistoricalData(data);
      } catch (error) {
        serErrorMsg("Error fetching historical data:");
        console.error('Error fetching historical data:', error.message);
      }
    };

    fetchHistoricalData();
  }, []);

  return (
    <div data-testid="highchart" style={{ gridArea: 'main', margin: '35px' }}>
    <Highchart data={historicalData} />
    <h1>{errorMsg}</h1>
  </div>
  );
};

export default HighChartDataFetcher;
