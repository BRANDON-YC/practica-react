export async function GET() {
  const data = [
    { id: '1', text: 'Revisar documentación de React', done: false },
    { id: '2', text: 'Migrar a componentes', done: true },
    { id: '3', text: 'Mover a Next.js', done: false }
  ]
  return Response.json(data)
}
