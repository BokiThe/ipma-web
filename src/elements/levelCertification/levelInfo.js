import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../text/text";
import "./levelCertification.css";

const LevelInfo = (props) => {
  return (
    <Container fluid className={props.className}>
      <Row className="p-0 m-0 justify-content-between">
        <Col className="p-0 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
          <TextComponent className="title-s" text={props.title} />
        </Col>
        <Col
          className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 p-0"
          style={{
            alignItems: "center",
            display: "grid",
            margin: "0",
            padding: "0",
          }}
        >
          <div style={{ height: "2px", background: "#ED3E3E" }}></div>
        </Col>
      </Row>
      <Row className="m-0 p-0">{props.subtitle}</Row>
    </Container>
  );
};
export default LevelInfo;
