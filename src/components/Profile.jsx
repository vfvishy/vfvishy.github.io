import '../styles/Profile.css'

function Profile() {
  const socialLinks = [
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=VdEZKZwAAAAJ&hl=en", icon: "🎓" },
    { name: "GitHub", url: "https://github.com/vfvishy", icon: "🐙" },
    { name: "BlueSky", url: "https://bsky.app/profile/vortexflow.org", icon: "🌐" }
  ]

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src="resources/profilepic.jpeg" 
          alt="Profile picture of Vishal Murali" 
          className="profile-photo"
        />
        <h1 className="name-title">Vishal Murali</h1>
        
        <p className="bio">
          I'm a Research Scholar working on <strong>Fluid Dynamics</strong> and <strong>Bioprocess Intensification</strong> focussed on <strong>Microbubble aided Bioprocess Intensification</strong>. I aim to produce impactful research that can be applied in real-world scenarios. I have a keen interest in <strong>Multiphysics Modelling</strong> and <strong>Computational Fluid Dynamics</strong>. 
          I support <a href="https://www.gnu.org/philosophy/free-software-intro.en.html" target="_blank" rel="noopener noreferrer">
            free software movement
          </a> and <a href="https://www.unesco.org/en/open-science" target="_blank" rel="noopener noreferrer">
            open science
          </a>. 
          I also play the bass and guitar.
        </p>
      </div>

      <div className="social-links">
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            title={link.name}
          >
            <span className="icon">{link.icon}</span>
            <span className="name">{link.name}</span>
          </a>
        ))}
      </div>

      <div className="contact-section">
        <p className="contact-label">Contact me at</p>
        <a href="mailto:vishalm@vortexflow.org" className="email-link">
          vishalm@vortexflow.org
        </a>
      </div>
    </div>
  )
}

export default Profile
