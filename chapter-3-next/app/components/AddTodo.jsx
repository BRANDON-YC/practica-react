'use client'
import { useState } from 'react'
export default function AddTodo({ onAdd }){
  const [text,setText]=useState('')
  function submit(e){ e.preventDefault(); onAdd(text); setText('') }
  return (<form onSubmit={submit} aria-label="Agregar tarea">
    <input value={text} onChange={e=>setText(e.target.value)} placeholder="Nueva tarea..."/>
    <button type="submit">Agregar</button>
  </form>)
}
