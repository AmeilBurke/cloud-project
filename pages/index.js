import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Center,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

export default function Home() {
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    axios.get("/api/getCount").then((response) => {
      setClickCounter(response.data.numberCount);
    });
  }, []);

  if (clickCounter === 0) {
    return <div>Loading...</div>;
  }

  const incrementCount = () => {
    setClickCounter(clickCounter + 1);
    axios
      .post("/api/postCountIncrement", {
        NumberId: 0,
        numberCount: clickCounter,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const resetCount = () => {};

  return (
    <Box h="100vh" w="100vw" bg="black" overflowX="hidden">
      <Container h="100vh" maxW="container.xl">
        <Center h="100%" display="flex" flexDirection="column">
          <Text mb="4rem" color="white" fontSize="3rem" textAlign="center">
            Hi Dylan.
          </Text>

          <Box>
            <Heading textAlign="center" color="white" opacity="90%" mb="1rem">
              How does Moses make beer?
            </Heading>
            <Text textAlign="center" color="white" mb="2rem" fontSize="1.5rem">
              He brews.
            </Text>
            <Text
              fontStyle="italic"
              textAlign="center"
              color="white"
              mb="4rem"
              opacity="50%"
              fontSize="1rem"
            >
              You could learn a thing or 2 from him.
            </Text>
          </Box>

          <VStack w="100%">
            <Button onClick={incrementCount} w="25%" bg="white">
              Click Me!
            </Button>
            <Text color="white" fontSize="3rem" textAlign="center">
              {clickCounter ? clickCounter : 0}
            </Text>
            <Text color="grey" fontSize="0.75rem" textAlign="center" mb="4rem">
              people found this funny.
            </Text>
          </VStack>
        </Center>
      </Container>
    </Box>
  );
}
