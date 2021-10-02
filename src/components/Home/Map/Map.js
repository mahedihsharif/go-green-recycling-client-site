import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const Map = () => {
  const containerStyle = {
    height: "50vh",
    
  };
  const center = {
    lat: 23.780485,
    lng: 90.424761,
  };
  return (
    <>
 
        <LoadScript googleMapsApiKey="AIzaSyC-7piuW8PQZzxCC_-PhOj80XsQzsKbDnk">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <></>
          </GoogleMap>
        </LoadScript>
      
    </>
  );
};

export default Map;
