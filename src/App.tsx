import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from "./shared/layouts/Layout"
import ProductLayout from './shared/layouts/ProductLayout'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/product' element={<ProductLayout/>}> 

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
