// import { Container, Row, Col } from "reactstrap";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="site-footer">
//       <Container>
//         <Row>
//           <Col xs={{ size: 4, offset: 1 }} sm="2">
//             <h5>Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>

//               <li>
//                 <NavLink to="/todo">To Do</NavLink>
//               </li>

//               <li>
//                 <NavLink to="/study">Study</NavLink>
//               </li>

//               <li>
//                 <NavLink to="/Contact">Contact</NavLink>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


import Navigation from "./Navigation";

function Footer() {
  return (
    <div>
      <h1>Study Time</h1>
      <Navigation />
    </div>
  );
}

export default Footer;