import React from "react";
import '../Components/MultiNav1.css';
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
export const MultiNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <li class="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">Home<i class="plus"></i></a>
                  <ul class="sub-menu">
                      <li class="menu-item"><a href="#">Email</a></li>
                      <li class="menu-item"><a href="#">Service No.</a></li>
                      <li class="menu-item"><a href="#">Text</a></li>
                      <li class="menu-item"><a href="#">Telephonic</a></li>
                  </ul>
               </li>
               <li class="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">Services<i class="plus"></i></a>
                  <ul class="sub-menu">
                      <li class="menu-item"><a href="#">Email</a></li>
                      <li class="menu-item"><a href="#">Service No.</a></li>
                      <li class="menu-item"><a href="#">Text</a></li>
                      <li class="menu-item"><a href="#">Telephonic</a></li>
                  </ul>
               </li>
               <li class="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">About Us<i class="plus"></i></a>
                  <ul class="sub-menu">
                      <li class="menu-item"><a href="#">Email</a></li>
                      <li class="menu-item"><a href="#">Service No.</a></li>
                      <li class="menu-item"><a href="#">Text</a></li>
                      <li class="menu-item"><a href="#">Telephonic</a></li>
                  </ul>
               </li>
        
          <li class="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">Contact<i class="plus"></i></a>
                  <ul class="sub-menu">
                      <li class="menu-item"><a href="#">Email</a></li>
                      <li class="menu-item"><a href="#">Service No.</a></li>
                      <li class="menu-item"><a href="#">Text</a></li>
                      <li class="menu-item"><a href="#">Telephonic</a></li>
                  </ul>
            </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
