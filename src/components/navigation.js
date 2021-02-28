import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Navbar from 'react-bootstrap/Navbar'

export default (props) => (

  <Navbar >
    <Navbar.Brand href="#home"> 
      <div className="site-title">
        <Link to="/">BR</Link>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <ThemeChanger/>
    </Navbar.Collapse>
  </Navbar>


)