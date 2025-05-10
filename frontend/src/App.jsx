import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// 页面组件
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import StudentRegisterForm from '@/pages/StudentRegisterForm'
import TutorRegisterForm from '@/pages/TutorRegisterForm'

// 首页组件（首页组合组件只在 HomePage 用到）
import HeroSection from '@/components/HeroSection'
import FeaturedTutors from '@/components/FeaturedTutors'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CtaSection from '@/components/CtaSection'

function App() {
  return (
    <div className="selection:bg-fuchsia-500 selection:text-white">
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                <FeaturedTutors />
                <TestimonialsSection />
                <CtaSection />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/student" element={<StudentRegisterForm />} />
          <Route path="/register/tutor" element={<TutorRegisterForm />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}

export default App
