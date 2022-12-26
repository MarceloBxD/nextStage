import { Flex, Text, Img, Button } from '@chakra-ui/react'
import { CloseIcon } from "@chakra-ui/icons"
import { useApp } from '../../contexts/contextApi'
import React, { useState } from 'react'

export const ModalItem = ({ photo, price, title }) => {

    const { setModalState, itemsAdded, setItemsAdded } = useApp()

    const addToBag = () => {
        const newItems = {
            id: Math.random(),
            photo: photo,
            price: price,
            title: title,
        }
        console.log(itemsAdded)
        setItemsAdded([...itemsAdded, newItems])
    }

    return (
        <Flex align="center" borderRadius="20px" w="100%" flexDir="column">
            <Flex w="100%" align="center" p="20px" justify="flex-end">
                <CloseIcon onClick={() => setModalState(false)} cursor="pointer" />
            </Flex>
            <Flex gap="20px" flexDir="column">
                <Img borderRadius="20px" objectFit="cover" backgroundPosition="center" src={photo} />
                <Text fontSize="35px" w="100%" textAlign="center" fontWeight="bold">R$ {price}</Text>
                <Text color="#fff" fontWeight="bold">Descrição: {title}</Text>
            </Flex>
            <Flex position="absolute" bottom="20px" gap="10px">
                <Button variant="link" transition="all 0.5s ease-in-out" w="70%" colorScheme="teal">Especificações</Button>
                <Button w="100%" colorScheme="twitter" onClick={() => addToBag()}>Adicionar ao carrinho</Button>
            </Flex>
        </Flex >
    )
}
