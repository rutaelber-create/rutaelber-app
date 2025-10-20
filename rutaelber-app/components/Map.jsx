"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
export default function Map({ markers=[] }){
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '' });
  if(!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return <p>Falta NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</p>;
  if(!isLoaded) return <p>Cargando mapa…</p>;
  const center = { lat: 10.488, lng: -66.879 }; // Caracas
  return (
    <GoogleMap zoom={12} center={center} mapContainerStyle={{width:'100%', height:'480px', borderRadius:12}}>
      {markers.map((m,i)=>(<Marker key={i} position={{lat: m.lat, lng: m.lng}} title={m.title}/>))}
    </GoogleMap>
  );
}