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
import lock_image from "../../assets/ilustrations/lock_image.svg";
import coin_image from "../../assets/ilustrations/coin_image.svg";
import group_image from "../../assets/ilustrations/group_image.svg";
import skills_image from "../../assets/ilustrations/skills_image.svg";
import pexels_image from "../../assets/ilustrations/pexels_image.png";
import CardComponent from "../../elements/card/card";
import CardImgComponent from "../../elements/card/cardImg";

const HomePage = () => {
  return (
    <Container fluid id="rootSection">
      {/* --- HEADER SECTION --- */}
      <Row id="headerSection">
        <Col id="headerText" className="m-l-1">
          <TextComponent
            className="title-xl"
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
            <span id="scrollDown" onClick={() => console.log("skrollDown")}>
              Scroll down <Image fluid src={vector_icon}></Image>
            </span>
          </Row>
        </Col>

        <Col style={{ textAlign: "right" }} className="col-5">
          <Image fluid src={header_image} alt="header_image" />
        </Col>
      </Row>
      {/* --- GET TO KNOW US MORE --- */}
      <Row style={{ width: "100%", justifyContent: "space-between" }}>
        <Col className="col-5 p-0">
          <TextComponent className="title-l" text="Get to know us more" />
          <TextComponent
            className="subtitle"
            text="The mission and purpose of IPMA Ireland are to implement and maintain the IPMA® 4-Level Certification System in the Republic of Ireland.
"
          />
        </Col>
        <Col className="col-5 p-0">
          <Row className="justify-content-end">
            <Col className="col-3 text-center">
              <TextComponent className="title-xl" text="30+" />
              <TextComponent className="subtitle" text="Active years" />
            </Col>
            <Col className="col-3 text-center">
              <TextComponent className="title-xl" text="10k+" />
              <TextComponent className="subtitle" text="Certified members" />
            </Col>
            <Col className="col-3 text-center">
              <TextComponent className="title-xl" text="28k+" />
              <TextComponent className="subtitle" text="Re-Certified" />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* --- BENEFITS SECTION --- */}
      <Row>
        <Col>
          <Image src={benefits_image} alt="benefits_image" />
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
            className="title-l"
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
      {/* --- Level Section --- */}
      <Row>
        <Row className="CardSection">
          <Col className="CardBorder">
            <CardComponent
              className="CardL"
              title="IPMA Level A"
              subtitle="To possess this certification, you need to demonstrate that you possess the competences as described in the IPMA ICB4, continually and consistently applied these competences in a highly complex environment, taking full responsibility in a leading role."
              BtnText="Learn more"
            />
            <div className="borderRight"></div>
          </Col>

          <Col>
            <CardComponent
              className="CardL"
              title="IPMA Level B"
              subtitle="IPMA level B certification is a confirmation of competences at a senior level in projects, programmes and portfolios management. Level B certificate holders have demonstrated the competences described by the IPMA International Competence Baseline®, "
              BtnText="Learn more"
            />
          </Col>
        </Row>
        <Row className="CardSection">
          <Col className="CardBorder">
            <CardComponent
              className="CardL"
              title="IPMA Level C"
              subtitle="IPMA level C Certification is a confirmation of experience level in managing projects. Level C certificate holders have demonstrated that they possess the competences as described by the IPMA International Competence Baseline®."
              BtnText="Learn more"
            />
            <div className="borderRight"></div>
          </Col>
          <Col>
            <CardComponent
              className="CardL"
              title="IPMA Level D"
              subtitle="Achieving IPMA level D certification is a recognition of your knowledge about managing projects. To possess Level D certification, one needs to demonstrate the competences as described by the IPMA International Competence Baseline®."
              BtnText="Learn more"
            />
          </Col>
        </Row>
        <Row className="CardSection">
          <Col className="CardBorder">
            <CardComponent
              className="CardLast"
              title="Not sure what level to apply for?"
              subtitle="If you’re not sure what certification level to apply for, hit the button below to contact us so we can suggest an appropriate level based on your current work experience, knowledge level and overall competence."
              BtnText="Contact Us"
            />
            <div className="borderRight"></div>
          </Col>
          <Col>
            <CardComponent
              className="CardLast"
              title="Get recertified"
              subtitle="Certified project managers may apply for re-certification procedure. The conditions of re-certification procedure are project management activities, continuing education and professional development, also acquirement of project management experience and skills."
              BtnText="Learn more"
            />
          </Col>
        </Row>
      </Row>
      {/* --- BENEFITS CARD SECTION --- */}
      <Row id="benefitsHeader">
        <TextComponent
          className="title-l"
          text="Benefits of getting certified by the IPMA"
        />
      </Row>
      <Row id="benefitsCards">
        <Col className="CardBorder">
          <CardImgComponent
            className="CardM"
            imgClass="cardImg"
            src={lock_image}
            alt="lock_image"
            title="Establish credibility"
            subtitle="Establishes credibility, since you have participated in an internationally recognised certification programme that is thoroughly vetted"
          />
          <div className="borderRight1"></div>
        </Col>
        <Col className="CardBorder">
          <CardImgComponent
            imgClass="cardImg"
            src={coin_image}
            alt="coin_image"
            className="CardM"
            title="Higher rates"
            subtitle="Contributes to higher billing rate, because you have provided evidence of your competences, experience and expertise level"
          />
          <div className="borderRight1"></div>
        </Col>
        <Col className="CardBorder">
          <CardImgComponent
            className="CardM"
            imgClass="cardImg"
            src={group_image}
            alt="group_image"
            title="New clients"
            subtitle="Opens doors to new clients, since you can use your accreditation in your communication, and it can be verified in IPMA’s registers"
          />
          <div className="borderRight1"></div>
        </Col>
        <Col>
          <CardImgComponent
            className="CardM"
            imgClass="cardImg"
            src={skills_image}
            alt="skills_image"
            title="Prove competence"
            subtitle="You are assessed against an international standard, and your achievement will be recognized on IPMA International’s website
"
          />
        </Col>
      </Row>
      {/* --- ABOUT US SECTION--- */}
      <Row id="aboutSection">
        <Col>
          <Image src={pexels_image} alt="pexels_image" />
        </Col>
        <Col>
          <CardComponent
            id="cardAboutUs"
            className="CardL"
            title="About Us - IPMA Ireland"
            subtitle="The IPMA Ireland is the National Association for the administration of the IPMA® (International Project Management Association) four level certification system. There are at present in excess of 5000 certified IPMA® project professionals in Ireland. "
            BtnText="Learn more"
          />
        </Col>
      </Row>
      {/* --- FAQs SECTION --- */}
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default HomePage;
