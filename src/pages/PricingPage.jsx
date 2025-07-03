import React from 'react'

const plans = [
  { name: 'Free', price: '0', features: ['Basic HR tools'] },
  { name: 'Starter', price: '29', features: ['All Free features', 'Email support'] },
  { name: 'Pro', price: '59', features: ['Advanced analytics', 'Automation'] },
  { name: 'Enterprise', price: 'Custom', features: ['Dedicated support', 'Custom integrations'] },
]

export default function PricingPage() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className="border rounded-lg p-6 bg-white shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price === '0' ? 'Free' : `$${plan.price}/mo`}</p>
            <ul className="flex-1 space-y-1 mb-4">
              {plan.features.map((f) => (
                <li key={f}>- {f}</li>
              ))}
            </ul>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Choose</button>
          </div>
        ))}
      </div>
    </section>
  )
}
