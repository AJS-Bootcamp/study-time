import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <Row className="row-content-contact d-flex justify-content-center">
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
