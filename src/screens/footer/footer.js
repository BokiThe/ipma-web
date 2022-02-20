import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardContactComponent from "../../elements/card/cardContact";
import CardUsfulLinks from "../../elements/card/cardUsfulLinks";
import CardSubscribe from "../../elements/card/cardSubscribe";
import CardFolowUs from "../../elements/card/cardFolowUs";
import marker_icon from "../../assets/icons/marker_icon.svg";
import phone_icon from "../../assets/icons/phone_icon.svg";
import mail_icon from "../../assets/icons/mail_icon.svg";
import "./footer.css";

const Footer = () => {
  return (
    <Container fluid className=" p-5 m-0">
      <Row className="m-0 p-0">
        <Col className="col-3  p-0 m-0">
          <CardContactComponent
            className="blogCard"
            title="Contact info"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nisi amet in add maklff pellentesque. Imperdiet ac amet"
            srcIcon1={marker_icon}
            altIcon1="marker_icon"
            contactInfo1="Ave 14th street, Old town road, San Francisco, California, USA 1326"
            srcIcon2={phone_icon}
            altIcon2="phone_icon"
            contactInfo2="+1 267 277 [6240]"
            srcIcon3={mail_icon}
            altIcon3="mail_icon"
            contactInfo3="Support@ipmaireland.con"
          />
        </Col>
        <Col className="col-2 p-0 m-0">
          <CardUsfulLinks
            className="blogCard"
            title="Usful links"
            cardHref1="#"
            cardText1="About"
            cardHref2="#"
            cardText2="Certification"
            cardHref3="#"
            cardText3="Re-Certification"
            cardHref4="#"
            cardText4="Blog-posts"
            cardHref5="#"
            cardText5="Assessors"
          />
        </Col>
        <Col className="col-4 p-0 m-0">
          <CardSubscribe
            classNam="blogCard"
            title="Subscribe to email newsletter"
          />
        </Col>
        <Col className="col-3 p-0 m-0 ">
          <CardFolowUs
            className="blogCard"
            title="Follow us"
            iconHrefFB="#"
            iconHrefTW="#"
            iconHrefLN="#"
            iconHrefYT="#"
            cardHref1="#"
            cardText1="Privacy policy"
            cardHref2="#"
            cardText2="Cookie settings"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
