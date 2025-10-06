'use client'
import { useEffect, useMemo, useState } from 'react'
import AddTodo from '../components/AddTodo.jsx'
import TodoList from '../components/TodoList.jsx'
import Stats from '../components/Stats.jsx'
const STORAGE_KEY = 'todos:v3'
export default function TodosPage(){
  const [todos,setTodos]=useState([])
  const [filter,setFilter]=useState('all')
  useEffect(()=>{
    const saved=localStorage.getItem(STORAGE_KEY)
    if(saved){ setTodos(JSON.parse(saved)) }
    else { fetch('/api/seed').then(r=>r.json()).then(setTodos) }
  },[])
  useEffect(()=>{ localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)) },[todos])
  const filtered = useMemo(()=>{
    if(filter==='pending') return todos.filter(t=>!t.done)
    if(filter==='done') return todos.filter(t=>t.done)
    return todos
  },[todos,filter])
  function addTodo(text){ if(!text.trim()) return; setTodos(p=>[...p,{id:crypto.randomUUID(),text,done:false}])}
  function toggle(id){ setTodos(p=>p.map(t=>t.id===id?{...t,done:!t.done}:t))}
  function remove(id){ setTodos(p=>p.filter(t=>t.id!==id))}
  return (<section>
    <h1>Todos (Next.js — cliente)</h1>
    <div className="controls">
      <AddTodo onAdd={addTodo}/>
      <div className="filters">
        {['all','pending','done'].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} className={filter===f?'active':''}>
            {f==='all'?'Todas':f==='pending'?'Pendientes':'Hechas'}
          </button>
        ))}
      </div>
      <Stats todos={todos}/>
    </div>
    <TodoList items={filtered} onToggle={toggle} onRemove={remove}/>
    <footer><small>Capítulo 3 • Next.js</small></footer>
  </section>)
}
