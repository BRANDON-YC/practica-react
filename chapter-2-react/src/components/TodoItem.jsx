export default function TodoItem({ item, onToggle, onRemove }){
  return (<li className={"item"+(item.done?" done":"")}>
    <input type="checkbox" checked={item.done} onChange={()=>onToggle(item.id)}/>
    <span>{item.text}</span>
    <button onClick={()=>onRemove(item.id)}>Eliminar</button>
  </li>)
}
