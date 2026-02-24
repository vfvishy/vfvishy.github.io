import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Blog from './components/Blog'
import Footer from './components/Footer'
import LiquidCard from './LiquidCard'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

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
