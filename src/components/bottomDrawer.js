import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Drawer from "react-bottom-drawer";
import { FiMessageSquare } from "react-icons/fi"


export default function App() {
  const [isVisible, setIsVisible] = React.useState(true);
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
          <Col md={6} className="text-center py-5">
          <form name="contact" netlify>
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          </Col>
        </Row>
      </Drawer>
    </div>

  </div>
  
  );
}
