import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

import styles from "../../src/about.module.css";

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us" />
      <Row clasName="row-content">
        <Col sm="6">
          <h3>About us</h3>
          <p>
            "As former students, our mission is to empower individuals to unlock
            their full potential by drawing upon our own experiences and
            providing them with the knowledge and tools needed to master
            effective study techniques and elevate their learning journey."
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
