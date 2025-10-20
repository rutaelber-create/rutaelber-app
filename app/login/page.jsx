"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage(){
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [msg, setMsg] = useState(""); 

  async function onSubmit(e){
    e.preventDefault();
    setMsg("Verificando..."); 
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if(error){ setMsg("❌ " + error.message); return; }
    setMsg("✅ Ok. Redirigiendo..."); 
    setTimeout(()=>location.href='/panel', 600);
  }

  return (<div>
    <h2>Ingreso</h2>
    <form onSubmit={onSubmit} style={{display:'grid', gap:8, maxWidth:340}}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Correo" type="email" required/>
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Contraseña" type="password" required/>
      <button type="submit">Entrar</button>
    </form>
    <p>{msg}</p>
  </div>)
}