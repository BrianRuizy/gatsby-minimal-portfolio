import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  heading: {
    margin: theme.spacing(1),
    marginBottom: '4rem', 
    marginTop: '20rem', 
    maxWidth: '25rem', 
    '@media (max-width:600px)': {
      maxWidth: '15rem', 
      marginTop: '12.5rem', 
      
    },
  },
  headingTitle: {
    color: 'var(--secondary-text-color)',
    fontSize: '2.125rem',
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
    color: 'var(--secondary-text-color)',
    background:'var(--card-bg)',
    borderRadius: '1rem',
  },
  subtitle: {
    fontWeight: '200',
    margin: theme.spacing(2, 'auto'),
    color: 'var(--secondary-text-color)',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'var(--primary-text-color)',
    lineHeight: '1.2',
  },
  desc: {
    fontSize: '1.25rem',
    '@media (max-width:600px)': {
      fontSize: 'initial'
    }
  },
  actions: {
    color: 'var(--primary-color)',
    marginLeft: '1rem',
  }
}));

const Projects = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/projects/"}, excerpt: {}}) {
        totalCount
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              name
              github
              demo
              tags
            }
          }
        }
      }
    }
  `)
  return( 
    <Container component={Box} mt={15}>
      <div className={classes.heading}>
        <Typography className={classes.headingTitle} gutterBottom>Misc. Projects</Typography>
        <Typography className={classes.headingSubtitle} gutterBottom>Additional hobbyist projects done in spare time, or just for the fun</Typography>
      </div>

      <Grid container spacing={3}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Grid key={node.id} item xs={12} md={6} lg={4}>
          <Card className={classes.card} variant="outlined">
              <CardContent component={Box} m={2} mb={0}>
              <div className="chips">
                {node.frontmatter.tags.map((tag, index) =>
                  <Chip key={index} variant="outlined" label={tag}/>
                )}
              </div>
                <Typography className={classes.title} gutterBottom>{node.frontmatter.name}</Typography>
                <Typography className={classes.desc} variant="body1">{node.excerpt}</Typography>
              </CardContent>
            <CardActions className={classes.actions}>             
              {node.frontmatter.github && (
                <Button color="inherit"  href={node.frontmatter.github}>
                  Github
                </Button>
              )}
              {node.frontmatter.demo && (
                <Button color="inherit"  href={node.frontmatter.demo}>
                  Demo
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default Projects

