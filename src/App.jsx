import Converter from "../features/Converter/Converter.jsx";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        bgGradient="linear(to-t, #ae085c, #2e0656)"
        height="100vh"
        justifyContent="center"
      >
        <Converter />
      </Flex>
    </>
  );
}

export default App;
