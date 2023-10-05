import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../components/Sidebar";
import { getRandomVideo } from "./Study";
import Loading from "../components/Loading";
import YouTubeVideo from "../components/YouTubeVideos";

function Homepage() {
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    const fetchRandomVideo = async () => {
      const video = await getRandomVideo();
      setTimeout(() => {
        setRandomVideo(video);
      }, 1000); // delay time in milliseconds (1000ms = 1 second)
    };

    fetchRandomVideo();
  }, []);

  return (
    <Container fluid>
      <Row className="row-content">
        <Col sm="3">
          <Sidebar />
        </Col>

        <Col sm="9">
          <h3>Our Recommendation</h3>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh", width: "100%" }}
          >
            <div style={{ height: "50vh", width: "100vh" }}>
              {randomVideo ? (
                <YouTubeVideo videoId={randomVideo.id} />
              ) : (
                <Loading /> // You can replace this with a loading spinner or any placeholder you prefer
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
