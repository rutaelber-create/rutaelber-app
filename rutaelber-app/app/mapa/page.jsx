"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
const Map = dynamic(()=>import('@/components/Map'), { ssr:false });

export default function Mapa(){
  const [markers, setMarkers] = useState([{lat:10.498, lng:-66.904, title:'Punto A'}]);

  useEffect(()=>{(async()=>{
    const { data, error } = await supabase.from('clientes').select('lat,lng,nombre').limit(100);
    if(!error && Array.isArray(data) && data.length){
      setMarkers(data.map(c=>({lat:Number(c.lat), lng:Number(c.lng), title:c.nombre||'Cliente'})));
    }
  })()},[]);

  return (<div>
    <h2>Mapa</h2>
    <Map markers={markers}/>
  </div>);
}