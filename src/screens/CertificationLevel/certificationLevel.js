import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../../elements/text/text";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import LevelInfo from "../../elements/levelCertification/levelInfo";

const CertificationLevel = () => {
  return (
    <Container fluid>
      {/* --- Header --- */}
      <Row>
        <LevelHeader title="Certification levels" href="#" />
      </Row>
      {/* --- WHAT Certification Level Is Right for You? --- */}
      <Row style={{ padding: "0 5%" }}>
        <LevelInfo
          className="LevelInfo"
          title="WHAT Certification Level Is Right for You?"
          subtitle={[
            <Col className="p-0 m-0">
              <TextComponent
                className="subtitle"
                text="The IPMA four Level Certification (4-L-C) system includes advanced, performance-based certifications for experienced managers as well as an entry level, knowledge-based certification for newcomers. Best of all, you can enter the system based on your current level."
              />
              <TextComponent
                className="subtitle"
                text="The IPMA four Level Certification (4-L-C) system includes advanced, performance-based certifications for experienced managers as well as an entry level, knowledge-based certification for newcomers. Best of all, you can enter the system based on your current level."
              />
              <Row className="p-0 m-0">
                <Col className="p-0 m-0">
                  <TextComponent className="title-s" text="TheIf you are:" />
                </Col>
                <Col className="p-0 m-0">
                  <TextComponent className="title-s" text="We suggest:" />
                </Col>
              </Row>
              {/* expendable components */}
              <Row className="p-0 m-0">
                <Col
                  className="m-0"
                  style={{ borderLeft: "4px solid #04151F", paddingLeft: "1%" }}
                >
                  <TextComponent
                    className="subtitle"
                    text="An experienced senior manager in a project-oriented enterprise, a program manager, or a manager of project managers"
                  />
                </Col>
                <Col
                  className="m-0"
                  style={{ borderLeft: "4px solid #04151F", paddingLeft: "1%" }}
                >
                  <TextComponent
                    className="subtitle"
                    text="An experienced senior manager in a project-oriented enterprise, a program manager, or a manager of project managers"
                  />
                </Col>
              </Row>
            </Col>,
          ]}
        />
      </Row>
    </Container>
  );
};
export default CertificationLevel;
