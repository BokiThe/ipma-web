import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import LevelInfo from "../../elements/levelCertification/levelInfo";
import TextComponent from "../../elements/text/text";

const AssessorCriteria = () => {
  return (
    <Container fluid className="p-0 m-0">
      {/* HEADER */}
      <Row className="p-0 m-0">
        <LevelHeader
          title="Assessors criteria"
          subtitle="IPMA Ireland will assess the suitability of the potential Assessors and, if they meet the criteria, will invite them to initial Assessor training."
          href="#"
        />
      </Row>
      {/* --- APPROVAL CRITERIA ---  */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Assessor approval criteria"
          subtitle={[
            <TextComponent
              className="subtitle"
              text="To become an IPMA 4-L-C System Assessor, the individual will start as a National Probationary Assessor and when approved, will continue to a National Co-Assessor. After further approval by the IPMA Ireland the individual may be advanced to National Lead Assessor. "
            />,
            <TextComponent
              className="subtitle"
              text="For the IPMA 4-L-C System, the types of Assessors are: 1. International Certification Advisor – ICA; 2. National First Assessor – NFA; 3. National Lead Assessor – NLA; 4. National Co-Assessor – NCA; and 5. National Probationary Assessor – NPA "
            />,
            <TextComponent
              className="subtitle"
              text=" Individuals interested in becoming an Assessor should apply to IPMA Ireland with the all of the information listed below. IPMA Ireland will assess the suitability of the potential Assessors and, if they meet the criteria, will invite them to initial Assessor training."
            />,
          ]}
        />
      </Row>
      {/* Documents for application */}

      <Row>
        <LevelInfo
          className="LevelInfo"
          title="Documents for application"
          subtitle={[
            <div style={{ padding: "0 0 0 5%" }}>
              <VerticalTimeline
                layout={"1-column-left"}
                style={{ padding: "0 20%", margin: "0" }}
              >
                <VerticalTimelineElement
                  position={"right"}
                  className="vertical-timeline-element"
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    margin: "0 10%",
                    boxShadow: "none",
                    padding: "15px 0 0 5%",
                  }}
                  iconStyle={{
                    background: "white",
                    textAlign: "center",
                    border: "1px solid #ED3E3E",
                    boxShadow: "0px 0px 3px 5px rgba(237,62,62,0.1)",
                    left: "0",
                  }}
                  icon={
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "15%",

                        fontSize: "16px",
                      }}
                    >
                      1.1
                    </span>
                  }
                >
                  <Row className="p-0 m-0">
                    <Col>
                      <TextComponent
                        className="vertical-timeline-element-title subtitle"
                        text="Detailed Curriculum Vitae [CV]"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  className="vertical-timeline-element"
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    margin: "0 10%",
                    boxShadow: "none",
                    padding: "15px 0 0 5%",
                  }}
                  iconStyle={{
                    background: "white",
                    textAlign: "center",
                    border: "1px solid #ED3E3E",
                    boxShadow: "0px 0px 3px 5px rgba(237,62,62,0.1)",
                    left: "0",
                  }}
                  icon={
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "15%",

                        fontSize: "16px",
                      }}
                    >
                      1.2
                    </span>
                  }
                >
                  <Row className="p-0 m-0">
                    <Col>
                      <TextComponent
                        className="vertical-timeline-element-title subtitle"
                        text="Valid IPMA Certificate
                      "
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  className="vertical-timeline-element"
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    margin: "0 10%",
                    boxShadow: "none",
                    padding: "15px 0 0 5%",
                  }}
                  iconStyle={{
                    background: "white",
                    textAlign: "center",
                    border: "1px solid #ED3E3E",
                    boxShadow: "0px 0px 3px 5px rgba(237,62,62,0.1)",
                    left: "0",
                  }}
                  icon={
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "15%",

                        fontSize: "16px",
                      }}
                    >
                      1.3
                    </span>
                  }
                >
                  <Row className="p-0 m-0">
                    <Col>
                      <TextComponent
                        className="vertical-timeline-element-title subtitle"
                        text="Experience in the domains of project, programme and/or portfolio management
                      "
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  className="vertical-timeline-element"
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    margin: "0 10%",
                    boxShadow: "none",
                    padding: "15px 0 0 5%",
                  }}
                  iconStyle={{
                    background: "white",
                    textAlign: "center",
                    border: "1px solid #ED3E3E",
                    boxShadow: "0px 0px 3px 5px rgba(237,62,62,0.1)",
                    left: "0",
                  }}
                  icon={
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "15%",

                        fontSize: "16px",
                      }}
                    >
                      1.4
                    </span>
                  }
                >
                  <Row className="p-0 m-0">
                    <Col>
                      <TextComponent
                        className="vertical-timeline-element-title subtitle"
                        text="Documentation of their commitment to becoming an Assessor
                      "
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  className="vertical-timeline-element"
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    margin: "0 10%",
                    boxShadow: "none",
                    padding: "15px 0 0 5%",
                  }}
                  iconStyle={{
                    background: "white",
                    textAlign: "center",
                    border: "1px solid #ED3E3E",
                    boxShadow: "0px 0px 3px 5px rgba(237,62,62,0.1)",
                    left: "0",
                  }}
                  icon={
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "15%",

                        fontSize: "16px",
                      }}
                    >
                      1.5
                    </span>
                  }
                >
                  <Row className="p-0 m-0">
                    <Col>
                      <TextComponent
                        className="vertical-timeline-element-title subtitle"
                        text="Additional evidence of their suitability as needed;
                      "
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  className="vertical-timeline-element"
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    margin: "0 10%",
                    boxShadow: "none",
                    padding: "15px 0 0 5%",
                  }}
                  iconStyle={{
                    background: "white",
                    textAlign: "center",
                    border: "1px solid #ED3E3E",
                    boxShadow: "0px 0px 3px 5px rgba(237,62,62,0.1)",
                    left: "0",
                  }}
                  icon={
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "15%",

                        fontSize: "16px",
                      }}
                    >
                      1.6
                    </span>
                  }
                >
                  <Row className="p-0 m-0">
                    <Col>
                      <TextComponent
                        className="vertical-timeline-element-title subtitle"
                        text="Two referees to validate the information provided.
                      "
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>,
          ]}
        />
      </Row>
    </Container>
  );
};
export default AssessorCriteria;
