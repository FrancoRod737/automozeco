import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function NavBar(){
  return (
    <nav className="nav">
      <div style={{display:'flex',alignItems:'center'}}>
        <Link to="/" style={{fontWeight:700, fontSize:18}}>AutomizeCo Store</Link>
        <Link to="/" style={{marginLeft:12}}>Catalogo</Link>
        <Link to="/category/software" style={{marginLeft:8}}>Software</Link>
        <Link to="/category/servicios" style={{marginLeft:8}}>Servicios</Link>
      </div>
      <div style={{display:'flex', alignItems:'center'}}>
        <CartWidget />
      </div>
    </nav>
  )
}
