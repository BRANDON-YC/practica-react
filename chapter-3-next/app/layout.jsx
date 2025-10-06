export const metadata = {
  title: 'Capítulo 3 — Next.js',
  description: 'App Router, rutas, server/client components'
}
import Link from 'next/link'
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="es"><body>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/todos">Todos</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>{children}</main>
    </body></html>
  )
}
