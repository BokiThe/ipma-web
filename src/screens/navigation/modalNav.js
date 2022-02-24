import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../../elements/button/button";

const ModalNav = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btnTimeLine" onClick={handleShow} text={props.text} />

      <Modal
        style={{
          width: "314px",
          height: "200",
          top: "104px",
          left: "auto",
          right: "50px",
        }}
        show={show}
        backdrop="static"
        keyboard={true}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            key={1}
            style={{
              background: "#ED3E3E",
              margin: "10px",
              border: "1.5px solid #ED3E3E",
              borderRadius: "8px",
              padding: "0",
            }}
          >
            <input
              key={1}
              style={{
                textAlign: "center",
                display: "inline-block",
                width: "80%",
                border: "none",
                padding: "4.5px",
                borderRadius: "8px 0 0 8px",
              }}
              type="text"
              value="+1 267 277 [6240]"
            />
            <input
              key={2}
              type="submit"
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                borderRadius: "0 8px 8px 0",
                padding: "5px",
                display: "inline-block",
                margin: "0",
              }}
              value="Copy"
            />
          </div>
          <div
            key={2}
            style={{
              background: "#ED3E3E",
              margin: "10px",
              border: "1.5px solid #ED3E3E",
              borderRadius: "8px",
              padding: "0",
            }}
          >
            <input
              key={1}
              style={{
                textAlign: "center",
                display: "inline-block",
                width: "80%",
                border: "none",
                padding: "4px",
                borderRadius: "8px 0 0 8px",
              }}
              type="text"
              value="support@ipma-ir.com"
            />
            <input
              key={2}
              type="submit"
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                borderRadius: "0 8px 8px 0",
                padding: "5px",
                display: "inline-block",
                margin: "0",
              }}
              value="Copy"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalNav;
