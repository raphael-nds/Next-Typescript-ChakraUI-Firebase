import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { GoLocation } from "react-icons/go";
import { RiDashboardLine } from "react-icons/ri";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { auth } from "../../services/firebase";
import Icon from "@chakra-ui/icon";
import { useRouter } from "next/router";
import { FormEvent } from "react";


export default function Sidebar() {

    const router = useRouter();

    const handleUser = (e: FormEvent) => {
        e.preventDefault()
        router.push("/usuarios")
    } 

    const handleHome = (e: FormEvent) => {
        e.preventDefault()
        router.push("/homepage")
    } 

    const handleMap = (e: FormEvent) => {
        e.preventDefault()
        router.push("/map")
    } 

    const handleEcommerce = (e: FormEvent) => {
        e.preventDefault()
        router.push("/ecommerce")
    } 

    const handleCart = (e: FormEvent) => {
        e.preventDefault()
        router.push("/cart")
    } 

    return(
        <Box as="aside" w={250} m={4} p={4}>
            <Stack spacing="8" align="flex-start" >
                    <Text align="left" fontSize="md" fontWeight="bold" color="gray.500">Geral</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link align="center" display="flex" onClick={(e) => handleHome(e)}>
                            <Icon 
                                    as={RiDashboardLine}
                                    fontSize="20px"/>
                            <Text ml={4}>Dashboard</Text>
                        </Link>
                        <Link align="center" display="flex" onClick={(e) => handleUser(e)}>
                            <Icon
                                    as={FiUser}
                                    fontSize="20px"/>
                            <Text ml={4}>Usuários</Text>
                        </Link>
                    </Stack>

                    <Text align="left" fontSize="md" fontWeight="bold" color="gray.500">Aplicações</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link align="center" display="flex" onClick={(e) => handleMap(e)}>
                            <Icon 
                                    as={GoLocation}
                                    fontSize="20px"/>
                            <Text ml={4}>Mapa</Text>
                        </Link>
                        <Link align="center" display="flex" onClick={(e) => handleEcommerce(e)}>
                            <Icon
                                    as={AiOutlineShop}
                                    fontSize="20px"/>
                            <Text ml={4}>E-commerce</Text>
                        </Link>
                        <Link align="center" display="flex" onClick={(e) => handleCart(e)}>
                            <Icon
                                    as={FiShoppingCart}
                                    fontSize="20px"/>
                            <Text ml={4}>Carrinho</Text>
                        </Link>
                    </Stack>
            </Stack>
        </Box>
    )
}