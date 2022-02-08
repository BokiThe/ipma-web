import React from "react";
import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import TextComponent from "../../elements/text/text";
import header_image from "../../assets/ilustrations/header_image.png";


const HomePage = () => {
  return (
    <Container fluid id="rootSection">
      {/* --- HEADER SECTION --- */}
      <Row id="headerSection">
        <Col fluid className="col-5 justify-content-space-around">
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

          <button className="btnLarge">Explore certifications</button>
          <button className="btnLarge">Help me choose</button>
          <div>
            <a id="scrollDown" href="#">
              Scroll down 
            </a>
          </div>
        </Col>

        <Col className="col-5">
          <Image fluid src={header_image} alt="header_image" />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
