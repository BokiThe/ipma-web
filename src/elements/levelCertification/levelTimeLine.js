import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Button from "../button/button";
import vector_icon from "../../assets/icons/vector_icon.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../text/text";
import "./levelCertification.css";
import vectorRed_icon from "../../assets/icons/vectorRed_icon.svg";

const LevelVerticalTimeline = (props) => {
  const handleShow = (e) => {
    e.preventDefault();
    const shownDiv = document.getElementById("toShow");
    const icon = document.querySelector(".vertical-timeline-element-icon");
    const title = document.querySelector(".vertical-timeline-element-title");
    const vector = document.querySelector(".vector");
    if (shownDiv.classList.contains("hide")) {
      shownDiv.classList.remove("hide");
      shownDiv.setAttribute("class", "show");
      icon.setAttribute(
        "style",
        "border: 1.5px solid #ED3E3E; box-shadow: 0px 0px 3px 5px rgba(237,62,62,0.1); background:white; width: 71.11px; height: 71.11px; left: -16px;"
      );
      title.setAttribute("style", "color: #ED3E3E;");
      vector.setAttribute("src", vectorRed_icon);
    } else {
      shownDiv.classList.remove("show");
      shownDiv.setAttribute("class", "hide");
      icon.setAttribute(
        "style",
        "width: 71.11px;height: 71.11px; background: white;box-shadow: 0px 0px 3px 5px rgba(4,21,31,0.1);left: -16px; border: 1.5px solid #04151F"
      );
      title.setAttribute("style", "color: #04151F;");
      vector.setAttribute("src", vector_icon);
    }
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        padding: "0 10%",
        margin: "5% 0",
        marginLeft: "6%",
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
          onTimelineElementClick={handleShow}
          icon={[
            <span
              style={{
                alignSelf: "center",
                position: "relative",
                top: "30%",
                left: "15%",
                fontSize: "16px",
              }}
            >
              Step 1
            </span>,
          ]}
        >
          <Row className="p-0 m-0">
            <Col className="p-0 m-0">
              <TextComponent
                className="vertical-timeline-element-title title-l"
                text={props.step1Text}
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
        {/* colapsible items */}
        <div
          id="toShow"
          className="hide"
          style={{ position: "relative", left: "0" }}
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
              padding: "0",
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
                  text={props.step11Text}
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
              padding: "0",
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
                  text={props.step12Text}
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
              padding: "0",
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
                  text={props.step13Text}
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
              padding: "0",
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
                  text={props.step14Text}
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
              padding: "0",
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
                  text={props.step15Text}
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
              padding: "0",
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
                  text={props.step16Text}
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
              padding: "0",
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
                1.7
              </span>
            }
          >
            <Row className="p-0 m-0">
              <Col>
                <TextComponent
                  className="vertical-timeline-element-title subtitle"
                  text={props.step17Text}
                />
              </Col>
            </Row>
          </VerticalTimelineElement>
          {props.step18 ? (
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
                padding: "0",
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
                  1.8
                </span>
              }
            >
              <Row className="p-0 m-0">
                <Col>
                  <TextComponent
                    className="vertical-timeline-element-title subtitle"
                    text={props.step18Text}
                  />
                </Col>
              </Row>
            </VerticalTimelineElement>
          ) : (
            false
          )}
        </div>
        {/* STEP 2 */}
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
          onTimelineElementClick={() => console.log(`radi`)}
          icon={[
            <span
              style={{
                alignSelf: "center",
                position: "relative",
                top: "30%",
                left: "15%",
                fontSize: "16px",
              }}
            >
              Step 2
            </span>,
          ]}
        >
          <Row className="p-0 m-0">
            <Col className="p-0 m-0">
              <TextComponent
                className="vertical-timeline-element-title title-l"
                text={props.step2Text}
              />
            </Col>
            <Col className="text-end col-1 p-0 m-0">
              <Button
                className="btnTimeLine"
                onClick={() => console.log(`radi dugme`)}
                text={[<img src={vector_icon} alt="vector_icon" />]}
              />
            </Col>
          </Row>
        </VerticalTimelineElement>
        {/* Colapsable elements */}
        {/* STEP 3 */}
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
          onTimelineElementClick={() => console.log(`radi`)}
          icon={[
            <span
              style={{
                alignSelf: "center",
                position: "relative",
                top: "30%",
                left: "15%",
                fontSize: "16px",
              }}
            >
              Step 3
            </span>,
          ]}
        >
          <Row className="p-0 m-0">
            <Col className="p-0 m-0">
              <TextComponent
                className="vertical-timeline-element-title title-l"
                text={props.step3Text}
              />
            </Col>
            <Col className="text-end col-1 p-0 m-0">
              <Button
                className="btnTimeLine"
                onClick={() => console.log(`radi dugme`)}
                text={[<img src={vector_icon} alt="vector_icon" />]}
              />
            </Col>
          </Row>
        </VerticalTimelineElement>
        {props.step4 ? (
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
            onTimelineElementClick={() => console.log(`radi`)}
            icon={[
              <span
                style={{
                  alignSelf: "center",
                  position: "relative",
                  top: "30%",
                  left: "15%",
                  fontSize: "16px",
                }}
              >
                Step 4
              </span>,
            ]}
          >
            <Row className="p-0 m-0">
              <Col className="p-0 m-0">
                <TextComponent
                  className="vertical-timeline-element-title title-l"
                  text={props.step4Text}
                />
              </Col>
              <Col className="text-end col-1 p-0 m-0">
                <Button
                  className="btnTimeLine"
                  onClick={() => console.log(`radi dugme`)}
                  text={[<img src={vector_icon} alt="vector_icon" />]}
                />
              </Col>
            </Row>
          </VerticalTimelineElement>
        ) : (
          false
        )}
        {/* Colapsable elements */}
      </VerticalTimeline>
    </div>
  );
};
export default LevelVerticalTimeline;
