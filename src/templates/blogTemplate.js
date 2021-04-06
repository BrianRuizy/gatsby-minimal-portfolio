import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Jumbotron from "react-bootstrap/Jumbotron"
import Badge from "react-bootstrap/Badge"

import { CgArrowLeft } from "react-icons/cg"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.name} | by {siteMetadata.home.name} | {frontmatter.date}</title>
        <meta name="description" content={frontmatter.title} />
      </Helmet>
      <article className="post">
        <Container>
          <Link to="/">
            <CgArrowLeft className="back-button"/>
          </Link>
          <Jumbotron>
            <div className="badges">
              { frontmatter.tags.map((tag, index) =>
                <Badge key={index} variant="secondary">{tag}</Badge>
              )}
            </div>
            <h1>{frontmatter.title}</h1>
            <Row className="post-meta">
              <Col>{frontmatter.name} <span className="category">&#8226; {frontmatter.category}</span></Col>
              <Col xs="auto" className="text-right">{frontmatter.date}</Col>
            </Row>
          </Jumbotron>
        </Container>
        <Container fluid="lg">
          {!!frontmatter.thumbnail && (
            <div 
              className="post-thumbnail" 
              style={{backgroundImage: `url(${frontmatter.thumbnail})`}}
            />
          )}
        </Container>
        <Container>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Container>
      </article>
    </Layout>
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
      frontmatter {
        date(formatString: "MMM. YYYY")
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