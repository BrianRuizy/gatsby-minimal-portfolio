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
        <title>{frontmatter.name} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      <Container>
        <article className="post">
          <Link to="/">
            <CgArrowLeft className="back-button"/>
          </Link>
          <Jumbotron>
            <div className="badges">
              { frontmatter.tags.map((tag, index) =>
                <Badge key={index} variant="secondary">{tag}</Badge>
              )}
            </div>
            <h1>{frontmatter.subtitle}</h1>
            <Row className="post-meta">
              <Col>{frontmatter.name}</Col>
              <Col className="text-right">{frontmatter.date}</Col>
            </Row>
          </Jumbotron>
          {!!frontmatter.thumbnail && (
            <div 
              className="post-thumbnail" 
              style={{backgroundImage: `url(${frontmatter.thumbnail})`}}
            />
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        path
        name
        subtitle
        category
        thumbnail
        description
        tags
      }
    }
  }
`