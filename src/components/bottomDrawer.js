import React from "react";

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
    <a className="d-none d-lg-block " onClick={openDrawer} style={{ color: 'var(--primary-text-color)' }}>Contact</a>
    <div className="drawer">
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <Row>
          <Col lg={6} md={8} sm={10} xs={11} className="contact-form">
            <form name="EmailContactForm" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="EmailContactForm"/>
              
              <label htmlFor="defaultFormContactNameEx">Name</label>
              <input type="text" id="defaultFormContactName" name="name" className="form-control" required/>
              <br />

              <label htmlFor="defaultFormContactEmailEx">Email</label>
              <input type="email" id="defaultFormContactEmail" name="email" className="form-control" required/>
              <br />
              
              <label htmlFor="defaultFormContactSubjectEx">Subject</label>
              <input type="text" id="defaultFormContactSubject" name="subject" className="form-control" />
              <br />

              <label htmlFor="defaultFormContactMessageEx">Message</label>
              <textarea type="text" id="defaultFormContactMessage" name="message" className="form-control" placeholder="Something nice 🙂 ..." rows="4" required/>
              <Button className="mt-4" type="submit" size="md">Email me</Button>
            </form>
          </Col>
        </Row>
        
      </Drawer>
    </div>

  </div>
  
  );
}
