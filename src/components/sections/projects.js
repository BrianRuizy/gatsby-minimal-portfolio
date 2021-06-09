import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badge from "react-bootstrap/Badge"

import { FiGithub } from "react-icons/fi"
import { BiLinkExternal } from "react-icons/bi"
import { AiOutlineFolder } from "react-icons/ai"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    color: 'var(--secondary-text-color)',
    background:'var(--card-bg)',
    '@media (max-width:600px)': {
      
    },
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
    // <Container style={{ "marginTop": "12rem" }}>
    //   <div className="projects-header">
    //     <p>Other small noteworthy projects &darr;</p>
    //   </div>
    //   <Row>
    //   {data.allMarkdownRemark.edges.map(({ node }) => ( 
    //     <Col key={node.id} lg={4} sm={6} xs={12} className="d-flex">
    //       <Card className="mb-4 projects">
    //         <Card.Body>
    //           <Row className="post-meta">
    //             <Col><AiOutlineFolder className="folder"/></Col>
    //             <Col className="text-right">
    //               { node.frontmatter.github && 
    //               <Card.Link href={node.frontmatter.github}><FiGithub/></Card.Link>
    //               }
    //               { node.frontmatter.demo && 
    //                 <Card.Link href={node.frontmatter.demo}><BiLinkExternal/></Card.Link>
    //               }
    //             </Col>
    //           </Row>
    //           <Card.Title>{node.frontmatter.name}</Card.Title>
    //           <Card.Text>{node.excerpt}</Card.Text>
    //           <div className="badges">
    //           { node.frontmatter.tags.map((tag, index) =>
    //             <Badge key={index} variant="secondary">{tag}</Badge>
    //           )}
    //         </div>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     ))}
    //   </Row>
    // </Container>
    <Container component={Box} mt={15}>
      <div className="projects-header">
        <p>Other small noteworthy projects &darr;</p>
      </div>
      <Grid container spacing={3}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Grid key={node.id} item xs={12} md={6} lg={4}>
          <Card className={classes.card} >
            <CardActionArea>
              <CardContent component={Box} m={2} mb={0}>
              <div className="badges">
                {node.frontmatter.tags.map((tag, index) =>
                  <Badge key={index} variant="secondary">{tag}</Badge>
                )}
              </div>
                <Typography className={classes.title} gutterBottom>{node.frontmatter.name}</Typography>
                <Typography className={classes.desc} variant="body1">{node.excerpt}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>             
              {node.frontmatter.github && (
                <IconButton color="inherit"  href={node.frontmatter.github}>
                  <FiGithub/>
                </IconButton>
              )}
              {node.frontmatter.demo && (
                <IconButton color="inherit"  href={node.frontmatter.demo}>
                  <BiLinkExternal/>
                </IconButton>
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

