import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Carts from '../pages/Carts'

function MyRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path='/Carts' element={<Carts/>} />
    </Routes>
    </>
  );
}                          

export default MyRoutes;
