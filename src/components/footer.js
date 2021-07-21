import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import  Typography from "@material-ui/core/Typography"
import  Container  from "@material-ui/core/Container"
import  Toolbar  from "@material-ui/core/Toolbar"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  footer: {
    background: '#000',
    marginTop: '5rem',
    '& a': { 
      color: 'var(--primary-color)'
    }
  }
}));


const Footer = () => {
  const classes = useStyles();

  return (
    // <footer className="site-footer">
    //   <a href="https://app.netlify.com/sites/brianruizy/deploys" target="_blank" rel="noopener noreferrer">
    //     <img src="https://api.netlify.com/api/v1/badges/72511ec5-84cd-416c-81d8-b16489c1b235/deploy-status" alt="Netlify Status" /> 
    //   </a>
    //   <p className="mt-1">
    //     &copy;{ new Date().getFullYear() } 
    //     <a href="https://github.com/BrianRuizy/gatsby-minimal-portfolio/" target="_blank" rel="noopener noreferrer"> Portfolio</a>,
    //     by Brian Ruiz.
    //   </p>
    // </footer>

    <AppBar position="static" color="primary" className={classes.footer}>
      <Container >
        <Toolbar>
          <Typography edge="start" variant="body1" color="inherit">© 2019 Gistia</Typography>
          <Typography edge="start" variant="body1" color="inherit">© 2019 Gistia</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;