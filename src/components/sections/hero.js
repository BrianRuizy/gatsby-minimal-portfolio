import React from "react"
import {graphql, useStaticQuery, Link } from "gatsby"

import Resume from "../../../static/Brian-Ruiz-Resume.pdf"

import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid'
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
  },
  heroSection: {
    background: 'var(--background)', 
    maxWidth: '100%'
  },
  hero: {
    textAlign: 'center',
    padding: theme.spacing('30vh', 0),
  },
   greeting: {
    fontWeight: '800',
    fontSize: '3rem',
    lineHeight: '1.25',
    marginBottom: theme.spacing(2),
    '@media (max-width:600px)': {
      fontSize: '2.125rem',
    }
  },
  summary: {
    color: 'var(--secondary-text-color)',
    display: 'inline-block',
    fontSize: '1.75rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
    maxWidth: '35rem',
    '@media (max-width:600px)': {
      maxWidth: '22rem', 
      fontSize: '1.125rem',
    }
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
    <Container className={classes.heroSection}>
      <Grid className={classes.hero}>
        <Typography className={classes.greeting}>
          <span id="greeting">{greet}</span><br></br>
          I'm @<u>{data.site.siteMetadata.home.username}</u>,<br></br>
          {data.site.siteMetadata.home.role}
        </Typography>
        <Typography className={classes.summary}>
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
      </Grid>
    </Container>      
  );
}

export default Hero