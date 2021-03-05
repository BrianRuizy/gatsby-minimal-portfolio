import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { FiGithub } from "react-icons/fi"
import { FiExternalLink } from "react-icons/fi"
import { AiFillFolder } from "react-icons/ai"

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
        <Col key={node.id} lg={3} md={4} sm={6} xs={12} style={{display: "flex"}}>
          <Card className="mb-3 projects">
            <Card.Body className="row">
              <Col xs={2} sm={12}>
                <AiFillFolder style={{fontSize: "2rem"}}/>
              </Col>
              <Col>
                <Card.Title>{node.frontmatter.title}</Card.Title>
                <Card.Text>{node.excerpt}</Card.Text>
                { node.frontmatter.github && 
                  <Card.Link href={node.frontmatter.github}><FiGithub/></Card.Link>
                }
                { node.frontmatter.demo && 
                  <Card.Link href={node.frontmatter.demo}><FiExternalLink/></Card.Link>
                }
              </Col>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Projects

