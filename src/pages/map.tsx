import { Box, Flex, Input, FormLabel, FormControl, Button, Stack} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
    loading: () => "Loading...",
    ssr: false
  })



const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/teresina.json?access_token=pk.eyJ1IjoicmFwaGFlbG51bmVzZHMiLCJhIjoiY2tzc29jOW5sMGw4czJ3bGJ4cW9iMGI0cCJ9.BjFyyTyHrSU1CLWyVdqsfA`


export default function MapPage(): JSX.Element {
    
    const [locations, setLocations] = useState([])

    const [urlLocation, setUrlLocation] = useState(" ")

    const [latitude, setLatitude] = useState()
    
    const [longitude, setLongitude] = useState()

    function searchLocal(e: FormEvent){
        e.preventDefault();
        const local = (document.getElementById("local") as HTMLInputElement).value;
        const urlLocal = `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1IjoicmFwaGFlbG51bmVzZHMiLCJhIjoiY2tzc29jOW5sMGw4czJ3bGJ4cW9iMGI0cCJ9.BjFyyTyHrSU1CLWyVdqsfA`
        console.log("urlLocal::::", urlLocal)
        setUrlLocation(urlLocal);
        console.log("localização::", urlLocation)

    const fetchLocations = async () => {
        await fetch(url).then((response) =>
            response.text()).then((res) => JSON.parse(res))
        .then((json) => {
            setLocations(json.features);
            var longitude = json.features.[0].center[0]
            var latitude = json.features.[0].center[1]

            setLatitude(latitude)
            setLongitude(longitude)

            console.log("responst:", json);
            console.log("lat:", latitude, ", and lon:", longitude);
        }).catch((err) => console.log({ err }));
        };
        fetchLocations();
    }

    
    

    useEffect(() => {
        const fetchLocations = async () => {
            await fetch(url).then((response) =>
                response.text()).then((res) => JSON.parse(res))
            .then((json) => {
                setLocations(json.features)
            }).catch((err) => console.log({ err }));
            };

            fetchLocations();
    }, []);

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
                <Map locations={locations} lat={latitude} lon={longitude} />
            </Flex>
        </Box>
    )
}