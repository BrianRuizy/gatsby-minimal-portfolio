import React from "react";
import {Link} from "gatsby"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"

import Drawer from "react-bottom-drawer";
import { FiMessageSquare } from "react-icons/fi"

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);

  return (
  <div className="bottom-drawer">
    <FiMessageSquare className="icon message d-md-block d-lg-none" onClick={openDrawer}></FiMessageSquare>
    <a className="d-none d-lg-block " onClick={openDrawer}>Contact</a>
    <div className="drawer">
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <Row>
          <Col lg={6} md={8} sm={10} xs={11} className="contact-form">
            <form name="contactForm" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contactForm"/>
              
              <label htmlFor="defaultFormContactNameEx" >Your name</label>
              <input type="text" id="defaultFormContactNameEx" name="name" className="form-control" required/>
              <br />

              <label htmlFor="defaultFormContactEmailEx" >Email</label>
              <input type="email" id="defaultFormContactEmailEx" name="email" className="form-control" required/>
              <br />
              
              <label htmlFor="defaultFormContactSubjectEx" >Subject</label>
              <input type="text" id="defaultFormContactSubjectEx" name="subject" className="form-control" />
              <br />

              <label htmlFor="defaultFormContactMessageEx" >Message</label>
              <textarea type="text" id="defaultFormContactMessageEx" name="message" className="form-control" rows="3" required/>
              <Button className="mt-4" type="submit" size="md">Send</Button>
            </form>
          </Col>
        </Row>
        
      </Drawer>
    </div>

  </div>
  
  );
}
