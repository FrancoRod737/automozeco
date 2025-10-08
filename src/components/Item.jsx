import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({item}){
  return (
    <div className="card">
      <img src={item.image} alt={item.title} style={{width:'100%', height:150, objectFit:'cover', borderRadius:6}} />
      <h4>{item.title}</h4>
      <p className="small">{item.category}</p>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <strong>${item.price.toFixed(2)}</strong>
        <Link to={`/item/${item.id}`} className="button" style={{textDecoration:'none'}}>Ver</Link>
      </div>
    </div>
  )
}
