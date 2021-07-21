import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FiGithub } from "react-icons/fi"
import { BiLinkExternal } from "react-icons/bi"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  heading: {
    margin: theme.spacing(1),
    marginBottom: '6rem', 
    maxWidth: '25rem', 
    '@media (max-width:600px)': {
      maxWidth: '15rem', 
    },
  },
  headingTitle: {
    color: 'var(--secondary-text-color)',
    fontSize: '2rem',
    fontWeight: '800',
    lineHeight: '1.25',
    '@media (max-width:600px)': {
      maxWidth: '13rem', 
    },
  },
  headingSubtitle: {
    fontSize: '1.25rem',
    lineHeight: '1.5',
    fontWeight: '700',
    color: 'var(--secondary-color)', 
  },
  card: {
    background:'var(--card-bg)',
    borderRadius: '1.5rem',
    border: 'none',
    color: 'var(--secondary-text-color)',
    '@media (max-width:600px)': {
      textAlign: 'center',
    },
  },
  cardContent: {
    padding: theme.spacing(0, 8), 
    '@media (max-width:600px)': {
      padding: theme.spacing(2, 3.5), 
    }
  },
  subtitle: {
    fontWeight: '200',
    margin: theme.spacing(2, 'auto'),
    color: 'var(--secondary-text-color)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--primary-text-color)',
    lineHeight: '1.2',
    '@media (max-width:600px)': {
      padding: theme.spacing(0, 3),
      fontSize: '2.25rem',
    }
  },
  desc: {
    fontSize: '1.25rem',
    '@media (max-width:600px)': {
      fontSize: 'initial',
    }
  },
  actions: {
    color: 'var(--primary-color)',
    margin: theme.spacing(2, 'auto', 0),
  },
  cardCTA: {
    marginRight: theme.spacing(1),
    border: '2px solid var(--primary-color)', 
    borderRadius: '5px'
  },
  media: {
    maxHeight: '450px',
    '@media (max-width:600px)': {
      maxHeight: '300px',
      marginTop: '16px',
    },
  },
}));


const Featured = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/featured/"}, frontmatter: {hide: {ne: true}}}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              path
              github
              demo
              name
              category
              mockup
              description
            }
          }
        }
      }
    }
  `)
  return (
    <Container style={{paddingTop: '6rem'}}>
      <div className={classes.heading}>
        <Typography className={classes.headingTitle} gutterBottom>Featured And Notable Projects</Typography>
        <Typography className={classes.headingSubtitle} gutterBottom>Some of my most noteworthy projects and or contributions, at both large open source and enterprise level.</Typography>
      </div>
      <Grid container spacing={7}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Grid key={node.id} item xs={12}>
          <Card className={classes.card} variant="outlined">
            <Grid container>
              <Grid item sm={6} xs={12} component={Box} m='auto'>
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.subtitle}>{node.frontmatter.category} </Typography>
                  <Typography className={classes.title} gutterBottom>{node.frontmatter.name}</Typography>
                  <Typography className={classes.desc} variant="body1" paragraph>{node.frontmatter.description}</Typography>
                  <div className={classes.actions}>
                    <Button color="inherit" variant="outlined" href={node.frontmatter.path} className={classes.cardCTA}>
                      Read More
                    </Button>
                    {node.frontmatter.github && (
                      <IconButton color="inherit" href={node.frontmatter.github}>
                        <FiGithub/>
                      </IconButton>
                    )}
                    {node.frontmatter.demo && (
                      <IconButton color="inherit" href={node.frontmatter.demo}>
                        <BiLinkExternal/>
                      </IconButton>
                    )}
                  </div>
                </CardContent>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={node.frontmatter.mockup}
                  title={node.frontmatter.name + " - Mockup"}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
      </Grid>
    </Container>
  );
}

export default Featured

