import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function StudentRegisterForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', password: ''
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/register/student`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Registration failed')
      setStatus('success')
    } catch (err) {
      setStatus(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = "w-full px-4 py-3 bg-[#10101e] text-white rounded-lg border border-fuchsia-600 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  }

  const renderItems = (items) => (
    <div className="space-y-5">
      {items.map((el, i) => (
        <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={itemVariants}>
          {el}
        </motion.div>
      ))}
    </div>
  )

  const renderStep1 = () => renderItems([
    <div className="flex gap-4">
      <input name="firstName" placeholder="First Name *" value={form.firstName} onChange={handleChange} required className={inputStyle} />
      <input name="lastName" placeholder="Last Name *" value={form.lastName} onChange={handleChange} required className={inputStyle} />
    </div>,
    <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} required className={inputStyle} />, 
    <input name="phone" placeholder="Phone *" value={form.phone} onChange={handleChange} required className={inputStyle} />, 
    <input name="address" placeholder="Address *" value={form.address} onChange={handleChange} required className={inputStyle} />, 
    <input name="password" type="password" placeholder="Password *" value={form.password} onChange={handleChange} required className={inputStyle} />
  ])

  const renderCurrentStep = () => {
    switch (step) {
      case 1: return renderStep1()
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0b1f] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl border border-fuchsia-600 rounded-2xl bg-[#1a1a2e] shadow-xl p-10 font-sans">
        <h2 className="text-center text-4xl font-black text-pink-400 mb-8 tracking-wide">
          Student Registration
        </h2>

        <div className="w-full h-2 bg-zinc-800 rounded-full mb-8">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${(step - 1) * 100}%`,
              backgroundImage: `linear-gradient(to right, ${
                step === 1 ? '#4c1d95' : '#f472b6'
              }, #f472b6)`
            }}
          />
        </div>

        <motion.div
          key={step}
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {renderCurrentStep()}

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
            {status === 'success' && <p className="text-green-400 text-center">Registration successful!</p>}
            {status && status !== 'success' && <p className="text-red-400 text-center">{status}</p>}
          </form>
        </motion.div>
      </div>
    </div>
  )
}
