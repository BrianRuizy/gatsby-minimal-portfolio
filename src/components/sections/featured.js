import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { FiGithub } from "react-icons/fi"
import { FiExternalLink } from "react-icons/fi"

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
              cardSize
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
      <h2>Featured &darr;</h2>
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col
            key={node.id}
            lg={node.frontmatter.cardSize}
            sm={12}
            style={{ display: "flex" }}
          >
            <Card className="mb-4 featured">
              <Card.Header>{node.frontmatter.category}</Card.Header>
              <Card.Body>
                <Card.Title>{node.frontmatter.title}</Card.Title>
                <Card.Text>{node.frontmatter.metaDescription}</Card.Text>
                <Card.Link href={node.frontmatter.path}>Learn more</Card.Link>
                {node.frontmatter.github && (
                  <Card.Link href={node.frontmatter.github}>
                    <FiGithub />
                  </Card.Link>
                )}
                {node.frontmatter.demo && (
                  <Card.Link href={node.frontmatter.demo}>
                    <FiExternalLink />
                  </Card.Link>
                )}
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
  );
}

export default Featured

