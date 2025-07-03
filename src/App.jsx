import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-900">
      <nav className="p-4 shadow-md bg-white flex justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">People360</Link>
        <div className="space-x-4">
          <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
          <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
