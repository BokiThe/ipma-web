import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../../elements/text/text";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import LevelInfo from "../../elements/levelCertification/levelInfo";
import vectorRed_icon from "../../assets/icons/vectorRed_icon.svg";
import vectorRedDown_icon from "../../assets/icons/vectorRedDown_icon.svg";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../../elements/text/text.css";
//TODO:: FIND SOLUTION FOR READ MORE READ LESS
const CertificationLevel = () => {
  const longText = `
  Pre-requisites: 3 years managing high-complexity programs, and 2 years managing moderate-to-high complexity programs, and 2 years managing moderate-to-high complexity projects.
  Typical job titles: Vice President, Client Manager, Operations VP, Senior Program Manager, Program Manager
  `;
  const [borderColor, setborderColor] = useState("#04151F");
  const ReadMore = () => {
    setborderColor("#ED3E3E");
    return <img src={vectorRedDown_icon} alt="vectorRedDown_image" />;
  };
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
                  <TextComponent className="title-s" text="If you are:" />
                </Col>
                <Col className="p-0 m-0">
                  <TextComponent className="title-s" text="We suggest:" />
                </Col>
              </Row>
              {/* expendable components */}
              <Row className="p-0 m-0">
                <Col
                  className="m-0"
                  style={{
                    borderLeft: ` 4px solid ${borderColor}`,
                    paddingLeft: "1%",
                  }}
                >
                  <TextComponent
                    className="subtitle"
                    text="An experienced senior manager in a project-oriented enterprise, a program manager, or a manager of project managers"
                  />
                </Col>
                <Col
                  className="m-0"
                  style={{
                    borderLeft: ` 4px solid ${borderColor}`,
                    paddingLeft: "1%",
                  }}
                >
                  <span>
                    Certified Project, Program, or Portfolio Director -{" "}
                  </span>
                  <a href="#" style={{ color: "#ED3E3E" }}>
                    IPMA Level A®
                  </a>
                  <br />
                  <ReactReadMoreReadLess
                    charLimit={150}
                    readMoreText={["More info", <ReadMore />]}
                    readLessText={["Less info", <ReadMore />]}
                    readMoreClassName="moreInfo"
                    readLessClassName="lessInfo"
                  >
                    {longText}
                  </ReactReadMoreReadLess>
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
