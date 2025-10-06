import { useEffect, useMemo, useState } from 'react'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Stats from './components/Stats.jsx'
const STORAGE_KEY = 'todos:v2'
export default function App() {
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [] } catch { return [] }
  })
  const [filter, setFilter] = useState('all')
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)) }, [todos])
  const filtered = useMemo(() => {
    if (filter === 'pending') return todos.filter(t => !t.done)
    if (filter === 'done') return todos.filter(t => t.done)
    return todos
  }, [todos, filter])
  function addTodo(text){ if(!text.trim()) return; setTodos(p=>[...p,{id:crypto.randomUUID(),text,done:false}])}
  function toggle(id){ setTodos(p=>p.map(t=>t.id===id?{...t,done:!t.done}:t))}
  function remove(id){ setTodos(p=>p.filter(t=>t.id!==id))}
  return (<div>
    <header><h1>Todos (React)</h1><p>Objetivo: componentes + <code>useState</code>/<code>useEffect</code>.</p></header>
    <section className="controls">
      <AddTodo onAdd={addTodo}/>
      <div className="filters">
        {['all','pending','done'].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} className={filter===f?'active':''}>
            {f==='all'?'Todas':f==='pending'?'Pendientes':'Hechas'}
          </button>
        ))}
      </div>
      <Stats todos={todos}/>
    </section>
    <TodoList items={filtered} onToggle={toggle} onRemove={remove}/>
    <footer><small>Capítulo 2 • React</small></footer>
  </div>)
}
