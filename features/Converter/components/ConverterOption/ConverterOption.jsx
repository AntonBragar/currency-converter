import React from "react";
import { Avatar, Flex, Select } from "@chakra-ui/react";
import { useFlags } from "../../../common/hooks/useFlags.js";

const ConverterOption = ({
  currency,
  currencyList,
  onCurrencyChange,
  symbol,
}) => {
  const { flagUrl } = useFlags(currency);
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      <Avatar src={flagUrl} size="xs" />
      <Select
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency} - {symbol[currency]}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
