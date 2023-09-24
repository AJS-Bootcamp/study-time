import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5>Your Study App was build by Austin, Jocelyn, Sylvia.</h5>
          <h3>
          Determine to discover effective methods to enhance your study skills and optimize
            your learning experience.
          </h3>
        </Col>
      </Row>

      <Row className="row-content">
        <Col xs="12">
          <h2>Send Us Your Feedback</h2>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
