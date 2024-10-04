import axios from "axios";

const getStockData = async (stockSymbol) => {
  try {
    const url = `${process.env.STOCK_URL}query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&outputsize=compact&apikey=${process.env.API_KEY}`;
    const response = await axios.get(url);

    const stockData = response.data["Time Series (Daily)"];
    const data = [];

    for (let date in stockData) {
      const closeValue = stockData[date]["4. close"];
      data.push(parseFloat(closeValue));
    }

    const shortTermMA = movingAverage(data, 5);
    const longTermMA = movingAverage(data, 10);

    return [shortTermMA, longTermMA, data[0]];
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};

const movingAverage = (data, period) => {
  if (data.length < period) {
    throw new Error("Not enough data to calculate moving average");
  }
  const movingAverage =
    data.slice(0, period).reduce((sum, price) => sum + price, 0) / period;

  return movingAverage;
};

export { getStockData };
