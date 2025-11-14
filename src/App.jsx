import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AppLayouts from './components/layouts/AppLayouts'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Animation from './pages/Animation'
import ForwardToHome from './pages/ForwardToHome'
import Todos from './components/Todos/Todos'
import Components from './pages/components'
import Product from './pages/Product'
import { fetchproduct } from './data/Product'
import Carts from './pages/Carts'

function App() {
  const [product, setProduct] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchproduct()
      setProduct(data.slice(0, 8))
    }
    loadProducts()
  }, [])

  return (
    <BrowserRouter basename='/csi205-componenets/'>
      <Routes>
        {/* หน้า Login - ไม่ต้อง login */}
        <Route path='/login' element={<Login />} />
        
        {/* Redirect หน้าแรก (/) ไปหน้า login */}
        <Route path='/' element={<Navigate to='/login' replace />} />
        
        {/* Protected Routes - ต้อง login ก่อนถึงเข้าได้ */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayouts product={product} carts={carts} setCarts={setCarts} />}>
            <Route path='/home' element={<Home />} />
            <Route path='/product' element={<Product
              product={product}
              carts={carts}
              setCarts={setCarts}
            />} />
            <Route path='/carts' element={<Carts
              product={product}
              carts={carts}
              setCarts={setCarts}
            />} />
            
            <Route path='/components' element={<Components />} />
            <Route path='/animation' element={<Animation />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='*' element={<ForwardToHome />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App