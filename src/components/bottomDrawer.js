import React from "react";

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
    <FiMessageSquare className="icon message" onClick={openDrawer}></FiMessageSquare>
    <div className="drawer">
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <Row>
          <Col lg={6} md={8} sm={10} xs={11} className="contact-form">
            <form name="contact" netlify>
              <input type="hidden" name="form-name" value="contact">
              <label htmlFor="defaultFormContactNameEx" >
                Your name
              </label>
              <input type="text" id="defaultFormContactNameEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactEmailEx" >
                Your email
              </label>
              <input type="email" id="defaultFormContactEmailEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactSubjectEx" >
                Subject
              </label>
              <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactMessageEx" >
                Your message
              </label>
              <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
              <Button className="mt-4" type="submit" size="md">Send</Button>

              </form>
          </Col>
        </Row>
        
      </Drawer>
    </div>

  </div>
  
  );
}
