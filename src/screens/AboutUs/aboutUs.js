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
import vector_icon from "../../assets/icons/vector_icon.svg";
import Button from "../../elements/button/button";

const AboutUs = () => {
  return (
    <Container fluid className="p-0 m-0">
      {/* HEADER */}
      <Row className="p-0 m-0 LevelHeader">
        <LevelHeader title="About us" href="#" />
      </Row>
      {/* --- IPMA Ireland --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="IPMA Ireland"
          subtitle={[
            <TextComponent
              className="subtitle"
              text="IPMA-Ire is the Irish certification body of IPMA®, the International Project Management Association.  "
            />,
            <TextComponent
              className="subtitle"
              text="Enhancement of project management benefits project practitioners, your respective organizations, and the community or customers you serve. IPMA-Ire is working at the forefront of our discipline to push practices, procedures, and techniques to their best use. "
            />,
            <TextComponent
              className="subtitle"
              text=" IPMA-Ire offers a suite of Project and Program Manager certifications, beginning with the Knowledge-based IPMA Level D, and continuing to Competence based certifications of Project Managers, Senior Project Managers, and Project Directors.  "
            />,
            <TextComponent
              className="subtitle"
              text="IPMA® is a federation of national project management associations, promoting global standards in competence-based certification, while retaining local control and sensitivity to nation-specific customs and standards. As a result, our Multi-Level Competency Based Certifications are recognized in over 70 nations around the world."
            />,
          ]}
        />
      </Row>
      {/* --- IPMA --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="IPMA Ireland"
          subtitle={[
            <TextComponent
              className="subtitle"
              text="IPMA® is the World's first project management association and was  founded in 1965. IPMA® is a federation of independent National Member Associations, representing over 70 countries. Our unique federation structure allows us to collaborate as a true Global organization, while serving local needs.  "
            />,
            <TextComponent
              className="subtitle"
              text={[
                "Fact: IPMA®'s prior name was INTERNET, some 16 years before the connected World decided our name was a 'keeper.'",
              ]}
            />,
          ]}
        />
      </Row>
      {/* --- IPMA HISTRY --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="History timeline"
          subtitle={[
            <div
              style={{
                position: "relative",
                width: "100%",
                padding: "0 0 0 5%",
                margin: "20px 0",
              }}
            >
              <VerticalTimeline
                layout={"1-column-left"}
                style={{ padding: "0", margin: "0" }}
              >
                {/* STEP  1 */}
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      1999
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="IPMA® National Association Member"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2000
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="IPMA® Agreement signed"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2001
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="Project Management Competence Baseline published
                            "
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2002
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="IPMA® Certification system launched in Ireland"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2002
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="1st IPMA® Certified Professionals (Level B, Level C, Level D)"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2004
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="1st 4-L-C System Validation by IPMA"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2005
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="IPMA® Executive Board Membership"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2005
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="1st Certified Projects Director IPMA® Level A"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2009
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="World Leaders Dublin Convention"
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  position={"right"}
                  contentArrowStyle={{
                    background: "transparent",
                    display: "none",
                  }}
                  contentStyle={{
                    background: "transparent",
                    color: "black",
                    boxShadow: "none",
                    margin: "0",
                    padding: "15px 0 0 10%",
                  }}
                  iconStyle={{
                    width: "71.11px",
                    height: "71.11px",
                    background: "white",
                    boxShadow: "0px 0px 3px 5px rgba(4,21,31,0.1)",
                    left: "-16px",
                    border: "1.5px solid #04151F",
                  }}
                  icon={[
                    <span
                      style={{
                        alignSelf: "center",
                        position: "relative",
                        top: "32%",
                        left: "25%",
                        fontSize: "16px",
                      }}
                    >
                      2010
                    </span>,
                  ]}
                >
                  <Row className="p-0 m-0">
                    <Col className="p-0 m-0">
                      <TextComponent
                        className="vertical-timeline-element-title title-l"
                        text="PMI Certification established"
                      />
                    </Col>
                    <Col className="text-end col-1 p-0 m-0">
                      <Button
                        className="btnTimeLine"
                        text={[
                          <img
                            className="vector"
                            src={vector_icon}
                            alt="vector_icon"
                          />,
                        ]}
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
export default AboutUs;
