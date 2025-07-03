import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <section className="py-16 px-4 flex justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{isRegister ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" required />
          )}
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            {isRegister ? 'Create account' : 'Login'}
          </button>
        </form>
        <div className="text-center mt-4">
          {isRegister ? (
            <button onClick={() => setIsRegister(false)} className="text-blue-600 hover:underline">Have an account? Log in</button>
          ) : (
            <button onClick={() => setIsRegister(true)} className="text-blue-600 hover:underline">New here? Register</button>
          )}
        </div>
      </div>
    </section>
  )
}
