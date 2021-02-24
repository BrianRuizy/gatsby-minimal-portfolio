import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">BR</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
          Made with <span role="img" aria-label="love">❤️</span> and
          <span role="img" aria-label="love"> ☕</span><br></br>
          &copy; {new Date().getFullYear()} Brian Ruiz 
        </p>
      </footer>
    </div>
  )
}
