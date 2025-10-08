import React, {useState} from 'react'
import { useCart } from '../contexts/CartContext'
import { createOrder } from '../services/firestoreService'
import { useNavigate } from 'react-router-dom'

export default function CheckoutForm(){
  const { cart, totalPrice, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const navigate = useNavigate()

  const [form, setForm] = useState({name:'', email:'', phone:''})

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
      const order = {
        buyer: form,
        items: cart.map(i=>({id:i.id, title:i.title, price:i.price, qty:i.qty})),
        total: totalPrice(),
        createdAt: new Date().toISOString()
      }
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    }catch(err){
      console.error(err)
      alert('Error creando la orden')
    }finally{
      setLoading(false)
    }
  }

  if(orderId) return (
    <div className="container">
      <h2>Compra confirmada</h2>
      <p>ID de la orden: <strong>{orderId}</strong></p>
      <button className="button" onClick={()=>navigate('/')}>Volver al inicio</button>
    </div>
  )

  if(cart.length===0) return <div className="container"><p>Carrito vacío</p></div>

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:8, maxWidth:400}}>
        <input required placeholder="Nombre" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
        <input required placeholder="Teléfono" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
        <p>Total a pagar: <strong>${totalPrice().toFixed(2)}</strong></p>
        <button className="button" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar compra'}</button>
      </form>
    </div>
  )
}
