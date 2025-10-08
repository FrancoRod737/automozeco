import { collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

const productsCollection = collection(db, 'products')
const ordersCollection = collection(db, 'orders')

export async function getProducts(){
  const snap = await getDocs(productsCollection)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getProductsByCategory(categoryId){
  const q = query(productsCollection, where('category', '==', categoryId))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getProductById(id){
  const d = doc(db, 'products', id)
  const snap = await getDoc(d)
  if(!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

export async function createOrder(order){
  // order: { buyer, items, total, createdAt }
  const docRef = await addDoc(ordersCollection, order)
  return docRef.id
}
