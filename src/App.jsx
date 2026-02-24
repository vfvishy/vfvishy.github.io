import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Blog from './components/Blog'
import Footer from './components/Footer'
import LiquidCard from './LiquidCard'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [currentPage])

  return (
    <div className="app">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      
      <main className="main-content">
        <LiquidCard>
          {currentPage === 'home' && <Profile />}
          {currentPage === 'blog' && <Blog />}
        </LiquidCard>
      </main>

      <Footer />
    </div>
  )
}

export default App
