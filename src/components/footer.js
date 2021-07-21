import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import  Typography from "@material-ui/core/Typography"
import  Container  from "@material-ui/core/Container"
import  Toolbar  from "@material-ui/core/Toolbar"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    background: '#000',
    marginTop: '10rem',
    '& a': { 
      color: '#90b3f4'
    }
  },
  title: {
    flexGrow: 1,
  }
}));


const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <AppBar position="static" color="primary" className={classes.footer}>
      <Container >
        <Toolbar>
          <Typography edge="start" className={classes.title}>
            &copy;{ new Date().getFullYear() } 
            <a href="https://github.com/BrianRuizy/gatsby-minimal-portfolio/" target="_blank" rel="noopener noreferrer"> Portfolio</a>
          </Typography>
          <a href="https://app.netlify.com/sites/brianruizy/deploys" target="_blank" rel="noopener noreferrer">
              <img src="https://api.netlify.com/api/v1/badges/72511ec5-84cd-416c-81d8-b16489c1b235/deploy-status" alt="Netlify Status" /> 
          </a>
        </Toolbar>
      </Container>
    </AppBar>
    </div>

  );
}

export default Footer;