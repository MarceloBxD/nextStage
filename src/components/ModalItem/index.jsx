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
    <Flex align="center" borderRadius="10px" w="100%" flexDir="column">
      <Flex w="100%" align="center" p="20px" justify="flex-end">
        <CloseIcon onClick={() => setModalState(false)} cursor="pointer" />
      </Flex>
      <Flex gap="20px" flexDir="column">
        <Img
          borderRadius="20px"
          objectFit="cover"
          backgroundPosition="center"
          src={photo}
        />
        <Text fontSize="35px" w="100%" textAlign="center" fontWeight="bold">
          R$ {price}
        </Text>
        <Text color="#fff" fontWeight="bold">
          Descrição: {title}
        </Text>
      </Flex>
      <Flex position="absolute" bottom="20px" gap="10px">
        <Button
          variant="link"
          transition="all 0.5s ease-in-out"
          w="70%"
          color="#fff"
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
  );
};
