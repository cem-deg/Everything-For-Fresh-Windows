import React from 'react'
import { Routes, Route, useLocation } from 'react-router'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import Fundamentals from './pages/fundamentals'
import StepRenderer from './features/steps/StepRenderer'
import Completion from './pages/Completion'
import AppCenter from './pages/AppCenter'
import ShortcutBios from './features/shortcuts/ShortcutBios'
import ShortcutBoot from './features/shortcuts/ShortcutBoot'

function App() {
  const location = useLocation()
  
  return (
    <>
      <Navbar />
      <div className="page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/shortcut-bios" element={<ShortcutBios />} />
          <Route path="/shortcut-boot" element={<ShortcutBoot />} />
          <Route path="/step/:id" element={<StepRenderer />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/app-center" element={<AppCenter />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
