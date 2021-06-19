import React from "react"
import {graphql, useStaticQuery, Link } from "gatsby"

import Resume from "../../../static/Brian-Ruiz-Resume.pdf"

import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined'


var hour = new Date().getHours();
var greet;

if (hour >= 5 && hour < 11)
    greet = '🌄 Good morning';
else if (hour >= 11 && hour < 17)
    greet = '👋 Good afternoon';
else if (hour >= 17 && hour < 23)
    greet = '🌆 Good evening';
else if (hour === 23 || hour < 5)
    greet = '🦉 Hi, night owl';

const useStyles = makeStyles((theme) => ({
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const Hero = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          home {
            username
            availability
            role
            summary
            location
            name
          }
        }
      } 
    }
  `)
  return (
    <Container className="hero-header">
      <Typography variant="h1">
        <span id="greeting">{greet}</span><br></br>
        I'm @<u>{data.site.siteMetadata.home.username}</u>,<br></br>
        {data.site.siteMetadata.home.role}
      </Typography>
      <Typography variant="body1">
        {data.site.siteMetadata.home.summary}
      </Typography>
      <div className={classes.buttons}>
        <Button 
          size="large" 
          className="btn btn-light"
          variant="contained" 
          color="default" 
          href={Resume} 
          startIcon={<GetAppOutlinedIcon/>}
          disableElevation
        >
          Resume
        </Button>
        <Button 
          size="large" 
          className="btn btn-primary" 
          variant="contained" 
          color="primary" 
          disableElevation
          component={Link}
          to='/about/'
        >
          About me
        </Button>
      </div>
    </Container>      
  );
}

export default Hero