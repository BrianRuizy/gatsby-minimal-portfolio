import React from "react"
import { useStaticQuery, Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import BottomDrawer from "../components/bottomDrawer"

import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"

import { FiHome } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"

const tabs = [{
  route: "/",
  icon: FiHome,
  label: "Home"
},{
  route: "/about",
  icon: CgProfile,
  label: "About"
}]

const buttons = [{
  label: "Contact-drawer", 
  action: <BottomDrawer/>,
},{
  label: "Theme-changer", 
  action: <ThemeChanger/>,
}]

const Navigation = (props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          home {
            name
          }
        }
      }
    }
  `)
	return (
    <div>
      {/* top bar */}
      <Navbar fixed="top" className="top-nav">
        <Navbar.Brand href="/">
          <img
            alt="BR LOGO"
            src="/favicons/apple-touch-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />{ data.site.siteMetadata.home.name }
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <a href="https://www.linkedin.com/in/brianruizy/">LinkedIn</a>
          <a href="https://github.com/BrianRuizy/">GitHub</a>
          <Link to="/about">About</Link>
          <BottomDrawer/>
        </Navbar.Collapse>
      </Navbar>

      {/* bottom bar */}
      <Navbar className="bottom-nav" fixed="bottom" >
        <div className=" d-flex flex-row justify-content-around w-100">
          { tabs.map((tab, index) =>(
            <NavItem key={`tab-${index}`}>
              <Link to={tab.route} className="nav-link" activeClassName="active">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  {<tab.icon className="icon"/>}
                </div>
              </Link>
            </NavItem>
          ))}
          { buttons.map((tab, index) =>(
            <NavItem key={`tab-${index}`} >
              {tab.action}
            </NavItem>
          ))}
        </div>
      </Navbar>
    </div>
  )
};

export default Navigation