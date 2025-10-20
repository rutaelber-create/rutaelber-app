export const metadata = { title: "RutaElber App" };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{fontFamily:'system-ui,Roboto,sans-serif', margin:0}}>
        <div style={{maxWidth:960, margin:'0 auto', padding:16}}>
          <header style={{display:'flex', gap:12, alignItems:'center', padding:'12px 0'}}>
            <a href="/login">Login</a>
            <a href="/panel">Panel</a>
            <a href="/mapa">Mapa</a>
          </header>
          <hr/>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
