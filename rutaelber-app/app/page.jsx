export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>Ruta Elber App 🚀</h1>
      <p>Despliegue exitoso con Next.js + Supabase</p>
      <a
        href="/login"
        style={{
          marginTop: '20px',
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
        }}
      >
        Ir al Login
      </a>
    </main>
  );
}
