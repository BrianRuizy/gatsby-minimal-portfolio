import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container"
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FiGithub } from "react-icons/fi"
import { BiLinkExternal } from "react-icons/bi"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
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
    fontWeight: '800',
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
    margin: theme.spacing(2, 'auto', 0),
  },
  cardCTA: {
    marginRight: theme.spacing(1)
  },
  media: {
    maxHeight: '425px',
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
    <Container>
      <Grid container spacing={5}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Grid key={node.id} item xs={12}>
          <Card className={classes.card}>
          <CardActionArea>
            <Grid container>
              <Grid item sm={6} xs={12} component={Box} m='auto' px={6}>
                <CardContent>
                  <Typography className={classes.subtitle}>{node.frontmatter.category} </Typography>
                  <Typography className={classes.title} gutterBottom>{node.frontmatter.name}</Typography>
                  <Typography className={classes.desc} variant="body1" paragraph>{node.frontmatter.description}</Typography>
                  <Divider />
                  <div className={classes.actions} >
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
            </CardActionArea>

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

