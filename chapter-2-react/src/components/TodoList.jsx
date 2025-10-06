import TodoItem from './TodoItem.jsx'
export default function TodoList({ items, onToggle, onRemove }) {
  return (<ul className="list">{items.map(t=>(
    <TodoItem key={t.id} item={t} onToggle={onToggle} onRemove={onRemove}/>
  ))}</ul>)
}
