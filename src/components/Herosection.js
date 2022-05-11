import { Col, Container, Row } from "react-bootstrap";
import imgtwo from "../assets/images/hero 2.jpg";
import imgone from "../assets/images/hero.jpg";
import classes from "../Styles/Hero.module.css";
function Herosection() {
  return (
    <Container fluid className={classes.main}>
      <Row className={classes.mainheader}>
        <Col
          sm={12}
          md={10}
          lg={6}
          xl={6}
          className="d-flex justify-content-center  flex-column"
        >
          <h1>Fast Growing ICO Agency For Blockchain Investors And Founders</h1>
          <p className={classes.para}>
            Sifting Through Teaspoons Of Clay And Sand Scraped From The Floors
            Of Caves, German Researchers Have Managed.
          </p>
          <h3>Get early acces for you</h3>
          <div className={`${classes.input_gropu} mt-3`}>
            <input
              type="text"
              placeholder="Enter Your Email"
              className={`rounded-pill w-75 p-2 ${classes.form_control}`}
            />{" "}
            <button className={classes.input_button}>Get in touch</button>
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className={` d-flex justify-content-center align-items-center ${classes.mainimg}`}
        >
          <img className="img-fluid" src={imgone} alt="imgone" />
          <img
            className={`img-fluid ${classes.image2}`}
            src={imgtwo}
            alt="imgone"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Herosection;
