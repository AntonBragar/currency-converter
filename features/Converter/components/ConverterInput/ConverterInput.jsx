import React from "react";
import { FormLabel, Input } from "@chakra-ui/react";

const ConverterInput = ({ value, onAmountChange }) => {
  return (
    <>
      <FormLabel htmlFor="amount" color="purple.300">
        Amount
      </FormLabel>
      <Input
        id="amount"
        value={value}
        size="lg"
        type="number"
        min={0}
        onChange={(e) => onAmountChange(e.target.value)}
      />
    </>
  );
};

export default ConverterInput;
