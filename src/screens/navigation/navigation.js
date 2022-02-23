import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Link from "../../elements/text/link";
import IPMA_nav_logo from "../../assets/logos/IPMA_logo.svg";
import phone_nav_icon from "../../assets/icons/phone_nav_icon.svg";
import mail_nav_icon from "../../assets/icons/mail_nav_icon.svg";
import vector_icon from "../../assets/icons/vector_icon.svg";
import ModalNav from "./modalNav";
import "../homePage/HomePage.css";

const NavBar = () => {
  return (
    <Container fluid className="p-5">
      <Row style={{ margin: "0", marginBottom: "25px" }} key={1}>
        <Col key={1}>
          <Link
            href="#"
            linkText={[<Image src={IPMA_nav_logo} alt="IPMA_nav_logo" />]}
          />
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
          <Link
            key={1}
            className="cardLink"
            href="#"
            linkText={[
              "Certification",
              <Image src={vector_icon} alt="vector_icon" />,
            ]}
          />
        </Col>
        <Col key={2}>
          <Link
            key={2}
            className="cardLink"
            href="#"
            linkText={[
              "Re-Certification",
              <Image src={vector_icon} alt="vector_icon" />,
            ]}
          />
        </Col>
        <Col key={3}>
          <Link
            key={3}
            className="cardLink"
            href="#"
            linkText={[
              "Blog & News",
              <Image src={vector_icon} alt="vector_icon" />,
            ]}
          />
        </Col>
        <Col key={4}>
          <Link className="cardLink" href="#" linkText={["Assessors"]} key={4}/>
        </Col>
        <Col key={5}>
          <Link className="cardLink" href="#" linkText={["Contact Us"]} key={5} />
        </Col>
      </Row>
    </Container>
  );
};
export default NavBar;
