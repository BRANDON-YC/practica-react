export default function Page(){
  return (<section>
    <h1>Next.js — Inicio</h1>
    <p>Esta versión usa App Router. Algunas rutas son <strong>server components</strong> por defecto.</p>
    <ul>
      <li>Navegación con <code>Link</code>.</li>
      <li><code>/todos</code> es cliente (usa estado).</li>
      <li><code>/api/seed</code> expone datos iniciales.</li>
    </ul>
  </section>)
}
