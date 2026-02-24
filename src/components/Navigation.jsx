import '../styles/Navigation.css'

function Navigation({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <button 
            className="nav-link brand-link"
            onClick={() => setCurrentPage('home')}
          >
            Vishal Murali
          </button>
        </div>
        
        <ul className="nav-menu">
          <li>
            <button
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentPage === 'blog' ? 'active' : ''}`}
              onClick={() => setCurrentPage('blog')}
            >
              Blog/Preprints
            </button>
          </li>
          <li>
            <button
              className="nav-link theme-toggle"
              onClick={toggleDarkMode}
              title="Toggle dark/light mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
