import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>
          I'm a Software Developer, specializing in Python full stack development.
          I'm a data nerd, know cloud computing, enjoy front-end design, & proponent of open-source.
          </p>
        </div>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)