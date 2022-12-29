import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Flex
      w="100%"
      h="8vh"
      gap="15px"
      fontWeight="bold"
      justify="space-between"
      fontFamily="Unbounded"
      flexDir={{ base: "column", md: "row" }}
      px="20px"
      fontSize="26px"
      letterSpacing="3px"
      align="center"
    >
      <Text>Nextstage</Text>
      <Flex
        textDecor="underline"
        fontSize="16px"
        fontFamily="sans-serif"
        gap="10px"
      >
        <Link to="/">Home</Link>
        <Link to="/market">Market</Link>
        <Link to="/contact">Contact</Link>
      </Flex>
    </Flex>
  );
};
