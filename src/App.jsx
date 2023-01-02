import "./App.css";
import { Flex, Img, Modal, Text, useDisclosure } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { ModalItem } from "./components/ModalItem/index";
import { Spinner } from "@chakra-ui/react";
import { useApp } from "./contexts/contextApi.jsx";

function App() {
  const { modalState, setModalState } = useApp();

  const [data, setData] = useState([]);
  const [clickedItem, setClickedItem] = useState(undefined);

  useEffect(() => {
    const gameApiReq = async () => {
      const api = await fetch(
        "https://api.mercadolibre.com/sites/MLB/search?q=celular"
      );
      const json = await api.json();
      setData(json.results);
    };

    gameApiReq();
  }, []);

  return (
    <Flex
      w="100%"
      p="40px"
      gap="10px"
      justify="center"
      align="center"
      flexWrap="wrap"
      h="100%"
    >
      {data.length === 0 && <Spinner position="fixed" top="50%" size="lg" />}
      {modalState && (
        // position="fixed"
        // borderRadius="20px"
        // p="15px"
        // zIndex="100"
        // color="#fff"
        // top="5%"
        // bgColor="silver "
        // w="350px"
        // h="650px"

        // <ModalItem
        //     photo={clickedItem.thumbnail}
        //     title={clickedItem.title}
        //     price={clickedItem.price}
        //   />
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
            w="450px"
            h="650px"
            backgroundColor="white"
            borderRadius="10px"
            flexDir="column"
            align="center"
            justify="center"
          >
            <Flex>
              <ModalItem
                photo={clickedItem.thumbnail}
                title={clickedItem.title}
                price={clickedItem.price}
              />
            </Flex>
          </Flex>
        </Flex>
      )}
      {data.map((item) => {
        return (
          <Flex
            key={item.id}
            onClick={() => setClickedItem(item) & setModalState(true)}
            cursor="Pointer"
            gap="5px"
            p="8px"
            _hover={{ backgroundColor: "#ccc" }}
            flexDir="column"
            align="center"
            m="0 auto"
            w="200px"
            h="100%"
          >
            <Img src={item.thumbnail} />
            <Text fontWeight="400">{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>R$ {item.price}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default App;
