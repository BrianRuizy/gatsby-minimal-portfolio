import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { GoPrimitiveDot } from 'react-icons/go'

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
              <h1>{data.site.siteMetadata.home.role}:<br></br>
                {<ul id="skillset">
                  {data.site.siteMetadata.home.skillset.map((skill,index) => 
                    <li key={index}>{skill},</li> 
                  )}
                </ul>}
              </h1>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/about"><Image roundedCircle src="/assets/portrait.png"></Image></Link>
            <GoPrimitiveDot style={{ color: "#54b96d", margin: "35px 0 0 -20px", fontSize: "1.5em" }}/>
          </Col>
          <Col xs="auto" className="text-left">
            <p>
              <b>{data.site.siteMetadata.home.name}, {data.site.siteMetadata.home.role}</b><br></br>
              {data.site.siteMetadata.home.preferredLocation}<br></br>
              {data.site.siteMetadata.home.availability}
            </p>
          </Col>
        </Row>
      </Container>      
    )}
  />
)