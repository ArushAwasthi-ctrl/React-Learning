import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/0648a5871115c75a36cb4573/latest/${currency}`
        );
        const result = await response.json();
        setData(result.conversion_rates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currency]);

  console.log(data);
  return data;
}


