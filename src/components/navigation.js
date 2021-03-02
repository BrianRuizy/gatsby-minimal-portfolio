import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import Navbar from 'react-bootstrap/Navbar'

export default (props) => (

  <Navbar className="py-3" sticky="top" >
    <Navbar.Brand href="#home">Brian Ruiz</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <ThemeChanger/>
    </Navbar.Collapse>
  </Navbar>


)