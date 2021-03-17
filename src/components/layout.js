import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

import 'prismjs/themes/prism-tomorrow.css';

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
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
