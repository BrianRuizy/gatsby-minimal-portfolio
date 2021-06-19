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
  header: {
    marginBottom: '1.125rem',
    textAlign: 'center',
    color: 'var(--secondary-color)',
  },
  card: {
    color: 'var(--secondary-text-color)',
    background:'var(--card-bg)',
    borderRadius: '8px',
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
      <div className={classes.header}>
        <p>More noteworthy projects &darr;</p>
      </div>
      <Grid container spacing={3}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Grid key={node.id} item xs={12} md={6} lg={4}>
          <Card className={classes.card} component={Box} boxShadow={2}>
            <CardActionArea>
              <CardContent component={Box} m={2} mb={0}>
              <div className="chips">
                {node.frontmatter.tags.map((tag, index) =>
                  <Chip key={index} variant="outlined" label={tag}/>
                )}
              </div>
                <Typography className={classes.title} gutterBottom>{node.frontmatter.name}</Typography>
                <Typography className={classes.desc} variant="body1">{node.excerpt}</Typography>
              </CardContent>
            </CardActionArea>
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

