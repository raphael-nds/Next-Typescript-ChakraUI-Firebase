import { Box, Flex, Table, Thead, Tbody, Tr, Td } from "@chakra-ui/react"
import Header from "../components/Header/index"
import Sidebar from "../components/Siderbar/index"

export default function Usuarios() {

    
    return (
        <Box width="100%" maxWidth="1080px" m="auto">

            <Header />

            <Flex>       
                <Sidebar />

                <Box flex="1" m={4} p={4} >
                    <Table>
                        <Thead>
                            <Tr>
                                <Td>Usuário</Td>
                                <Td>E-mail</Td>
                                <Td>Ações</Td>
                            </Tr>
                        </Thead>
                        <Tbody>

                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}