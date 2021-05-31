import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { CgMoon } from "react-icons/cg"
import { FiSun } from "react-icons/fi"
import Switch from "@material-ui/core/Switch"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      // <label>
      //   <input
      //     type="checkbox"
      //     className="theme-changer"
      //     onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
      //     checked={theme === 'dark'}
      //   />{' '}
      //   <div className="mode-container">
      //     <i><CgMoon className="moon"/></i>
      //     <i><FiSun className="sun"/></i>
      //   </div>
      // </label>
      <Switch 
        className="theme-changer" 
        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
      >

      </Switch>
    )}
  </ThemeToggler>
)