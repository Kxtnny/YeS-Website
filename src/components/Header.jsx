import logo from '../assets/yes-logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="YeS Logo" className="logo" />
        <h1 className="site-title">Young Entrepreneurs<br/>of Singapore</h1>
      </div>
      
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#about" className="nav-link">About</a></li>
          <li className="nav-separator">|</li>
          <li><a href="#partners" className="nav-link">Partners</a></li>
          <li className="nav-separator">|</li>
          <li><a href="#events" className="nav-link">Events</a></li>
          <li className="nav-separator">|</li>
          <li><a href="#founders" className="nav-link">Founders</a></li>
          <li className="nav-separator">|</li>
          <li><a href="#join" className="nav-link">Join Us</a></li>
        </ul>
      </nav>
    </header>
  )
}