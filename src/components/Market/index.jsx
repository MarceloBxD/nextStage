import { Flex, Text, Img, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useApp } from "../../contexts/contextApi";

export const Market = () => {
  const { itemsAdded, setItemsAdded } = useApp();

  const [quantity, setQuantity] = useState(1);

  const [payModal, setPayModal] = useState(false);

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
          _hover={{ backgroundColor: "#ccc" }}
          p="12px"
          flexDir="column"
          align="center"
          m="30px auto"
          w="200px"
          h="100%"
        >
          <Img src={item.photo} />
          <Text textAlign="center" fontWeight="400">
            {item.title}
          </Text>
          <Input
            id={item.id}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            w="50px"
            defaultValue="1"
          />
          <Text fontWeight="500">R$ {item.price * quantity}</Text>
          <Button
            id={item.id}
            variant="ghost"
            onClick={() => handleRemove()}
            colorScheme="red"
          >
            Remover do carrinho
          </Button>
          <Button
            variant="outline"
            onClick={() => setPayModal(true)}
            colorScheme="teal"
          >
            Comprar
          </Button>
          {payModal && (
            <Flex
              w="100%"
              h="100%"
              position="fixed"
              top="0"
              left="0"
              zIndex="100"
              justify="center"
              align="center"
              backgroundColor="rgba(0,0,0,0.5)"
            >
              <Flex
                w="400px"
                h="300px"
                p={["10px", "20px"]}
                backgroundColor="white"
                borderRadius="10px"
                flexDir="column"
                align="center"
                justify="center"
              >
                <Text fontSize="20px" fontWeight="400">
                  Você tem certeza que deseja comprar esse item?
                </Text>
                <Flex mt="40px" gap="15px">
                  <Button
                    variant="outline"
                    onClick={() => setPayModal(false)}
                    colorScheme="teal"
                  >
                    Sim
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setPayModal(false)}
                    colorScheme="red"
                  >
                    Cancelar
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      ))}
    </Flex>
  );
};
