import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../text/text";
import "./levelCertification.css";

const LevelInfo = (props) => {
  return (
    <>
      <Row>
        <Col>
          <TextComponent className="title-s" text={props.title} />
        </Col>
        <Col
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
      <Row>
        <TextComponent className="subtitle" text={props.subtitle} />
      </Row>
    </>
  );
};
export default LevelInfo;
