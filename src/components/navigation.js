import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import NavItem from "react-bootstrap/NavItem"

import { FiHome } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { AiOutlineMessage } from "react-icons/ai"

const tabs = [{
  route: "/",
  icon: FiHome,
  label: "Home"
},{
  route: "/about",
  icon: CgProfile,
  label: "About"
},{
  route: "/contact",
  icon: AiOutlineMessage,
  label: "Contact"
}]

const Navigation = (props) => {
	return (
    <div>
      {/* top bar */}
      <Navbar fixed="top" className="top-nav"  >
        <Navbar.Brand >
          <Link to="/">Brian Ruiz</Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <ThemeChanger/>
        </Navbar.Collapse>
      </Navbar>

      {/* bottom bar */}
      <Navbar className="bottom-nav" fixed="bottom" >
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <Link to={tab.route} className="nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    {<tab.icon className="icon"/>}
                  </div>
                </Link>
              </NavItem>
            ))
          }
          <NavItem>
            <ThemeChanger/>
          </NavItem>
        </div>
      </Navbar>
    </div>
  )
};

export default Navigation