import { Flex, Text, Img, Button } from '@chakra-ui/react'
import { CloseIcon } from "@chakra-ui/icons"
import { useApp } from '../../contexts/contextApi'
import React, { useState } from 'react'

export const ModalItem = ({ photo, price, description }) => {

    const { setModalState } = useApp()

    const [itemsAdded, setItemsAdded] = useState([])

    const addToBag = () => {
        const items = []
        const newItems = {
            photo,
            price,
            description
        }
        setItemsAdded([...itemsAdded, newItems])
        console.log(itemsAdded)
    }

    return (
        <Flex align="center" borderRadius="20px" w="100%" flexDir="column">
            <Flex w="100%" align="center" p="20px" justify="flex-end">
                <CloseIcon onClick={() => setModalState(false)} cursor="pointer" />
            </Flex>
            <Flex gap="20px" flexDir="column">
                <Img borderRadius="20px" objectFit="cover" backgroundPosition="center" src={photo} />
                <Text w="200px" textAlign="center" fontWeight="bold">R$ {price}</Text>
                <Text color="#fff" fontWeight="bold">Descrição do produto: {description}</Text>
            </Flex>
            <Flex position="absolute" bottom="20px" gap="10px">
                <Button variant="link" transition="all 0.5s ease-in-out" w="70%" colorScheme="teal">Especificações</Button>
                <Button w="100%" colorScheme="twitter" onClick={() => addToBag()}>Adicionar ao carrinho</Button>
            </Flex>
        </Flex >
    )
}
