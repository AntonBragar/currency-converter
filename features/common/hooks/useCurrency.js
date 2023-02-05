import { useState } from "react";
import { useQueries } from "react-query";
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData.js";

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState("CAD");
  const [currencyTwo, setCurrencyTwo] = useState("USD");

  const [ratesData, symbolsData] = useQueries([
    {
      queryKey: ["rates", currencyOne],
      queryFn: () => fetchRates(currencyOne),
      staleTime: Infinity,
      select: ({ rates, date, timestamp }) => {
        return { rates, date, timestamp };
      },
      keepPreviousData: true,
    },
    {
      queryKey: ["symbols"],
      queryFn: fetchSymbols,
      staleTime: Infinity,
      select: ({ symbols }) => symbols,
    },
  ]);

  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);

  const convertedAmount = (ratesData.data?.rates[currencyTwo] * amount).toFixed(2);

  const date = new Date(ratesData.data?.date).toLocaleDateString();
  const time = new Date(ratesData.data?.timestamp).toLocaleTimeString("en-US");
  const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {};
  return {
    amount,
    setAmount,
    currencyOne,
    currencyTwo,
    setCurrencyOne,
    setCurrencyTwo,
    ratesData,
    symbolsData,
    date,
    time,
    currencyList,
    convertedAmount,
    isLoading,
    isError,
  };
};
