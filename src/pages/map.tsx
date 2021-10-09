import { Box, Flex, Input, FormLabel, FormControl, Button, Stack} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import Map from '../components/Map/index'
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map/index"), {
    loading: () => "Loading...",
    ssr: false
  });
  

export default function Map() {
    
    const [locations, setLocations] = useState([]);

    function searchLocal(e: FormEvent){
        e.preventDefault();
        const local = (document.getElementById("local") as HTMLInputElement).value;
        console.log("localização-campo:", local)
        var url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1IjoicmFwaGFlbG51bmVzZHMiLCJhIjoiY2tzc29jOW5sMGw4czJ3bGJ4cW9iMGI0cCJ9.BjFyyTyHrSU1CLWyVdqsfA`
        
        return url;
    };

    useEffect(() => {
        const fetchLocations = async () => {
            await fetch(url).then((response) =>
                response.text()).then((res) => JSON.parse(res))
            .then((json) => {
                setLocations(json.features);
                console.log("responst:", json);
            }).catch((err) => console.log({ err }));
            };
            fetchLocations();
    }, [])


    return(
        <Box display="flex" w="100vw" h="100vh">
            <Flex w={300}>
                <Stack spacing={4} m="5">
                        <FormLabel>Localização:</FormLabel>
                        <Input 
                        name="local" 
                        type="text"
                        id="local"
                        placeholder="Enter your local"
                        focusBorderColor="green.300"
                        bgColor="gray.900"
                        variant="filled"
                        size="lg"
                        _hover={{
                            bgColor: 'gray.900'
                        }}
                        />
                        <Button colorScheme="green" onClick={(e) => searchLocal(e)}>
                            Localizar
                        </Button>
                </Stack>
            </Flex>

            <Flex flex="1" >
                <MapBox locations={locations} />
            </Flex>
        </Box>
    )
}