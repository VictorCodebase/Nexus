import React from 'react'
import { BrowserRouter,Routes, Router,Route } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import Browser from './pages/Browser'
import Login from './pages/Login'
import PaperDetails from './pages/PaperDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App