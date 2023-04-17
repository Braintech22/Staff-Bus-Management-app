import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function Footer() {
    return ( <
        footer className = "mt-5 bg-dark text-light"
        style = {
            { height: '65px' } } >
        <
        Container >
        <
        p className = "text-center" > Bustrak 2023 My Website < /p> <
        p className = "text-center" > & copy; { new Date().getFullYear() }
        Company Name < /p> <
        /Container> <
        /footer>
    );
}

export default Footer;

// function Footer() {
//     return (
//       <footer className="bg-dark text-light">
//         <Container>
//           <Row>
//             <Col md={4}>
//               <h5>About Us</h5>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Col>
//             <Col md={4}>
//               <h5>Contact Us</h5>
//               <p>Email: contact@example.com</p>
//               <p>Phone: 123-456-7890</p>
//             </Col>
//             <Col md={4}>
//               <h5>Follow Us</h5>
//               <ul className="list-unstyled">
//                 <li>
//                   <a href="#">Twitter</a>
//                 </li>
//                 <li>
//                   <a href="#">Facebook</a>
//                 </li>
//                 <li>
//                   <a href="#">Instagram</a>
//                 </li>
//               </ul>
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <p className="text-center">&copy; {new Date().getFullYear()} Company Name</p>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     );
//   }

//   export default Footer;