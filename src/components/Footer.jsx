import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>Visit Us</h5>
            <p>Block 23 Lot 19 G 21<br />Verde Heights Subdivision Gaya-Gaya
            CSJDM, Bulacan</p>
          </Col>
          <Col md={4}>
            <h5>Hours</h5>
            <p>Mon-Fri: 7am - 8pm<br />Sun: 8am - 9pm</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2025 Coffee Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;