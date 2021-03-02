import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              name
              role
              skillset
              preferredLocation
              availability
            }
          }
        }
      }
    `}
    render={data => (
      <Container className="hero-header">
        <Row>
          <Col>
            <div className="headline">
              {data.site.siteMetadata.home.role};<br></br>
              {<ul id="skillset">
                {data.site.siteMetadata.home.skillset.map((skill,index) => 
                  <li key={index}>{skill},</li> 
                )}
              </ul>}
            </div>
          </Col>
        </Row>
        <Row  className="justify-content-md-center">
          <Col md="auto">
            <Image roundedCircle src="/assets/portrait.png"></Image>
          </Col>
          <Col md="auto" className="text-left">
            <b>{data.site.siteMetadata.home.name}, {data.site.siteMetadata.home.role}</b><br></br>
            {data.site.siteMetadata.home.preferredLocation}<br></br>
            {data.site.siteMetadata.home.availability}
          </Col>
        </Row>
        {/* <Link to='/contact' className="button -primary">Reach out &nbsp;&rarr;</Link> */}
      </Container>      
    )}
  />
)