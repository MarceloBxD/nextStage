import './App.css'
import { Flex, Img, Modal, Text, useDisclosure } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'
import { ModalItem } from "./components/ModalItem/index"
import { useApp } from "./contexts/contextApi.jsx"

function App() {

  const { modalState, setModalState } = useApp()

  const [data, setData] = useState([])
  const [clickedItem, setClickedItem] = useState(undefined)

  useEffect(() => {
    const gameApiReq = async () => {
      const api = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=celular")
      const json = await api.json()
      setData(json.results)
    }

    gameApiReq()

  }, [])

  return (
    <Flex w="100%" p="40px" gap="10px" justify="center" align="center" flexWrap="wrap" h="100%">
      {modalState &&
        <Flex position="fixed" borderRadius="20px" color="#fff" top="20%" bgColor="#000" w="350px" h="500px">
          <ModalItem photo={clickedItem.thumbnail} description={clickedItem.description} price={clickedItem.price} />
        </Flex>
      }
      {data.map((item) => {
        return (
          <Flex onClick={() => setClickedItem(item) & setModalState(true)} cursor="Pointer" gap="5px" p="6px" _hover={{ backgroundColor: "#ccc" }} flexDir="column" align="center" m="0 auto" w="200px" h="100%" key={item.id}>
            <Img src={item.thumbnail} />
            <Text fontWeight="400">{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>R$ {item.price}</Text>
          </Flex>
        )

      })}

    </Flex>
  )
}

export default App
