import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FiGithub } from "react-icons/fi"
import { BiLinkExternal } from "react-icons/bi"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    margin: theme.spacing(2.5, 'auto'),
    color: 'var(--secondary-text-color)',
    background:'var(--card-bg)',
    '@media (max-width:600px)': {
      textAlign: 'center',
    },
  },
  subtitle: {
    fontWeight: '200',
    margin: theme.spacing(2, 'auto'),
    color: 'var(--secondary-text-color)',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '700',
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
  }
  
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

    <Container>
      <Grid container>
      {data.allMarkdownRemark.edges.map(({ node }) => (

        <Grid key={node.id} item xs={12}>
          <Card className={classes.card} >
            <CardActionArea>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography className={classes.subtitle} >{node.frontmatter.category} </Typography>
                <Typography className={classes.title} gutterBottom>{node.frontmatter.name}</Typography>
                <Typography className={classes.desc} variant="body1" paragraph>{node.frontmatter.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
              <Button color="inherit" variant="outlined">
                Read More
              </Button>
             
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
        // <Container>
    //   <Row>
    //     {data.allMarkdownRemark.edges.map(({ node }) => (
    //       <Col key={node.id} sm={12} className="d-flex">
    //         <Card className="featured">
    //         <Row className="align-items-center">
    //           <Col md={6} sm={12}>
    //             <Card.Body>
    //               <Card.Header>{node.frontmatter.category}</Card.Header>
    //               <Card.Title>{node.frontmatter.name}</Card.Title>
    //               <Card.Text>{node.frontmatter.description}</Card.Text>
    //               <hr/>
    //               <Card.Link href={node.frontmatter.path}>
    //                 <Button variant="outline-primary">Read more</Button>
    //               </Card.Link>
    //               {node.frontmatter.github && (
    //                 <Card.Link href={node.frontmatter.github}>
    //                   <FiGithub />
    //                 </Card.Link>
    //               )}
    //               {node.frontmatter.demo && (
    //                 <Card.Link href={node.frontmatter.demo}>
    //                   <BiLinkExternal />
    //                 </Card.Link>
    //               )}
    //             </Card.Body>
    //           </Col>
    //           <Col md={6} sm={12}>
    //             <Link to={node.frontmatter.path}>
    //               {!!node.frontmatter.mockup && (
    //                 <Card.Img src={node.frontmatter.mockup} alt={node.frontmatter.name + " - Mockup"} />
    //               )}
    //             </Link>
    //           </Col>
    //         </Row>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
}

export default Featured

