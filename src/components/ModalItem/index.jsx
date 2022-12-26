import { Flex, Text, Img } from '@chakra-ui/react'
import { CloseIcon } from "@chakra-ui/icons"
import { useApp } from '../../contexts/contextApi'
import React from 'react'

export const ModalItem = ({ photo, price, description }) => {

    const { setModalState } = useApp()

    return (
        <Flex align="center" borderRadius="20px" w="100%" flexDir="column">
            <Flex w="100%" align="center" p="20px" justify="space-between">
                <Text fontWeight="bold">{description}</Text>
                <CloseIcon onClick={() => setModalState(false)} cursor="pointer" />
            </Flex>
            <Flex gap="20px" flexDir="column">
                <Img borderRadius="20px" objectFit="cover" backgroundPosition="center" src={photo} />
                <Text w="200px" textAlign="center" fontWeight="bold">R$ {price}</Text>
            </Flex>
        </Flex>
    )
}
