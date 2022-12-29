import { Flex, Text, Img, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useApp } from "../../contexts/contextApi";

export const Market = () => {
  const { itemsAdded, setItemsAdded } = useApp();

  const [quantity, setQuantity] = useState(1);

  const handleRemove = () => {
    const newItems = itemsAdded.filter((item) => item.id !== item.id);
    setItemsAdded(newItems);
  };

  return (
    <Flex justify="center" align="center" flexWrap="wrap" w="100%">
      {itemsAdded.length === 0 && (
        <Text fontSize="20px" m="0 auto">
          Nenhum item adicionado até o momento...
        </Text>
      )}
      {itemsAdded.map((item, index) => (
        <Flex
          key={index}
          gap="6px"
          borderRadius="10px"
          _hover={{ backgroundColor: "silver" }}
          p="6px"
          flexDir="column"
          align="center"
          m="30px auto"
          w="200px"
          h="100%"
        >
          <Img src={item.photo} />
          <Text fontWeight="400">{item.title}</Text>
          <Text>R$ {item.price}</Text>
          <Input
            id={item.id}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            w="50px"
            defaultValue="1"
          />
          <Button
            id={item.id}
            variant="ghost"
            onClick={() => handleRemove()}
            colorScheme="red"
          >
            Remover do carrinho
          </Button>
          <Text>R$ {item.price * quantity}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
