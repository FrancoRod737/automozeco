import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({children}){
  const [cart, setCart] = useState([])

  function addItem(item){
    setCart(prev=>{
      const exist = prev.find(p=>p.id===item.id)
      if(exist){
        return prev.map(p=> p.id===item.id ? {...p, qty: p.qty + item.qty} : p)
      }else{
        return [...prev, {...item}]
      }
    })
  }

  function removeItem(id){
    setCart(prev => prev.filter(p=>p.id!==id))
  }

  function clearCart(){
    setCart([])
  }

  function totalItems(){
    return cart.reduce((s,i)=>s+i.qty,0)
  }

  function totalPrice(){
    return cart.reduce((s,i)=>s+i.price*i.qty,0)
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalItems, totalPrice}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
