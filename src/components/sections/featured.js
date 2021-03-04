import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"


const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/featured/"}, excerpt: {}}) {
        totalCount
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              title
              path
              github
              demo
              title
              category
              thumbnail
              metaDescription
            }
          }
        }
      }
    }
  `)
  return( 
    <Container>
      <h2>Featured &darr;</h2>
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col lg={4} xs={12}>
            <Card className="mb-3">
              <Card.Header>{node.frontmatter.category}</Card.Header>
              <Card.Body>
                <Card.Title>{node.frontmatter.title}</Card.Title>
                <Card.Text>{node.frontmatter.metaDescription}</Card.Text>
                <Card.Link><Link to={node.frontmatter.path}>learn more</Link></Card.Link>
                {node.frontmatter.github && <Card.Link><Link to={node.frontmatter.github} >code</Link></Card.Link>}
                {node.frontmatter.demo && <Card.Link><Link to={node.frontmatter.demo}>demo</Link></Card.Link>}
              </Card.Body>
              {/* <Link to={node.frontmatter.path}>
                {!!node.frontmatter.thumbnail && (
                  <Card.Img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + "- Featured Shot"} />
                )}
              </Link> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Featured

