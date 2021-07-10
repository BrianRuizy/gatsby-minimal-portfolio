import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import Chip from '@material-ui/core/Chip';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Inter", 
      "Roboto"
    ].join(','),
  },
});

const useStyles = makeStyles((theme) => ({
  blogHeader: {
    '& > *': {
      margin: theme.spacing(1, 0),
    },
    marginTop: '8rem',
    '@media (max-width:768px)': {
      marginTop: '2rem',
    }
  },
  backBtn: {
    color: 'var(--primary-color)',
    paddingLeft: '0'
  },
  postMeta: {
    color: 'var(--primary-text-color)',
    fontSize: '1.125rem',
    '@media (max-width:768px)': {
      fontSize: '1rem'
    }
  }, 
  title: {
    color: 'var(--primary-text-color)',
    marginBottom: '1rem',
    fontSize: '2.5rem',
    fontWeight: '800',
    '@media (max-width:768px)': {
      fontSize: '1.75rem'
    }
  },
  thumbnail: {
    background: 'var(--card-bg)',
    minHeight: '40em',
    maxWidth: '75rem',
    textAlign: 'center',
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    margin: theme.spacing('1rem', 'auto', '6rem'),
    boxShadow: 'rgba(0, 0, 0, 0.20) 0px 30px 60px -10px, rgba(0, 0, 0, 0.40) 0px 18px 36px -18px',
    '@media (max-width:768px)': {
      minHeight: '30rem',
    },
    '@media (max-width:640px)': {
      minHeight: '18rem',
    }
  }
}));

export default function Template({
  data,
  }) {
  const classes = useStyles()
  const { site, markdownRemark } = data
  const { siteMetadata } = site
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <title>{frontmatter.name} | by {siteMetadata.home.name} | {frontmatter.date}</title>
          <meta name="description" content={frontmatter.title} />
        </Helmet>
        <article className="post">
          <Container className={classes.blogHeader} maxWidth="md">
            <Grid container direction="row" alignItems="center" spacing={0,0,1,0} >
              <Grid item>
                <IconButton component={Link} to="/">
                  <ArrowBackIcon className={classes.backBtn}/>
                </IconButton>
              </Grid>
              <Grid item>
                <Typography className={classes.postMeta} >
                  {frontmatter.name}
                </Typography>
              </Grid>
            </Grid>
            <div>
              { frontmatter.tags.map((tag, index) =>
                <Chip key={index} variant="secondary" label={tag}></Chip>
              )}
            </div>
            <Typography className={classes.title} variant="h1">{frontmatter.title}</Typography>
            <Grid container direction="row" alignItems="center" justify="space-between" className={classes.postMeta}>
              <Grid item>
                <IconButton disabled size="small" style={{paddingLeft: '0'}}>
                  <QueryBuilderIcon style={{color: 'var(--secondary-text-color', fontSize: '1rem'}} />
                </IconButton>
                {timeToRead} minute read
              </Grid>
              <Grid item>{frontmatter.date}</Grid>
            </Grid>
          </Container>
          <Box disableGutters="true">
            {!!frontmatter.thumbnail && (
              <div className={classes.thumbnail}  style={{backgroundImage: `url(${frontmatter.thumbnail})`}}/>
            )}
          </Box>
          <Container maxWidth="md">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Container>
        </article>
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        home {
          name
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM YYYY")
        path
        name
        title
        category
        thumbnail
        description
        tags
      }
    }
  }
`