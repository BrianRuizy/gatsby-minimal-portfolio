import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

var hour = new Date().getHours();
var greet;

if (hour >= 5 && hour < 11)
    greet = 'Good morning, ';
else if (hour >= 11 && hour <= 17)
    greet = 'Good afternoon, ';
else if (hour >= 17 && hour <= 23)
    greet = 'Good evening, ';
else if (hour == 24 || hour < 5)
    greet = 'Hello, you night-owl.';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              name
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{greet}<br></br> I'm {data.site.siteMetadata.home.name}</div>
        <div className="primary-content">
          <p>
            I'm a <strong>Software Engineer</strong> specializing in&nbsp;
            <u className="highlights -c1">Python</u> full stack development. I'm a&nbsp;
            <u className="highlights -c2">data nerd</u>, know&nbsp;
            <u className="highlights -c3">cloud computing</u>, enjoy front-end&nbsp;
            <u className="highlights -c4">design</u>, & proponent of&nbsp;
            <u className="highlights -c5">open-source</u>.
          </p>
        </div>
        <Link to='/contact' className="button -primary">Reach out &nbsp;&rarr;</Link>
      </div>
    )}
  />
)