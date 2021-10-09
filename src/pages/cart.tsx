import { Box, Flex, Button, Text } from "@chakra-ui/react"
import Item from "../components/Item"
import { useCart } from "../contexts/CartContext"
import { MdClose } from "react-icons/md";



export default function CartItems() {

    const {cart, clearCart} = useCart()

    const totalPrice = cart.reduce((acc: any, current: { priceAd: any }) => acc + current.priceAd, 0)


    return(
        <Box w="90%" m="auto" align="center" justify="center"  >
            <Box w="90%" h="auto" maxHeight="350px" overflow="auto" m="50px" p="15px" justify="space-between" border="1px" borderColor="green">
                    {cart.map((cartItem: { titleAd: any; priceAd: any }, index: Key) => (
                        <ul >
                            <Item 
                                key={index}
                                itemIndex={index}
                                title={cartItem.titleAd}
                                price={cartItem.priceAd}
                            />
                        </ul>
                    ))}    
                    {
                        (cart != 0)&&  
                            <Button   
                                onClick={() => clearCart()}
                                colorScheme="transparent"
                                leftIcon={<MdClose/>}>
                                Remover tudo
                            </Button>
                    }                          
            </Box>
            
            <Flex ml="10%" mt="20px" mr="10%" align="center" justify="space-between">
                <Button colorScheme="orange" w="20%">
                    Finalizar pedido
                </Button>
                <Text>
                    Total: R$ {totalPrice.toFixed(2)}
                </Text>
            </Flex>
        </Box>
    )
}