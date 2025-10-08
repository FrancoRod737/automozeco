import React from 'react'
import { useCart } from '../contexts/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Cart(){
  const { cart, totalPrice, clearCart } = useCart()
  if(cart.length===0) return (
    <div className="container">
      <h2>Carrito</h2>
      <p>Carrito vacío</p>
      <Link to="/" className="button" style={{textDecoration:'none'}}>Ir al catalogo</Link>
    </div>
  )
  return (
    <div className="container">
      <h2>Carrito</h2>
      {cart.map(p => <CartItem key={p.id} item={p} />)}
      <hr />
      <p><strong>Total: ${totalPrice().toFixed(2)}</strong></p>
      <div style={{display:'flex', gap:8}}>
        <Link to="/checkout" className="button" style={{textDecoration:'none'}}>Finalizar compra</Link>
        <button className="button" onClick={clearCart} style={{background:'#ef4444'}}>Vaciar carrito</button>
      </div>
    </div>
  )
}
