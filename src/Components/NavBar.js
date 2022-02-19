import React from "react";
import '../Styles/NavBar.css'

const NavBar = () => {
  return (
    <section>
      <nav className="navbar navbar-light bg-light">
      
          <div className="container-fluid d-flex flex-column justify-content-center">
            <a  href="/" className="text-align-center">
              <img
                src="Images/Logo.png"
                alt=""
                className="logo"
              />
            
            </a>
              <span className="brand-text">A BRAND BY <span style={{fontFamily:"ARB",color:"#289e4f"}} className="empire-text">EMPIRE</span> FOOTWEAR</span>
          </div>
      </nav>
    </section>
  );
};

export default NavBar;
