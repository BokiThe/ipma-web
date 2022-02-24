import React, { useState } from "react";
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

const NavBar = () => {
  return (
    <Container fluid className="p-5">
      <Row style={{ margin: "0", marginBottom: "25px" }} key={1}>
        <Col key={1}>
          <Link to="/">
            <Image src={IPMA_nav_logo} alt="IPMA_nav_logo" />
          </Link>
        </Col>
        <Col style={{ textAlign: "end" }} key={2}>
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
        </Col>
      </Row>
      <hr style={{ opacity: "20%", color: "#04151F" }} />
      <Row key={2}>
        <Col key={1}>
          <Dropdown>
            <Dropdown.Toggle>Certification</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link className="navLink" to="/certificationLevels">
                  About Certification Levels
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="navLink" to="/certificationInfo">
                  Certification Info
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="navLink" to="/certificationA">
                  Level A Certification
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="navLink" to="/certificationB">
                  Level B Certification
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="navLink" to="/certificationC">
                  Level C Certification
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="navLink" to="/certificationD">
                  Level D Certification
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col key={2}>
          <Dropdown>
            <Dropdown.Toggle>Re - Certification</Dropdown.Toggle>

            <Dropdown.Menu>
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
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col key={3}>
          <Dropdown>
            <Dropdown.Toggle>Blog & Media</Dropdown.Toggle>

            <Dropdown.Menu>
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
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col key={4}>
          <Dropdown>
            <Dropdown.Toggle>Assessors</Dropdown.Toggle>

            <Dropdown.Menu>
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
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col key={5}>
          <Link className="cardLink" to="/contactUs">
            Contact Us
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default NavBar;
