import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Siderbar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,

})

const options = {

};

const series = [
    {name: 'series1', data: [2,6,12,18,24]}
]

export default function HomePage() {

    return(
        <Box width="100%" maxWidth="1080px" m="auto">

            <Header />

            <Flex>       
                <Sidebar />
                
                <SimpleGrid 
                    flex="1"
                    m={4} p={4}
                    gap="4"
                    minChildWidth="320px">
                     <Box
                        p="8"
                        borderRadius={8}
                        bg="gray.600">
                            <Text>Gráfico 1</Text>
                            <Chart type="area" height={168} options={options} series={series} />
                    </Box>
                    <Box
                        p="8"
                        borderRadius={8}
                        bg="gray.600">
                        <Text>Gráfico 2</Text>
                    </Box>
                </SimpleGrid>
            </Flex>

            <Footer />

        </Box>
    )
}
