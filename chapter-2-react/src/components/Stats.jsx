export default function Stats({ todos }){
  const total=todos.length, done=todos.filter(t=>t.done).length
  return (<div className="stats"><span>{total}</span> totales — <span>{done}</span> hechas</div>)
}
