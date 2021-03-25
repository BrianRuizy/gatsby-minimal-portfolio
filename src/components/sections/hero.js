import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Resume from "../../../static/Brian_Ruiz_Resume.pdf"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { GoPrimitiveDot } from 'react-icons/go'
import { FaFileDownload } from 'react-icons/fa'


var hour = new Date().getHours();
var greet;

if (hour >= 5 && hour < 11)
    greet = '🌅 Good morning';
else if (hour >= 11 && hour <= 16)
    greet = '👋 Good afternoon';
else if (hour >= 16 && hour <= 23)
    greet = '🌆 Good evening';
else if (hour === 24 || hour < 5)
    greet = '🦉 Hello, nightowl';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              name
              username
              role
              summary
              availability
              location
            }
          }
        }
      }
    `}
    render={data => (
      <Container className="hero-header">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/about"><Image roundedCircle src="/assets/portrait.png"></Image></Link>
            <GoPrimitiveDot style={{ color: "#54b96d", margin: "40px 0 0 -30px", fontSize: "2em" }}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>
              <span id="greeting">{greet}</span><br></br>
              I'm @<u>{data.site.siteMetadata.home.username}</u>,<br></br>
              {data.site.siteMetadata.home.role}
            </h1>
            <p>{data.site.siteMetadata.home.summary}</p>
            <div className="cta">
              <Link to="/about"><Button variant="primary" className="mr-2">About me</Button></Link>
              <a href={Resume}><Button variant="light"><FaFileDownload className="mr-1"/>Resume</Button></a>
            </div>
          </Col>
        </Row>
      </Container>      
    )}
  />
)