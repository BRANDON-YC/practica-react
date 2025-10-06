# Capítulo 3 — Next.js (App Router)

**Conceptos:** file-based routing, `Link`, server/client components, metadatos, ruta API.

## Correr en local
```bash
npm install
npm run dev
```
Abre `http://localhost:3000`.

## Qué cambió vs React puro
- Por defecto, los archivos en `app/` son **server components**.
- Las vistas que usan estado se marcan con `'use client'`.
- Navegación declarativa con `<Link/>`.
- Endpoint de ejemplo en `/api/seed` para datos iniciales.
