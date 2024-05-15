import React, { useState } from "react";
import { Container, VStack, HStack, Button, Input, Text } from "@chakra-ui/react";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals, FaBackspace, FaSquareRootAlt, FaPercentage } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const sanitizedInput = input.replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/log/g, "Math.log").replace(/sqrt/g, "Math.sqrt");
      setResult(eval(sanitizedInput));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input value={input} isReadOnly placeholder="0" size="lg" textAlign="right" />
        <Text fontSize="2xl">{result}</Text>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleInput("sin(")} flex="1">
            sin
          </Button>
          <Button onClick={() => handleInput("cos(")} flex="1">
            cos
          </Button>
          <Button onClick={() => handleInput("tan(")} flex="1">
            tan
          </Button>
          <Button onClick={() => handleInput("log(")} flex="1">
            log
          </Button>
          <Button onClick={() => handleInput("sqrt(")} flex="1">
            <FaSquareRootAlt />
          </Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={handleClear} colorScheme="red" flex="1">
            C
          </Button>
          <Button onClick={handleBackspace} colorScheme="yellow" flex="1">
            <FaBackspace />
          </Button>
          <Button onClick={() => handleInput("/")} colorScheme="blue" flex="1">
            <FaDivide />
          </Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleInput("7")} flex="1">
            7
          </Button>
          <Button onClick={() => handleInput("8")} flex="1">
            8
          </Button>
          <Button onClick={() => handleInput("9")} flex="1">
            9
          </Button>
          <Button onClick={() => handleInput("*")} colorScheme="blue" flex="1">
            <FaTimes />
          </Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleInput("4")} flex="1">
            4
          </Button>
          <Button onClick={() => handleInput("5")} flex="1">
            5
          </Button>
          <Button onClick={() => handleInput("6")} flex="1">
            6
          </Button>
          <Button onClick={() => handleInput("-")} colorScheme="blue" flex="1">
            <FaMinus />
          </Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleInput("1")} flex="1">
            1
          </Button>
          <Button onClick={() => handleInput("2")} flex="1">
            2
          </Button>
          <Button onClick={() => handleInput("3")} flex="1">
            3
          </Button>
          <Button onClick={() => handleInput("+")} colorScheme="blue" flex="1">
            <FaPlus />
          </Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleInput("0")} flex="2">
            0
          </Button>
          <Button onClick={() => handleInput(".")} flex="1">
            .
          </Button>
          <Button onClick={handleCalculate} colorScheme="green" flex="1">
            <FaEquals />
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
