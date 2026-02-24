import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Vishal Murali. All rights reserved.</p>
        <p className="footer-tagline">
          Supporting <a href="https://www.gnu.org/philosophy/free-software-intro.en.html" target="_blank" rel="noopener noreferrer">free software</a> and <a href="https://www.unesco.org/en/open-science" target="_blank" rel="noopener noreferrer">open science</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
