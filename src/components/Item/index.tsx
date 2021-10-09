import { Flex, Box, Button } from "@chakra-ui/react"
import { useCart } from "../../contexts/CartContext"
import { MdClose } from "react-icons/md";


export default function Item({title, price, itemIndex}) {

    const { handleRemoveItemCart } = useCart()

    return(
            <Flex w="95%" m="1rem" p="0.5rem" justify="space-between" >
                <Box >
                    <h2>{title}</h2>
                </Box>
                <Box>
                    <h2> R$ {price}</h2>
                </Box> 
                <Button
                    onClick={() => handleRemoveItemCart(itemIndex)}
                    colorScheme="transparent"
                    leftIcon={<MdClose/>}>
                        Remover
                </Button>
            </Flex>
    )
}