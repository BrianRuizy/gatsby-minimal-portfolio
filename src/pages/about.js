import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from "react-bootstrap/Badge"

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

const AboutPage = ({
  data: {
    site, markdownRemark, allMarkdownRemark
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
            <Image roundedCircle src="/assets/portrait.jpeg"></Image>
          </Col>
          <Col sm={12} md="auto" className="text">
            <h2>{site.siteMetadata.home.name}</h2>
            <p>{site.siteMetadata.home.role}</p>
          </Col>
        </Row>
        <Row >
          <Col xs={12} md={5} className="blog-post-content mb-5">
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}/>
            <h2>Technologies</h2>
            <p>The following are some of the langauges or frameworks I've used in either professional environments or hobby side projects.</p>
            <div className="badges">
              { markdownRemark.frontmatter.technologies.map((tech, index) =>
                <Badge key={index} variant="secondary">{tech}</Badge>
              )}
            </div>
          </Col>
          <Col xs={12} md={7}>
            <Timeline align="right">
              {allMarkdownRemark.edges.map(({ node }) => (
                <TimelineItem key={node.id}>
                  <TimelineOppositeContent>
                    <Typography>{node.frontmatter.company}</Typography>
                    <Typography color="textSecondary">
                      <span dangerouslySetInnerHTML={{ __html: node.html }}></span>
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent style={{flex: '.60'}}>
                  <Typography>{node.frontmatter.role}</Typography>
                    <Typography color="textSecondary" variant="body2">{node.frontmatter.date}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
query AboutPageQuery{
    site {
    siteMetadata {
      title
      home {
        location
        name
        role
      }
    }
  }
  markdownRemark(fileAbsolutePath: {regex: "/about/"}) {
    html
    frontmatter {
      socials
      technologies
    }
  }
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experience/"}}) {
    edges {
      node {
        id
        html
        frontmatter {
          role
          company
          date(formatString: "MMM. YYYY")
        }
      }
    }
  }
}

`

export default AboutPage
