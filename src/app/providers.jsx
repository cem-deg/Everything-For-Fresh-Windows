"use client";
import { ThemeProvider } from '../context/ThemeContext'
import { AppProvider } from '../context/AppContext'

export default function Providers({ children }) {
  return (
    <AppProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </AppProvider>
  )
}
