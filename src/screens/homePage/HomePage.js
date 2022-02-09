import React from "react";
import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "../../elements/button/button";
import TextComponent from "../../elements/text/text";
import header_image from "../../assets/ilustrations/header_image.png";
import vector_icon from "../../assets/icons/vector_icon.png";
import benefits_image from "../../assets/ilustrations/benefits_image.png";
import ed_naughton_avatar from "../../assets/ilustrations/ed_naughton_avatar.png";

const HomePage = () => {
  return (
    <Container fluid id="rootSection">
      {/* --- HEADER SECTION --- */}
      <Row id="headerSection">
        <Col id="headerText" className="col-5">
          <TextComponent
            className="title"
            text="Get certified by the official project management body"
          />
          <TextComponent
            className="subtitle"
            text=" We provide certifications for project management professionals at
            every level. All our certification leels are thoroughly vetted
            before issuing. Our certifications are also trusted worldwide."
          />
          <Row>
            <Button className="btnLarge" text="Explore certifications" />
            <Button className="btnLarge" text="Help me choose" />
          </Row>
          <span id="scrollDown" onClick={() => console.log("skrollDown")}>
            Scroll down <Image fluid src={vector_icon}></Image>
          </span>
        </Col>

        <Col className="col-5">
          <Image fluid src={header_image} alt="header_image" />
        </Col>
      </Row>
      {/* --- GET TO KNOW US MORE --- */}
      <Row>
        <Col>
          <TextComponent className="title-m" text="Get to know us more" />
          <TextComponent
            className="subtitle"
            text="The mission and purpose of IPMA Ireland are to implement and maintain the IPMA® 4-Level Certification System in the Republic of Ireland.
"
          />
        </Col>
        <Col>
          <Row className="justify-content-end">
            <Col className="col-3 text-center">
              <TextComponent className="title" text="30+" />
              <TextComponent className="subtitle" text="Active years" />
            </Col>
            <Col className="col-3 text-center">
              <TextComponent className="title" text="10k+" />
              <TextComponent className="subtitle" text="Certified members" />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* --- BENEFITS SECTION --- */}
      <Row>
        <Col>
          <Image fluid src={benefits_image} alt="benefits_image" />
        </Col>
        <Col>
          <TextComponent
            className="title-m"
            text="Benefits of an IPMA certification"
          />
          <TextComponent
            className="subtitle"
            text="Organisations and business of today need personnel with solid project management competence. So, certified project managers know how to deliver with quality, faster and less expensively. The IPMA certification is performance based and provides standards by which project management performance can be measured."
          />
          <div id="messageBauble">
            <TextComponent
              className="subtitle"
              text="An IPMA Certification goes a long way in stablishing credibility, since you have participated in an internationally recognised certification programme."
            />
          </div>
          <div id="asideAvatar">
            <Image fluid src={ed_naughton_avatar} alt="ed_naughton_avatar" />
            <div id="avatarText">
              <TextComponent className="title-s" text="Ed Naugthon" />
              <TextComponent className="subtitle" text="CEO & Founder" />
            </div>
          </div>
        </Col>
      </Row>
      {/* --- PROJECT MENAGMENT CERTIFICATION LEVELS --- */}
      <Row id="projectMngSection">
        <Row>
          <TextComponent
            className="title-m"
            text="Project management certification levels"
          />
        </Row>
        <Row>
          <TextComponent
            className="subtitle"
            text="IPMA offers an international, competency-based, four level certification (4-L-C) scheme. In your own country, in your own language, at your own competence level. "
          />
        </Row>
      </Row>
    </Container>
  );
};
export default HomePage;
