"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Panel(){
  const [user, setUser] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [err, setErr] = useState(""); 

  useEffect(()=>{(async()=>{
    const { data: { user }} = await supabase.auth.getUser();
    if(!user){ location.href='/login'; return; }
    setUser(user);
    const { data, error } = await supabase.from('usuarios').select('*').eq('auth_id', user.id).single();
    if(error) setErr(error.message); else setPerfil(data);
  })()},[]);

  if(err) return <p style={{color:'crimson'}}>Error: {err}</p>;
  if(!user) return <p>Cargando...</p>;

  return <div>
    <h2>Panel</h2>
    {perfil ? (<div>
      <p><b>Nombre:</b> {perfil.nombre}</p>
      <p><b>Nivel:</b> {perfil.nivel}</p>
      <p><b>Puede autorizar:</b> {String(perfil.puede_autorizar)}</p>
    </div>) : <p>No hay perfil en tabla usuarios para {user.email}</p>}
    <hr/>
    <a href="/mapa">Ir al mapa</a>
    <div style={{marginTop:12}}>
      <button onClick={async()=>{ await supabase.auth.signOut(); location.href='/login'; }}>Salir</button>
    </div>
  </div>;
}