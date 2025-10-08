import React, {useState} from 'react'

export default function ItemCount({initial=1, stock=1, onAdd}){
  const [count, setCount] = useState(initial)
  function inc(){ if(count < stock) setCount(c=>c+1) }
  function dec(){ if(count > 1) setCount(c=>c-1) }
  return (
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      <button className="button" onClick={dec}>-</button>
      <span>{count}</span>
      <button className="button" onClick={inc}>+</button>
      <button className="button" onClick={()=>onAdd(count)} style={{marginLeft:12}}>Agregar</button>
    </div>
  )
}
