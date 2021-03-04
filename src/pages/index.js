import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/sections/hero"
import Featured from "../components/sections/featured";
import Projects from "../components/sections/projects"

const IndexPage = ({
  data: { site }
}) => {

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Hero/>
      <Featured />
      <Projects />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
