// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from './logo.png';
// import Nav from 'react-bootstrap/Nav';

// const NavBar = () => {
//   return (
//     <div>

//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt=""
//               src={logo}
//               width="100"
//               height="50"
//               className="d-inline-block align-top"
//             />{' '}

//           </Navbar.Brand>

//           <Nav className="justify-content-end" activeKey="/home">
//         <Nav.Item>
//           <Nav.Link href="/home">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/home">Bus Tracker</Nav.Link>
//         </Nav.Item>


//       </Nav>
//         </Container>
//       </Navbar>

//     </div>
//   )
// }

// export default NavBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';
import { Link } from 'react-router-dom';



function NavBar() {
    return ( <
        Navbar className = "fixed-top bg-light"
        bg = "dark"
        lg sm variant = "dark"
        style = {
            { height: '75px' }
        } >
        <
        Container >
        <
        Navbar.Brand href = "#home" >
        <
        img alt = ""
        src = { logo }
        width = "130"
        height = "80"
        className = "d-inline-block align-top p-2" / >

        <
        /Navbar.Brand> <Nav className = "justify-content-end" > <
        Nav.Link as = { Link }
        to = "/" > Home < /Nav.Link> <
        Nav.Link as = { Link }
        to = "/map" > Bus Tracker < /Nav.Link>

        <
        Nav.Link as = { Link }
        to = "/admin" > Admin < /Nav.Link> <
        /Nav> <
        /Container>  <
        /Navbar>
    );
}

export default NavBar;