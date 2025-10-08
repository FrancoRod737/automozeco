import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function CartWidget(){
  const { totalItems } = useCart()
  return (
    <Link to="/cart" style={{display:'flex',alignItems:'center', textDecoration:'none'}}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png" alt="cart" />
      <span style={{marginLeft:6}} className="small">Carrito</span>
      {totalItems()>0 && <span style={{background:'#ef4444', color:'white', padding:'2px 8px', borderRadius:12, marginLeft:8}}>{totalItems()}</span>}
    </Link>
  )
}
