import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <Container>
        <div className="section about">
          <Row>
            <Col md={8} sm={12}>
              <h1>
                I enjoy the process of creating and abstract idea 
                and materializing it into simething that generates <u>value</u>
              </h1>
            </Col>
            <Col>
              <Image src="/assets/portrait.png"></Image>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`