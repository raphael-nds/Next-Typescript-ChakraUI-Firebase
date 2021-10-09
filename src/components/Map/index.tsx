import { useState, SetStateAction, Key } from "react";
import ReactMapGL, { Marker } from "react-map-gl";


export default function Map({locations, lat, lon}) {
    
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // The latitude and longitude of the Piauí
        latitude: -5.0896,
        longitude: -42.8096,
        zoom: 10
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={'pk.eyJ1IjoicmFwaGFlbG51bmVzZHMiLCJhIjoiY2tzc29jOW5sMGw4czJ3bGJ4cW9iMGI0cCJ9.BjFyyTyHrSU1CLWyVdqsfA'}
            {...viewport}
            onViewportChange={(nextViewport: SetStateAction<{
                width: string; height: string;
                latitude: number; longitude: number; zoom: number;
                
            }>) => setViewport(nextViewport)}
            >   
                {locations.map((location: { id: Key; center: number[]; }) => (
                        <div key={location.id}>
                            <Marker
                                latitude={location.center[1]}
                                longitude={location.center[0]}
                                
                                offsetLeft={-20}
                                offsetTop={-10}>
                                    <span role="img" aria-label="push-pin">📌</span>
                            </Marker>
                        </div>
                    ))}
        </ReactMapGL>
    );
}