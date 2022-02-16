import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../text/text";
import "./levelCertification.css";

const LevelInfo = (props) => {
  return (
    <Container fluid className={props.className}>
      <Row style={{ margin: "0" }}>
        <Col className="p-0 col-5">
          <TextComponent className="title-s" text={props.title} />
        </Col>
        <Col
          className="col-7"
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
      <Row className={props.subtitleClass}>{props.subtitle}</Row>
    </Container>
  );
};
export default LevelInfo;
