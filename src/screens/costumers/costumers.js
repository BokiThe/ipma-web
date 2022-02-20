import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../../elements/text/text";
import LevelHeader from "../../elements/levelCertification/levelHeader";
import LevelInfo from "../../elements/levelCertification/levelInfo";
import privateCostumer1_logo from "../../assets/logos/privateCostumer1_logo.svg";
import privateCostumer2_logo from "../../assets/logos/privateCostumer2_logo.svg";
import privateCostumer3_logo from "../../assets/logos/privateCostumer3_logo.svg";
import privateCostumer4_logo from "../../assets/logos/privateCostumer4_logo.svg";
import privateCostumer5_logo from "../../assets/logos/privateCostumer5_logo.svg";
import publicCostumer1_logo from "../../assets/logos/publicCostumer1_logo.png";
import publicCostumer2_logo from "../../assets/logos/publicCostumer2_logo.png";
import publicCostumer3_logo from "../../assets/logos/publicCostumer3_logo.svg";

const Costumers = () => {
  return (
    <Container fluid>
      {/* --- HEADER -- */}
      <Row className="m-0 mb-5">
        <LevelHeader title="IPMA Ireland Costumers" href="#" />
      </Row>
      {/* --- INFO SECTION --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="IPMA Ireland customers"
          subtitle={[
            <Col className="p-0">
              <TextComponent
                className="subtitle"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nisi amet in pellentesque. Imperdiet ac amet arcu lectus in sodales tristique varius libero. Consectetur molestie turpis quis lorem rhoncus u lectus in sodales tristique varius libero rem rhoncus u lectus in sodales tristique varius libero wem rhoncus u lectus in sodales."
              />
            </Col>,
          ]}
        />
      </Row>
      {/* --- PRIVATE SECTOR COSTUMERS --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="IPMA Ireland customers"
          subtitle={[
            <Row className="p-0 m-0">
              <Col>
                <img src={privateCostumer1_logo} alt="privateCostumer1_logo" />
              </Col>
              <Col>
                <img src={privateCostumer2_logo} alt="privateCostumer2_logo" />
              </Col>
              <Col>
                <img src={privateCostumer3_logo} alt="privateCostumer3_logo" />
              </Col>
              <Col>
                <img src={privateCostumer4_logo} alt="privateCostumer4_logo" />
              </Col>
              <Col>
                <img src={privateCostumer5_logo} alt="privateCostumer5_logo" />
              </Col>
            </Row>,
          ]}
        />
      </Row>
      {/* --- PUBLIC SECTOR COSTUMERS --- */}
      <Row>
        <LevelInfo
          className="LevelInfo"
          title="IPMA Ireland customers"
          subtitle={[
            <Row className="p-0 m-0">
              <Col>
                <img src={publicCostumer1_logo} alt="publicCostumer1_logo" />
              </Col>
              <Col>
                <img src={publicCostumer2_logo} alt="publicCostumer2_logo" />
              </Col>
              <Col>
                <img src={publicCostumer3_logo} alt="publicCostumer3_logo" />
              </Col>
              <Col>
                <img src={privateCostumer1_logo} alt="privateCostumer1_logo" />
              </Col>
              <Col>
                <img src={privateCostumer5_logo} alt="privateCostumer5_logo" />
              </Col>
            </Row>,
          ]}
        />
      </Row>
    </Container>
  );
};
export default Costumers;
