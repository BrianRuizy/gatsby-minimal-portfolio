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
        <meta property="og:image" content="https://user-images.githubusercontent.com/23439187/112022247-1ac04080-8b00-11eb-8f0c-2954ac58f221.png"/>
        <meta property="og:image:width" content="2139" />
        <meta property="og:image:width" content="1126" />
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
