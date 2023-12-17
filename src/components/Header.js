import React from 'react'
import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'





const Header = () => {
 

  return (
    <nav>
        <div className="main" >
          <img className="logo-left" src='/logo.png' alt='ensim-logo'/>
           <img className="logo-right" src='/logouniv.png' alt="univ-logo" />
        </div>
      </nav>
  )
}

export default Header