import blog_image from "../assets/ilustrations/blog_image.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextComponent from "../elements/text/text";

export const blogSections = [
  {
    className: "blogCard",
    imgClass: "blogImg",
    src: blog_image,
    title: "Creative project management and practices for 2021",
    href: "#",
    linkId: "blogLink",
    linkText: "Read more >>",
  },
  {
    className: "blogCard",
    imgClass: "blogImg",
    src: blog_image,
    title: "Creative project management and practices for 2021",
    href: "#",
    linkId: "blogLink",
    linkText: "Read more >>",
  },
  {
    className: "blogCard",
    imgClass: "blogImg",
    src: blog_image,
    title: "Creative project management and practices for 2021",
    href: "#",
    linkId: "blogLink",
    linkText: "Read more >>",
  },
  {
    className: "blogCard",
    imgClass: "blogImg",
    src: blog_image,
    title: "Creative project management and practices for 2021",
    href: "#",
    linkId: "blogLink",
    linkText: "Read more >>",
  },
];

const levelCrtificaationA = [
  {
    title: (
      <Row>
        <Col>
          <span>Step 1 </span>
        </Col>
        <Col>
          <TextComponent
            className="title-s"
            text="Application to obtain the certificate"
          />
        </Col>
      </Row>
    ),
    content: "",
  },
];

const contentA = [
  {
    1: (
      <Row>
        <Col>
          <span>1.1</span>
        </Col>
        <Col>
          <TextComponent
            classname="subtitle"
            text="Express your interest by email or complete the booking form online."
          />
        </Col>
      </Row>
    ),
  },
];
