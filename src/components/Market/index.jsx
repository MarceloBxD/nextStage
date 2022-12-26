import { Flex, Text, Img, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useApp } from '../../contexts/contextApi'

export const Market = () => {

    const { itemsAdded } = useApp()

    const [quantity, setQuantity] = useState(1)

    return (
        <Flex justify="center" align="center" flexWrap="wrap" w="100%">
            {itemsAdded.length === 0 && <Text fontSize="20px" m="0 auto">Nenhum item adicionado até o momento...</Text>}
            {itemsAdded.map((item, index) => (
                <Flex Flex key={index} gap="6px" p="6px" flexDir="column" align="center" m="30px auto" w="200px" h="100%" >
                    <Img src={item.photo} />
                    <Text fontWeight="400">{item.title}</Text>
                    <Text >R$ {item.price}</Text>
                    <Input id={item.id} onChange={e => setQuantity(e.target.value)} type="number" w="50px" defaultValue="1" />
                    <Button variant="ghost" colorScheme="red">Remover do carrinho</Button>
                    <Text>R$ {item.price * quantity}</Text>
                </Flex>

            ))
            }
        </Flex >
    )
}
