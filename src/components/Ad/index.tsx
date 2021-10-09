import { Box, Text, Flex, Button } from "@chakra-ui/react"
import { useCart } from "../../contexts/CartContext"

export default function Ad( props ) {

    const { handleAddItemCart } = useCart()
    
    return(
        <Box
            borderRadius={8}
            w="240px"
            h="300px"
            bg="gray.600">
                <Box 
                    w="100%" h="50%" m="auto" 
                    borderRadius={8}
                    borderBottomLeftRadius={0}
                    borderBottomRightRadius={0}
                    bgImage= {props.imgAd} 
                    backgroundPosition="center"
                    //backgroundRepeat="no-repeat"
                    >
                </Box>
                <hr/>
                <Text m="5px" align="center" fontWeight="bold">
                    {props.titleAd}
                </Text>
                <Flex align="center" justify="space-between">
                    <Text ml="15px" fontSize="25px">
                        R${props.priceAd}
                    </Text>
                    <Text mr="10px" fontSize="12px">
                        qntd: {props.qntdAd}
                    </Text>
                </Flex>
                <Button align="center" w="90%" ml="5%" mt="10px" colorScheme="orange" 
                onClick={() => handleAddItemCart(props.imgAd, props.titleAd, props.priceAd, props.qntdAd)}>
                    Comprar
                </Button>
                
        </Box>
    )
}