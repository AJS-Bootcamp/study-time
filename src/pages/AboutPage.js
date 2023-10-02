import {  Row, Container } from "reactstrap";
// import SubHeader from "../components/SubHeader";
// import PartnersList from "../features/partners/PartnersList";

// import styles from "../../src/about.module.css";

import studyImage from "../app/assets/img/study3.png";

const AboutPage = () => {
  return (
    <Container>
      {/* <SubHeader current="About Us" /> */}
      <Row>
        <h3>About us</h3>
      </Row>

      <Row clasName="row-content">
        <img src={studyImage} alt="study" />
        <h3>
          Determine to discover effective methods to enhance your study skills
          and optimize your learning experience.
        </h3>
        <p>
          "As former students, our mission is to empower individuals to unlock
          their full potential by drawing upon our own experiences and providing
          them with the knowledge and tools needed to master effective study
          techniques and elevate their learning journey."
        </p>
      </Row>
    </Container>
  );
};

export default AboutPage;
