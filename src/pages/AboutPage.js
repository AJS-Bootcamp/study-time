import { Row, Container } from "reactstrap";
import LogoAJS from "../app/assets/img/lightAJS.png";
import studyImage from "../app/assets/img/study1.png";

const AboutPage = () => {
  const myStyle = {
    backgroundImage: `url(${studyImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    marginTop: "20px",
  };
  return (
    <Container style={myStyle}>
      <div class="d-flex flex-column gap-2 py-5 align-items-center  ">
        <h3 class="font-weight-bold p-2 bg-light bg-opacity-50 text-dark">
          About Us
        </h3>

        <img
          class="p-2 bg-light bg-opacity-50 "
          style={{ height: "200px", width: "300px" }}
          src={LogoAJS}
          alt="Logo AJS"
        />
        <h3 class="p-2 bg-light bg-opacity-50 text-dark ">
          Determined to discover effective methods to enhance your study skills
          and optimize your learning experience.
        </h3>
        <p class="p-2 bg-light bg-opacity-50 text-dark">
          "As former students, our mission is to empower individuals to unlock
          their full potential by drawing upon our own experiences and providing
          them with the knowledge and tools needed to master effective study
          techniques and elevate their learning journey."
        </p>
      </div>
    </Container>
  );
};

export default AboutPage;
