/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function TutorRegisterForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: '', password: '',
    educationLevel: '', major: '', certifications: '', childrenCheck: '',
    subjects: '', hasExperience: '', experienceDetail: '', availableTimes: '', acceptShortNotice: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Tutor Registration Submitted:', form)
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

  const renderStep2 = () => renderItems([
    <select name="educationLevel" value={form.educationLevel} onChange={handleChange} required className={inputStyle}>
      <option value="">Highest Education Level *</option>
      <option value="Bachelor">Bachelor</option>
      <option value="Master">Master</option>
      <option value="PhD">PhD</option>
      <option value="Other">Other</option>
    </select>,
    <input name="major" placeholder="Major *" value={form.major} onChange={handleChange} required className={inputStyle} />, 
    <input name="certifications" placeholder="Teaching Certifications *" value={form.certifications} onChange={handleChange} required className={inputStyle} />, 
    <input name="childrenCheck" placeholder="Working With Children Check *" value={form.childrenCheck} onChange={handleChange} required className={inputStyle} />
  ])

  const renderStep3 = () => renderItems([
    <select name="subjects" value={form.subjects} onChange={handleChange} required className={inputStyle}>
      <option value="">Subjects Willing to Tutor *</option>
      <option value="Math">Math</option>
      <option value="English">English</option>
      <option value="Science">Science</option>
      <option value="Other">Other</option>
    </select>,
    <select name="hasExperience" value={form.hasExperience} onChange={handleChange} required className={inputStyle}>
      <option value="">Tutoring or Teaching Experience? *</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>,
    <textarea name="experienceDetail" placeholder="Describe your experience" rows={4} value={form.experienceDetail} onChange={handleChange} className={inputStyle} />, 
    <input name="availableTimes" placeholder="Available Time(s) *" value={form.availableTimes} onChange={handleChange} required className={inputStyle} />, 
    <input name="acceptShortNotice" placeholder="Open to Short-notice Sessions? *" value={form.acceptShortNotice} onChange={handleChange} required className={inputStyle} />
  ])

  const renderStep4 = () => (
    <div className="text-sm text-zinc-300 space-y-1 leading-relaxed">
      {Object.entries(form).map(([key, value]) => (
        <motion.div key={key} custom={0.05} initial="hidden" animate="visible" variants={itemVariants}>
          <span className="font-semibold text-fuchsia-400">{key}</span>: {value || "—"}
        </motion.div>
      ))}
    </div>
  )

  const renderCurrentStep = () => {
    switch (step) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0b1f] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl border border-fuchsia-600 rounded-2xl bg-[#1a1a2e] shadow-xl p-10 font-sans">
        <h2 className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500 mb-8 tracking-wide">
          Tutor Registration - Step {step}
        </h2>

        <div className="w-full h-2 bg-zinc-800 rounded-full mb-8">
          <div
            className="h-full bg-gradient-to-r from-[#4c1d95] to-pink-400 rounded-full transition-all duration-500"
         style={{
            width: `${(step - 1) * 33.33}%`,
            backgroundImage: `linear-gradient(to right, ${
                step === 2 ? '#9333ea' :
                step === 3 ? '#c026d3' :
                step === 4 ? '#f472b6' :
                '#4c1d95'
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

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition">
                  Back
                </button>
              )}
              {step < 4 ? (
                <button type="button" onClick={() => setStep(step + 1)} className="ml-auto px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition">
                  Next
                </button>
              ) : (
                <button type="submit" className="ml-auto px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition">
                  Submit
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
