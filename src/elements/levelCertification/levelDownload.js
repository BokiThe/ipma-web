import React from "react";
import document_icon from "../../assets/icons/document_icon.svg";
import "../text/text.css";
import "./levelCertification.css";
import TextComponent from "../text/text";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const LevelDownload = (props) => {
  return (
    <Row className="align-items-center m-0 p-0">
      <Col className="p-0 m-0">
        <p className="subtitle">
          <span style={{ marginRight: "13px" }}>
            <img src={document_icon} alt="document_icon" />
          </span>{" "}
          {props.dwldText} <span style={{ color: "#ED3E3E" }}>***</span>{" "}
        </p>
      </Col>
      <Col className="text-end p-0 m-0">
        <a
          style={{ textDecoration: "none", color: "#ED3E3E" }}
          href={props.href}
          download
        >
          Download
        </a>
      </Col>
      <hr />
    </Row>
  );
};

export default LevelDownload;
