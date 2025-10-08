import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/firestoreService'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer(){
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    getProductById(id).then(res=>{
      setItem(res)
    }).catch(err=>{
      console.error(err)
      setItem(null)
    }).finally(()=>setLoading(false))
  },[id])

  if(loading) return <div className="container"><p>Cargando...</p></div>
  if(!item) return <div className="container"><p>Producto no encontrado.</p></div>

  return <ItemDetail item={item} />
}
