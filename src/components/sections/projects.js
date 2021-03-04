import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"


const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/projects/"}, excerpt: {}}) {
        totalCount
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              title
              metaDescription
              external
              tech
            }
          }
        }
      }
    }
  `)
  return( 
    <Container>
      <h2>Other Projects &darr;</h2>
      <Row className="mt-4">
      {data.allMarkdownRemark.edges.map(({ node }) => ( 
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card>
            <Card.Header>{node.frontmatter.metaDescription}</Card.Header>
            <Card.Body>
              <Card.Title>{node.frontmatter.title}</Card.Title>
              <Card.Text>{node.excerpt}</Card.Text>
              <Card.Link href={node.frontmatter.external}>Github</Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects

