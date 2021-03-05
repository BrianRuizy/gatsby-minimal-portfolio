import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FiMoon } from "react-icons/fi"
import { FiSun } from "react-icons/fi"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label >
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <FiMoon className="FiMoon"/>
        <FiSun className="FiSun"/>
      </label>
    )}
  </ThemeToggler>
)