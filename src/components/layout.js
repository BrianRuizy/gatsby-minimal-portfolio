import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

import 'prismjs/themes/prism-tomorrow.css';

export default ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
