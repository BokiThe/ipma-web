import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../../elements/text/text";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import LevelInfo from "../../elements/levelCertification/levelInfo";

const CertificationInfo = () => {
  return (
    <Container fluid className="p-0 m-0">
      {/* --- Header --- */}
      <Row className="p-0 mb-5 m-0 LevelHeader">
        <LevelHeader title="IPMA Certification info" href="#" />
      </Row>
      {/* --- WHAT is an IPMA certification --- */}
      <Row style={{ padding: "0 10%" }}>
        <LevelInfo
          className="LevelInfo"
          title="WHAT is an IPMA certification"
          subtitle={[
            <Col className="p-0 m-0">
              <TextComponent
                className="subtitle"
                text="Today organisations prefer performance-based credentials for their employees. Individual practitioners can stand out from the crowd with an advanced project management credential. Get the advanced Project credential you deserve and need — from IPMA-Ireland."
              />
              <TextComponent
                className="subtitle"
                text="The IPMA four-Level Certification (4-L-C) System is role-based, world leading, and professionally demanding. There are more than 300,000 IPMA certified professionals worldwide."
              />
              <TextComponent
                className="subtitle"
                text="These advanced certifications include:"
              />
              <ul style={{ listStyleType: "disc", paddingLeft: "3%" }}>
                <li className="subtitle">
                  IPMA Level A® (Certified Project Director)
                </li>
                <li className="subtitle">
                  IPMA Level B® (Certified Senior Project Manager){" "}
                </li>
                <li className="subtitle">
                  IPMA Level C® (Certified Project Manager).{" "}
                </li>
              </ul>
              <TextComponent
                className="subtitle"
                text="These certifications are especially useful as the demand for individuals with demonstrated Project competence is recognised by executives, strategic leaders, managers, and stakeholders."
              />
              <TextComponent
                className="subtitle"
                text="The remaining certificants are certified at "
              />
              <ul style={{ listStyleType: "disc", paddingLeft: "3%" }}>
                <li className="subtitle">
                  IPMA Level D® (Certified Project Management Associate).
                </li>
              </ul>

              <TextComponent
                className="subtitle"
                text="This designation, which demonstrates the individual's ability to understand the basics of project management, is similar to the exam-oriented, knowledge-based certifications of other major Project Management associations. For many, Level D is the first step towards a professional project or program manager role."
              />
              <TextComponent
                className="subtitle"
                text="IPMA-Ire understands the importance of impartiality in carrying out our certification activities. We make every reasonable effort to avoid both real and potential conflicts of interest to ensure the fairness and objectivity of our certification activities."
              />
              <TextComponent
                className="subtitle"
                text="IPMA's role-based suite of professional certifications in the 4-L-C system are exclusively available in the Ireland through IPMA-Ire."
              />
            </Col>,
          ]}
        />
      </Row>
      {/* --- WHO Is Interested in Certification? --- */}
      <Row style={{ padding: "0 10%" }}>
        <LevelInfo
          className="LevelInfo"
          title="WHO Is Interested in Certification?"
          subtitle={[
            <Col className="p-0 m-0">
              <TextComponent
                className="subtitle"
                text="Practicing Project, Program, and Portfolio Managers who want to demonstrate their commitment to professionalism are interested in advanced certifications. Enterprise and Government Executives and Sponsors who want competent individuals who can deliver business results are very interested."
              />
              <TextComponent
                className="subtitle"
                text="Project Team members who want to stand out from the crowd are interested in demonstrating their understanding of project management to complement their role-specific talents. Corporate trainers who want to provide real value to their clients are interested. "
              />
              <TextComponent
                className="subtitle"
                text="Professional training organisations that specialize in project, program, and portfolio management are interested. College and University leaders who want assurance that their curriculum is relevant are interested."
              />
            </Col>,
          ]}
        />
      </Row>
      {/* ---  --- */}
      <Row style={{ padding: "0 10%" }}>
        <LevelInfo
          className="LevelInfo"
          title="WHY Should You Certify?"
          subtitle={[
            <Col className="p-0 m-0">
              <TextComponent
                text={[
                  <span className="title-xs">
                    Because Certification Verifies Value!
                  </span>,
                  <span className="subtitle">
                    {" "}
                    - Certification in your chosen field verifies the value that
                    you provide to your organisation. This is especially true of
                    the advanced IPMA certifications that we offer.
                  </span>,
                ]}
              />
              <TextComponent
                className="subtitle"
                text=" Authentication of your professional qualifications tells your employer that you have been professionally evaluated and found competent. Savvy businesses rely heavily on advanced certifications of individuals for hiring and placement."
              />
              <TextComponent
                className="subtitle"
                text="Attaining an advanced certification will be a landmark in your career. If you are successful, you are entitled to use the certification mark on your business cards and correspondence. Peers, subordinates, and supervisors will acknowledge your milestone. You can be proud that you achieved a status that few people qualify to pursue, and even fewer achieve."
              />
            </Col>,
          ]}
        />
      </Row>
    </Container>
  );
};
export default CertificationInfo;
