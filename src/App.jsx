import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('light-mode')
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="main-content">
        {currentPage === 'home' && <Profile />}
        {currentPage === 'blog' && <Blog />}
      </main>

      <Footer />
    </div>
  )
}

export default App
