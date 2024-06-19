import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <section id="navbar">
      <div className="container">
        <nav className="navbar">
          <div className="title-logo">
            <h1>Leuv.</h1>
          </div>
          <div className="nav-items">
            <Link to='/' className="home">Home</Link>
            <Link to='/Register' className="register">Register</Link>
            <Link to='/Login' className="login">Login</Link>
          </div>  
        </nav>  
      </div>  
    </section>
  )
}
