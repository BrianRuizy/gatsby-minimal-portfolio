import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

import Container from "react-bootstrap/Container"
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
     <form name="contact-form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact-form"/>
              <label htmlFor="defaultFormContactNameEx" >
                Your name
              </label>
              <input type="text" id="defaultFormContactNameEx" name="name" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactEmailEx" >
                Your email
              </label>
              <input type="email" id="defaultFormContactEmailEx" name="email" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactSubjectEx" >
                Subject
              </label>
              <input type="text" id="defaultFormContactSubjectEx" name="subject" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactMessageEx" >
                Your message
              </label>
              <textarea type="text" id="defaultFormContactMessageEx" name="message" className="form-control" rows="3" />
              <Button className="mt-4" type="submit" size="md">Send</Button>

              </form>
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
