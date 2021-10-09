import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Container, Content } from "./styles";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IconButton } from "@chakra-ui/button";
import { FormEvent } from "react";
import { auth } from "../../services/firebase";
import { signOut } from "@firebase/auth";
import { useRouter } from "next/dist/client/router";


export default function Header() {

    const user = auth.currentUser;

    const router = useRouter()

    function logout(e: FormEvent) {
        e.preventDefault();

        signOut(auth)
        .then(() => {
            // Sign-out successful.
            alert("Logout efetuado com sucesso ...")
            router.push("/");
          })
    }

    return (
        <Container>
            <Content>

                <Box as="aside" w={450} m={4} >
                    <Flex align="center">
                        <Avatar size="md" src={user.photoURL} />
                        <Box align="left"  m="2">
                            <Text>{user.displayName},</Text>
                            <Text fontSize="small" color="gray.400">{user.email}</Text>
                        </Box>

                        <IconButton 
                            colorScheme="white" 
                            aria-label="exit" 
                            icon={<RiLogoutBoxRLine/>}
                            fontSize="25px"
                            onClick={(e) => logout(e)}/>
                    </Flex>
                </Box>

                <nav>
                    <a>About</a>
                    <a>Portfolio</a>
                    <a>Contact</a>
                </nav>
            </Content>
        </Container>
    )
}