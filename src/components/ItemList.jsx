import React from 'react'
import Item from './Item'

export default function ItemList({items}){
  if(!items) return <p>Cargando productos...</p>
  if(items.length===0) return <p>No hay productos para mostrar.</p>
  return (
    <div className="grid">
      {items.map(p => <Item key={p.id} item={p} />)}
    </div>
  )
}
