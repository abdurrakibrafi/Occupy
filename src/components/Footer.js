import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Footer.css";
function Footer() {
  return (
    <>
      <Container className="footer" fluid>
        <Row className="footer-row">
          <Col className="mt-4" lg={4} sm={12}>
            <h3 className="footer-logo">OCCUPY.</h3>
            <p className="footer-p">
              Please remember though that how far you go is up to you. There is
              no substitute for your own work and effort in succeeding in this
              business.
            </p>
          </Col>
          <Col className="mt-4" lg={2} sm={12}>
            <h3 className="footer-title">Services</h3>
            <li>Personal Loans</li>
            <li>Business Loans</li>
            <li>Online Cash Loans</li>
            <li>Cash Advance</li>
          </Col>
          <Col className="mt-4" lg={2} sm={12}>
            <h3 className="footer-title">Socials</h3>
            <li>
              <i class="fa-brands fa-facebook-f"></i> Facebook
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i> Instagram
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i> Twitter
            </li>
            <li>
              {" "}
              <i class="fa-brands fa-skype"></i> Skype
            </li>
          </Col>
          <Col className="mt-4" lg={4} sm={12}>
            <h3 className="footer-title">Open Hours</h3>
            <li>We work all days a week, Please contact us for any inquiry.</li>
            <li>Monday - Friday: 11:00 am - 8:00 pm</li>
            <li>Saturday: 10:00 am - 6:00 pm</li>
            <li>Sunday: 11:00 am - 6:00 pm</li>
          </Col>
        </Row>
        <Row className="footer-row2">
          <Col lg={6}>
            <div className="terms d-flex flex-row">
              <li className="ms-3">
                Terms of use<span className="vl ms-2"></span>
              </li>
              <li className="ms-3">
                Privacy Policy <span className="vl ms-2"></span>
              </li>
              <li className="ms-3">Community</li>
            </div>
          </Col>
          <Col>
            <li>
              {" "}
              Copyright ©2022 All rights reserved,This template is made with by
              <span className="create"> RaFi</span>
            </li>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
