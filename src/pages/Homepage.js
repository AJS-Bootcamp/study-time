import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
import { getRandomVideo } from "./Study";

function Homepage() {
  const [randomVideo] = useState(getRandomVideo());

  return (
    <Container>
      <Row className="row-content">
        <Col sm="6">
          <Sidebar />
        </Col>

        <Col sm="6">
          <h3>Our recommendation</h3>
          {randomVideo && (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${randomVideo.id}`}
              title={randomVideo.title}
              frameBorder="01"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
