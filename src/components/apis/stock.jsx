import React, { useEffect, useState } from 'react';

const StockData = () => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const apiKey = '01WUKPUVR43WYTEN';
      const symbols = ['TSLA', 'AAPL', 'GOOGL', 'MSFT', 'AMZN'];
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Checking if the API response contains an error message
        if (data['Error Message']) {
          throw new Error('Failed to fetch stock data for symbol: ' + symbol);
        }
        setStock(data);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch stock data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) {
    return <div>Loading stock data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      {stock ? (
        <pre>{JSON.stringify(stock, null, 2)}</pre>
      ) : (
        <p>No stock data available.</p>
      )}
    </div>
  );
};

export default StockData;