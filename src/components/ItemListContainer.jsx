import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../services/firestoreService'

export default function ItemListContainer(){
  const { categoryId } = useParams()
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    const fetcher = categoryId ? getProductsByCategory : getProducts
    fetcher(categoryId).then(res=>{
      setItems(res)
    }).catch(err=>{
      console.error(err)
      setItems([])
    }).finally(()=>setLoading(false))
  },[categoryId])

  if(loading) return <div className="container"><p>Cargando...</p></div>

  return (
    <div className="container">
      <h2>{categoryId ? `Categoria: ${categoryId}` : 'Catalogo'}</h2>
      <ItemList items={items} />
    </div>
  )
}
