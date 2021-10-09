import { Flex, Stack, FormControl, FormLabel , Button, Icon , Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FormEvent } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { loginGit, loginGoogle } from "../../api/auth";


export function Section() {

    const router = useRouter()

    async function handleLoginGoogle(e: FormEvent) {
        e.preventDefault();

        await loginGoogle()
        .then(() => {
            router.push("/homepage")
        })
    }

    async function handleLoginGit(e: FormEvent) {
        e.preventDefault();
        
        await loginGit()
        .then(() => {
            router.push("/homepage")
        })
    }

    return (
        <Flex width="100vw" height="100vh" align="center" justify="center">
            <Flex as="form" width="400px" flexDir="column" height="500px" p={8} borderRadius={8} bg="gray.700" > 
                <Stack spacing={4}>
                    <Text align="center">SIGN IN</Text>
                    <FormControl isRequired>
                        <FormLabel>
                            Email:
                        </FormLabel>
                        <Input 
                        name="email" 
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        focusBorderColor="green.300"
                        bgColor="gray.900"
                        variant="filled"
                        size="lg"
                        _hover={{
                            bgColor: 'gray.900'
                        }}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>
                                Password:
                        </FormLabel>
                        <Input 
                        name="password" 
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        focusBorderColor="green.300"
                        bgColor="gray.900"
                        variant="filled"
                        size="lg"
                        _hover={{
                            bgColor: 'gray.900'
                        }} />
                    </FormControl>
                </Stack>
        
                <Button type="submit" mt={6} colorScheme="green">
                    Login
                </Button>

                <Text mt={4} align="center">ou</Text>

                <Button mt={4} colorScheme="white" onClick={(e) => handleLoginGoogle(e)}>
                    <Icon as={FcGoogle} fontSize={25} m={1}/>
                    <Text>Sign in with Google</Text>
                </Button>

                <Button mt={2} colorScheme="white" onClick={(e) => handleLoginGit(e)}>
                    <Icon as={AiFillGithub} fontSize={25} m={1}/>
                    <Text>Sign in with GitHub</Text>
                </Button>
            </Flex>
        </Flex>
    )
}