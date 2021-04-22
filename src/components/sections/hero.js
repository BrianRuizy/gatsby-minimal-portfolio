import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Resume from "../../../static/Brian-Ruiz-Resume.pdf"

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { FiDownload } from 'react-icons/fi'


var hour = new Date().getHours();
var greet;

if (hour >= 5 && hour < 11)
    greet = '🌄 Good morning';
else if (hour >= 11 && hour < 17)
    greet = '👋 Good afternoon';
else if (hour >= 17 && hour < 23)
    greet = '🌆 Good evening';
else if (hour === 23 || hour < 5)
    greet = '🦉 Hi, night owl';

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
        <h1>
          <span id="greeting">{greet}</span><br></br>
          I'm @<u>{data.site.siteMetadata.home.username}</u>,<br></br>
          {data.site.siteMetadata.home.role}
        </h1>
        <p>{data.site.siteMetadata.home.summary}</p>
        <div className="cta">
          <Link to="/about"><Button variant="light" className="mr-3">About me</Button></Link>
          <a href={Resume}><Button variant="primary"><FiDownload className="mr-1"/>Resume</Button></a>
        </div>
      </Container>      
    )}
  />
)