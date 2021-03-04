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
              date(formatString: "MMMM DD, YYYY")
              path
              title
              thumbnail
            }
          }
        }
      }
    }
  `)
  return( 
    <Container>
      <h2>Featured &darr;</h2>
      <div className="grids">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article className="card ">
          <Link to={node.frontmatter.path}>
            {!!node.frontmatter.thumbnail && (
              <img src={node.frontmatter.thumbnail} alt={node.frontmatter.title + "- Featured Shot"} />
            )}
          </Link>
          <header>
            <h2 className="post-title">
              <Link to={node.frontmatter.path} className="post-link">
                {node.frontmatter.title}
              </Link>
            </h2>
            <div className="post-meta">{node.frontmatter.date}</div>
          </header>
        </article>
        
        ))}
      </div>
    </Container>
  )
}

export default Featured

