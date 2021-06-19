import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { makeStyles } from '@material-ui/core/styles'
import { CgMoon } from "react-icons/cg"
import { FiSun } from "react-icons/fi"

import IconButton from "@material-ui/core/IconButton";
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7Icon from '@material-ui/icons/Brightness7';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
}));


// export default () => (
const ThemeChanger = () => {
  const classes = useStyles()

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className={classes.root}>
          <input
            type="checkbox"
            className="theme-changer"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            // checked={theme === 'dark'}
          />{' '}
          <Brightness4RoundedIcon className="moon"/>
          <Brightness7Icon className="sun"/>
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeChanger