import React, {useState} from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function ItemDetail({item}){
  const [addedQty, setAddedQty] = useState(0)
  const { addItem } = useCart()

  function handleAdd(qty){
    addItem({...item, qty})
    setAddedQty(qty)
  }

  return (
    <div className="container">
      <div style={{display:'flex', gap:20}}>
        <div style={{flex:1}}>
          <img src={item.image} alt={item.title} style={{width:'100%', borderRadius:8}} />
        </div>
        <div style={{flex:1}}>
          <h2>{item.title}</h2>
          <p className="small">{item.description}</p>
          <p><strong>${item.price.toFixed(2)}</strong></p>
          {item.stock<=0 && <p style={{color:'#dc2626'}}>Producto sin stock</p>}
          {addedQty===0 && item.stock>0 && <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />}
          {addedQty>0 && (
            <div style={{display:'flex', gap:8, marginTop:12}}>
              <Link to="/cart" className="button" style={{textDecoration:'none'}}>Ir al carrito</Link>
              <Link to="/" className="button" style={{background:'#10b981', textDecoration:'none'}}>Seguir comprando</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
