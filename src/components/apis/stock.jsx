import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockData = () => {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const apiKey = '01WUKPUVR43WYTEN';
      const symbol = 'TSLA'; // Replace with the stock symbol you want to fetch data for
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data;
        setStock(data);
      } catch (error) {
        setError('Failed to fetch stock data');
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
    return <div>{error}</div>;
  }

  const stockMetaData = stock["Meta Data"];
  const timeSeries = stock["Time Series (5min)"];
  const latestTime = Object.keys(timeSeries)[0];
  const latestData = timeSeries[latestTime];

  return (
    <div>
      <h1>Stock Data for {stockMetaData["2. Symbol"]}</h1>
      <p>Last Refreshed: {stockMetaData["3. Last Refreshed"]}</p>
      <div>
        <h2>Latest Data</h2>
        <p>Open: {latestData["1. open"]}</p>
        <p>High: {latestData["2. high"]}</p>
        <p>Low: {latestData["3. low"]}</p>
        <p>Close: {latestData["4. close"]}</p>
        <p>Volume: {latestData["5. volume"]}</p>
      </div>
    </div>
  );
};

export default StockData;
