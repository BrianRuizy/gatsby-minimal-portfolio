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
            I'm a <strong>Software Engineer</strong> specializing in&nbsp;
            <u style={{"textDecorationColor":"#ffd0f7"}}>Python</u> full stack development. I'm a&nbsp;
            <u style={{"textDecorationColor":"#c6b3ff"}}>data nerd</u>, know&nbsp;
            <u style={{"textDecorationColor":"#c5d5ff"}}>cloud computing</u>, enjoy&nbsp;
            <u style={{"textDecorationColor":"#91ffde"}}>front-end design</u>, & proponent of&nbsp;
            <u style={{"textDecorationColor":"#c9ffd2"}}>open-source</u>.
          </p>
        </div>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)