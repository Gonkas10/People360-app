import React from 'react'
import { Link } from 'react-router-dom'

const features = [
  'Recruiting with AI screening',
  'Smart onboarding workflows',
  'Performance management',
  'Time tracking and payroll',
]

export default function LandingPage() {
  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700">Manage your people intelligently</h1>
      <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">Everything you need to run HR in one platform inspired by leaders like BambooHR and Gusto.</p>
      <div className="space-x-4 mb-12">
        <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</Link>
        <Link to="/pricing" className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">See Pricing</Link>
      </div>
      <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {features.map((f) => (
          <li key={f} className="p-4 border rounded-md bg-white shadow-sm">{f}</li>
        ))}
      </ul>
    </section>
  )
}
