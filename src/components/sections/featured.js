import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import PostLink from "../post-link"

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
        {data.allMarkdownRemark.edges.map(
          ({ node }) => (
            <PostLink key={node.id} post={node} />
          )
        )}
      </div>
    </Container>
  )
}

export default Featured

