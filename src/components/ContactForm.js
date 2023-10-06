import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();

    alert("Thank you for your feedback!");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          agree: false,
          feedback: "",
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}
      >
        {({ errors, touched, isValid }) => (
          <Form className="w-100">
            <FormGroup row className="mb-3">
              <Label htmlFor="firstName" md="2">
                First Name
              </Label>
              <Col md="10">
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                />
                <ErrorMessage name="firstName">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>
            <FormGroup row className="mb-3">
              <Label htmlFor="lastName" md="2">
                Last Name
              </Label>
              <Col md="10">
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                />
                <ErrorMessage name="lastName">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>

            <FormGroup row className="mb-3">
              <Label htmlFor="email" md="2">
                Email
              </Label>
              <Col md="10">
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="form-control"
                />
                <ErrorMessage name="email">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </Col>
            </FormGroup>

            <FormGroup row className="mb-3">
              <Label htmlFor="feedback" md="2">
                Your Feedback
              </Label>
              <Col md="10">
                <Field
                  name="feedback"
                  as="textarea"
                  rows="12"
                  className="form-control"
                />
              </Col>
            </FormGroup>
            <FormGroup row className="text-end">
              <Col md={{ size: 10, offset: 2 }}>
                <Button
                  type="submit"
                  color="primary"
                  disabled={!isValid || !touched}
                >
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
