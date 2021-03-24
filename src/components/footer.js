import React from "react"

export default (props) => (
  <footer className="site-footer py-5">
    <a href="https://app.netlify.com/sites/brianruizy/deploys" target="_blank" rel="noopener noreferrer">
      <img src="https://api.netlify.com/api/v1/badges/72511ec5-84cd-416c-81d8-b16489c1b235/deploy-status" alt="Netlify Status" /> 
    </a>
    <p className="mt-1">
      &copy;{ new Date().getFullYear() } 
      <a href="https://github.com/BrianRuizy/gatsby-minimal-portfolio/" target="_blank" rel="noopener noreferrer"> Portfolio</a>,
      by Brian Ruiz.
    </p>
  </footer>
)