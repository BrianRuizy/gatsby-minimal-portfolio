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
        <meta name="description" content={"About page of Brian. " + site.siteMetadata.description} />
      </Helmet>
      <Container className="section about">
          <div 
            className="banner" 
            style={{backgroundImage: `url(https://images.unsplash.com/photo-1614224353251-501960ff5c5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1629&q=80)`}}
          />
        <Row className="header">
          <Col sm={12} md="auto">
            <Image roundedCircle src="/assets/portrait.png"></Image>
          </Col>
          <Col sm={12} md="auto" className="text">
            <h2>{site.siteMetadata.home.name}</h2>
            <p>{site.siteMetadata.home.role}</p>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <h2>

            </h2>
          </Col>
          <Col md={3}>
            
          </Col>
        </Row>
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
        home {
          name
          role
          location
        }
      }
    }
  }
`