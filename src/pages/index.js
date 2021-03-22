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
        <meta property="og:image" content="https://user-images.githubusercontent.com/23439187/111946587-becacd00-8aa9-11eb-96ee-a5399fa2658a.png"/>
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:width" content="622" />
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
