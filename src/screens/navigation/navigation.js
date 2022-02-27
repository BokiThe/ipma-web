import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import IPMA_nav_logo from "../../assets/logos/IPMA_logo.svg";
import phone_nav_icon from "../../assets/icons/phone_nav_icon.svg";
import mail_nav_icon from "../../assets/icons/mail_nav_icon.svg";
import ModalNav from "./modalNav";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "../homePage/HomePage.css";
import "./navigation.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container fluid className="p-5">
      <Row style={{ margin: "0", marginBottom: "25px" }} key={1}>
        <Col className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12" key={1}>
          <Link to="/">
            <Image src={IPMA_nav_logo} alt="IPMA_nav_logo" />
          </Link>
        </Col>
        <Col
          className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12"
          style={{ textAlign: "end" }}
          key={2}
        >
          <div className="navIcons m-0 p-0">
            <span
              key={1}
              style={{ padding: "5px 15px", borderRight: "1px solid #04151F" }}
            >
              <ModalNav
                key={1}
                text={[<Image src={phone_nav_icon} alt="phone_nav_icon" />]}
              />
            </span>
            <span style={{ padding: "5px 15px" }} key={2}>
              <ModalNav
                key={2}
                text={[<Image src={mail_nav_icon} alt="mail_nav_icon" />]}
              />
            </span>
          </div>
        </Col>
      </Row>
      <hr style={{ opacity: "20%", color: "#04151F" }} />
      <Row className="p-0 m-0">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Certification" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="navLink" to="/certificationLevels">
                    About Certification Levels
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navLink" to="/certificationInfo">
                    Certification Info
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navLink" to="/certificationA">
                    Level A Certification
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navLink" to="/certificationB">
                    Level B Certification
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navLink" to="/certificationC">
                    Level C Certification
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navLink" to="/certificationD">
                    Level D Certification
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Re - Certification "
                id="collasible-nav-dropdown"
              >
                <Dropdown.Item>
                  <Link className="navLink" to="/reCertificationAC">
                    Re - Certification A - C
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="navLink" to="/reCertificationD">
                    Re - Certification D
                  </Link>
                </Dropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog & Media" id="collasible-nav-dropdown">
                <Dropdown.Item>
                  <Link className="navLink" to="/aboutUs">
                    About Us
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="navLink" to="/latestNews">
                    Latest News
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="navLink" to="/latestBlogs">
                    Latest Blogs
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="navLink" to="/individualList">
                    Individual List
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="navLink" to="/costumers">
                    Costumers
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="navLink" to="/organisationStructure">
                    Organisation Structure
                  </Link>
                </Dropdown.Item>
              </NavDropdown>
              <NavDropdown title="Assessors" id="collasible-nav-dropdown">
                <Dropdown.Item>
                  <Link className="navLink" to="/assessors">
                    Assessors
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="navLink" to="/assessorCriteria">
                    Assessors Criteria
                  </Link>
                </Dropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">
                <Link className="dropdown-toggle" to="/contactUs">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};
export default NavBar;
