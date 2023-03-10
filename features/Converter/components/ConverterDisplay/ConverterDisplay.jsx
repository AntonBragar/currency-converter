import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ConverterDisplay = ({
  convertedAmount,
  currencyOne,
  amount,
  time,
  date,
  currencyTwo,
}) => {
  return (
    <Box textAlign="right">
      <Text fontSize="xl" fontWeight="bold" color="gray.800">
        {amount} {currencyOne}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="purple.500">
        {convertedAmount} {currencyTwo}
      </Text>
      <Text fontSize="xs" color="gray.400">
        Market rates collected - {date} {time}
      </Text>
    </Box>
  );
};

export default ConverterDisplay;
