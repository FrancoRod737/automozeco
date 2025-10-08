# ProyectoFinal_Rodriguez

Proyecto final - Frontend e-commerce (React + Vite) con integración a Firestore.

## Contenido
- Estructura de componentes (NavBar, ItemListContainer, ItemDetailContainer, ItemCount, Cart, CheckoutForm, etc.)
- Context para manejo del carrito
- Firestore (configurar credenciales en `src/firebase/firebaseConfig.js` o usar variables de entorno)
- Documentación breve

## Instalación local
1. Instalar dependencias:
```
npm install
```
2. Crear proyecto en Firebase (Firestore) y copiar credenciales a `src/firebase/firebaseConfig.js` o crear un `.env` (ver `.env.example`)
3. Ejecutar:
```
npm run dev
```

## Notas
- El archivo `src/firebase/firebaseConfig.js` contiene un placeholder. Reemplaza por tus credenciales.
- Al confirmar una compra se crea un documento en la colección `orders` en Firestore (función `createOrder`).
- Incluye `mockData/products.json` con productos de ejemplo si quieres poblar localmente.

Entrega: zip con la app frontend - listo para instalar y ejecutar.
