import YouTube from "react-youtube";
import { Container, Row, Col } from "reactstrap";

const YouTubeVideo = ({ videoId, strategyExplanation }) => {
  const opts = {
    height: "550",
    width: "750",
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="youtube-video">
            <YouTube videoId={videoId} opts={opts} />
            <p className="strategy-explanation">{strategyExplanation}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default YouTubeVideo;
