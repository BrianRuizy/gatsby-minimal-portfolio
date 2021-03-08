import React from "react";
import { Col, Row } from "react-bootstrap";
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
          <Col md={6} className="text-center py-5">
          <p>asdf</p>
          </Col>
        </Row>
      </Drawer>
    </div>

  </div>
  
  );
}
