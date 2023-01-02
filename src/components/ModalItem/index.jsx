import { Flex, Text, Img, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useApp } from "../../contexts/contextApi";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

export const ModalItem = ({ photo, price, title }) => {
  const { setModalState, itemsAdded, setItemsAdded } = useApp();
  const toast = useToast();

  const addToMarket = () => {
    const newItems = {
      id: Math.floor(Math.random() * 100000),
      photo: photo,
      price: price,
      title: title,
    };
    console.log(itemsAdded);
    setItemsAdded([...itemsAdded, newItems]);
    setModalState(false);
  };

  return (
    <Flex
      align="center"
      borderRadius="10px"
      gap="10px"
      p="10px"
      w="100%"
      flexDir="column"
      zIndex="100"
    >
      <Flex w="100%" align="center" justify="flex-end">
        <CloseIcon onClick={() => setModalState(false)} cursor="pointer" />
      </Flex>
      <Flex gap="20px" w="300px" h="500px" justify="center" flexDir="column">
        <Flex flex="1" justify="center">
          <Img
            borderRadius="15px"
            objectFit="cover"
            backgroundPosition="center"
            src={photo}
          />
        </Flex>
        <Flex flexDirection="column" gap="40px" flex="1">
          <Text fontSize="35px" w="100%" textAlign="center" fontWeight="bold">
            R$ {price}
          </Text>
          <Text color="#000" fontWeight="bold">
            Descrição: {title}
          </Text>
        </Flex>
        <Flex position="absolute" bottom="50px" gap="10px">
          <Button
            variant="outline"
            transition="all 0.5s ease-in-out"
            w="70%"
            color="#000"
          >
            Especificações
          </Button>
          <Button
            w="100%"
            colorScheme="twitter"
            onClick={() =>
              addToMarket() &
              toast({
                title: "Item adicionado com sucesso!",
                description:
                  "Nós adicionamos o item ao seu carrinho com sucesso!",
                status: "success",
                duration: 1000,
                isClosable: true,
              })
            }
          >
            Adicionar ao carrinho
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
