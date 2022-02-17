import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Link from "../../elements/text/link";
import IPMA_nav_logo from "../../assets/logos/IPMA_logo.svg";
import phone_nav_icon from "../../assets/icons/phone_nav_icon.svg";
import mail_nav_icon from "../../assets/icons/mail_nav_icon.svg";
import vector_icon from "../../assets/icons/vector_icon.svg";
import "../homePage/HomePage.css";

const NavBar = () => {
  return (
    <Container fluid className="p-5">
      <Row style={{ margin: "0", marginBottom: "25px" }}>
        <Col>
          <Link
            href="#"
            linkText={[<Image src={IPMA_nav_logo} alt="IPMA_nav_logo" />]}
          />
        </Col>
        <Col style={{ textAlign: "end" }}>
          <span
            style={{ padding: "5px 15px", borderRight: "1px solid #04151F" }}
          >
            <Link
              href="#"
              linkText={[<Image src={phone_nav_icon} alt="phone_nav_icon" />]}
            />
          </span>
          <span style={{ padding: "5px 15px" }}>
            <Link
              href="#"
              linkText={[<Image src={mail_nav_icon} alt="mail_nav_icon" />]}
            />
          </span>
        </Col>
      </Row>
      <hr style={{ opacity: "20%", color: "#04151F" }} />
      <Row>
        <Col>
          <Link
            className="cardLink"
            href="#"
            linkText={[
              "Certification",
              <Image src={vector_icon} alt="vector_icon" />,
            ]}
          />
        </Col>
        <Col>
          <Link
            className="cardLink"
            href="#"
            linkText={[
              "Re-Certification",
              <Image src={vector_icon} alt="vector_icon" />,
            ]}
          />
        </Col>
        <Col>
          <Link
            className="cardLink"
            href="#"
            linkText={[
              "Blog & News",
              <Image src={vector_icon} alt="vector_icon" />,
            ]}
          />
        </Col>
        <Col>
          <Link className="cardLink" href="#" linkText={["Assessors"]} />
        </Col>
        <Col>
          <Link className="cardLink" href="#" linkText={["Contact Us"]} />
        </Col>
      </Row>
    </Container>
  );
};
export default NavBar;
