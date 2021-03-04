import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import PostLink from "../post-link"


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
      <div className="grids">
        {data.allMarkdownRemark.edges.map(
          ({ node }) => ( 
            <div key={node.id}>
              <h3>
              {node.frontmatter.title}{" "}
              <span > — {node.frontmatter.tech} </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          )
        )}
      </div>
    </Container>
  )
}

export default Projects

