import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import teamapi from "../API/Team";

import "../Styles/Team.css";
function Team() {
  const [teamap, setTeam] = useState(teamapi);
  console.log(teamap);
  return (
    <>
      <Container className="teaming" fluid>
        <h4 className="sub-title text-center">MEET OUR BRILLIANT MINDS</h4>
        <h1 className="main-title  text-center">Our Leadership Team</h1>
        <Row
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          className="team-row"
        >
          {teamap.map((current) => {
            const {
              id,
              photo,
              name,
              position,
              logo,
              logo1,
              logo2,
              logo3,
              info,
            } = current;

            return (
              <>
                <Col className="" sm={12} lg={3}>
                  <img
                    className="img_circle rounded-circle"
                    src={photo}
                    alt="img"
                    style={{ width: "190px" }}
                  />
                  <div className="teams">
                    <h2 className="names">{name}</h2>
                    <h5>{position}</h5>
                    <i class={` fontawsome ${logo}`}></i>
                    <i class={` fontawsome ${logo1}`}></i>
                    <i class={` fontawsome ${logo2}`}></i>
                    <i class={` fontawsome ${logo3}`}></i>
                    <p className="info">{info}</p>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Team;
