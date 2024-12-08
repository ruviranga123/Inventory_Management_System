import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Customer from './pages/Customer'
import Inventory from './pages/Inventory'
import Order from './pages/Order'
import './App.css'
import CustomerComponent from './components/CustomerComponent'
import ProductComponent from './components/ProductComponent'
import OrderMessage from './components/OrderMessage'
import Report from './pages/Report'


const App =() => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path='/Order/' element={<OrderMessage/>}/>
        <Route path="/Order/:id" element={<Order/>}/>    
        <Route path='/add-customer' element ={<CustomerComponent/>}/>
        <Route path='/edit-customer/:id' element ={<CustomerComponent/>}/>
        <Route path='/add-product' element ={<ProductComponent/>}/>
        <Route path='/edit-product/:id' element ={<ProductComponent/>}/>
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App
