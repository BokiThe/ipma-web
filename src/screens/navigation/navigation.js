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
    <Container fluid className="mt-3">
      <Row style={{ height: "10%" }}>
        <Col className="col-10">
          <Link
            href="#"
            linkText={[<Image src={IPMA_nav_logo} alt="IPMA_nav_logo" />]}
          />
        </Col>
        <Col className="col-2">
          <Row className="justify-content-end">
            <div
              className="CardBorder align-items-right"
              style={{ width: "30%" }}
            >
              <Link
                href="#"
                linkText={[<Image src={phone_nav_icon} alt="phone_nav_icon" />]}
              />
              <div
                className="borderRight"
                style={{
                  height: "50%",
                  top: "25%",
                  backgroundColor: "#04151F",
                  opacity: "40%",
                }}
              ></div>
            </div>
            <div style={{ width: "30%", paddingLeft: "5px" }}>
              <Link
                href="#"
                linkText={[<Image src={mail_nav_icon} alt="mail_nav_icon" />]}
              />
            </div>
          </Row>
        </Col>
      </Row>
      <hr style={{ opacity: "40%", color: "#04151F" }} />
      <Row>
        <Link
          className="cardLink"
          href="#"
          linkText={[
            "Certification",
            <Image src={vector_icon} alt="vector_icon" />,
          ]}
        />
      </Row>
    </Container>
  );
};
export default NavBar;
