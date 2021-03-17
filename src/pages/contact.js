import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <Container>
      <Row>
          <Col lg={6} md={8} sm={10} xs={11} className="contact-form">
            <form name="contactForm" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contactForm"/>
              
              <label htmlFor="defaultFormContactNameEx" >Your name</label>
              <input type="text" id="defaultFormContactNameEx" name="name" className="form-control" required/>
              <br />

              <label htmlFor="defaultFormContactEmailEx" >Email</label>
              <input type="email" id="defaultFormContactEmailEx" name="email" className="form-control" required/>
              <br />
              
              <label htmlFor="defaultFormContactSubjectEx" >Subject</label>
              <input type="text" id="defaultFormContactSubjectEx" name="subject" className="form-control" />
              <br />

              <label htmlFor="defaultFormContactMessageEx" >Message</label>
              <textarea type="text" id="defaultFormContactMessageEx" name="message" className="form-control" rows="3" required/>
              <Button className="mt-4" type="submit" size="md">Send</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
