import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { FiGithub } from "react-icons/fi"
import { FiExternalLink } from "react-icons/fi"

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
              github
              demo
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
      <Row>
      {data.allMarkdownRemark.edges.map(({ node }) => ( 
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Subtitle>Folder</Card.Subtitle>
              <Card.Title>{node.frontmatter.title}</Card.Title>
              <Card.Text>{node.excerpt}</Card.Text>
              { node.frontmatter.github && 
                <Card.Link><Link to={node.frontmatter.github}><FiGithub/></Link></Card.Link>
              }
              { node.frontmatter.demo && 
                <Card.Link><Link to={node.frontmatter.demo}>demo</Link></Card.Link>
              }
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects

