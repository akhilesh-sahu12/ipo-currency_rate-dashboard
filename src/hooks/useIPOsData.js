import { useState, useEffect } from 'react';

const STOCK_API_BASE_URL = 'https://api.iex.cloud/v1';
const API_KEY = 'pk_dc1a1dcdf92f4778a549db30dd4eafb4';

const useIPOsData = () => {
    const [IPOs, setIPOs] = useState([]);

    useEffect(() => {
        const fetchIPOsData = async () => {
            try {
                const response = await fetch(`${STOCK_API_BASE_URL}/data/core/upcoming_ipos/market?token=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch stock data');
                }
                const data = await response.json();
                setIPOs(data);
            } catch (error) {
                console.error(error.message);
                // Avoid throwing an error here, just log it and let the component handle it
            }
        };
        fetchIPOsData();
    }, []);

    return IPOs || []; // Return an empty array if IPOs is undefined
};

export default useIPOsData;
