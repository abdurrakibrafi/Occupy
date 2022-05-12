import { Button, Col, Container, Row } from "react-bootstrap";

import "../Styles/About.css";

function About() {
  return (
    <section>
      <Container fluid className="aboutus">
        <Row className="rows">
          <Col sm={12} lg={6}>
            <Row>
              <Col className="card" sm={12} md={6} lg={6}>
                <i class={`fa-solid fa-hand-holding-dollar icon`}></i>
                <h3 className="title">Professional Consultants</h3>
                <p className="paras">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </Col>
              <Col className="card2 " sm={12} lg={6}>
                <i class={`fa-solid fa-hand-holding-dollar icon`}></i>
                <h3 className="titlecard">Professional Consultants</h3>
                <p className="paras">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </Col>
              <Col className="card" sm={12} lg={6}>
                <i class={`fa-solid fa-hand-holding-dollar icon`}></i>
                <h3 className="title">Professional Consultants</h3>
                <p className="paras">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </Col>
              <Col className="card" sm={12} lg={6}>
                <i class={`fa-solid fa-hand-holding-dollar icon`}></i>
                <h3 className="title">Professional Consultants</h3>
                <p className="paras">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="about"
          >
            <p className="title1">ABOUT UNION CORPORATION</p>
            <h1 className="maintitle">
              More than 40M+ Trusted <br></br> Our Financial & Conusultation
              Institution
            </h1>
            <p className="para mt-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <Button variant="outline-success learn">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
