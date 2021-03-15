import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";

import { AiOutlineRobot } from "react-icons/ai"
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <Container className="text-center">
        <AiOutlineRobot style={{fontSize: "10rem", margin: "2rem" }}/>
        <h2 style={{fontWeight: 'lighter'}}>404, page not found!</h2>
        <h2>Lets get you back safe and sound.</h2>
        <Button className="mt-2" size="md">
          <Link to="/" style={{color: 'var(--featured-text)'}}>Home</Link>
        </Button>
      </Container>
    </Layout>
  )
}

export default notFound