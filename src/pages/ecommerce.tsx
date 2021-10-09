import { Box, Flex, SimpleGrid} from "@chakra-ui/react";
import Ad from "../components/Ad";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import CartItems from "../pages/cart";
import { ads } from "../components/Ad/ads"
//import { useCart } from "../contexts/CartContext";

export default function Ecommerce () {

    //const { cart, handleAddItemCart, handleRemoveItemCart, clearCart } =  useCart()

    return(
        <Box width="100%" maxWidth="1080px" m="auto">

            <Header />

            <Flex>       
                <Sidebar />

                <SimpleGrid 
                    flex="1"
                    m={2} p={2}
                    spacing="10px"
                    height="100%"
                    minChildWidth="230px">
                    
                    {ads.map((ad, index) => (
                        <Ad imgAd={ad.url} titleAd={ad.title} priceAd={ad.price} qntdAd={ad.qntd} />
                    ))}
                </SimpleGrid>
            </Flex>

            <CartItems />
        </Box>
        
    )
}