// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDbuQxRAEUASaUmvXX_b9yPgknBdcjNlo4",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <MapExist />
      <br />
    </div>
  );
};

const MapExist = () => {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 19.66328, lng: 75.300293 }}
      mapContainerClassName="containerformap"
    >
      <Marker position={{ lat: 19.66328, lng: 75.300293 }} />
    </GoogleMap>
  );
};

export default Map;
