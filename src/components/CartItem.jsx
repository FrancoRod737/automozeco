import React from 'react'
import { useCart } from '../contexts/CartContext'

export default function CartItem({item}){
  const { removeItem } = useCart()
  return (
    <div style={{display:'flex', gap:12, alignItems:'center', marginTop:8}}>
      <img src={item.image} alt={item.title} style={{width:80, height:80, objectFit:'cover', borderRadius:6}} />
      <div style={{flex:1}}>
        <h4>{item.title}</h4>
        <p className="small">Cantidad: {item.qty}</p>
        <p className="small">Subtotal: ${(item.price*item.qty).toFixed(2)}</p>
      </div>
      <div>
        <button className="button" onClick={()=>removeItem(item.id)} style={{background:'#ef4444'}}>Eliminar</button>
      </div>
    </div>
  )
}
