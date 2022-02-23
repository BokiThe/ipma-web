import React from "react";
import Modal from "react-bootstrap/Modal";
import "./individualsList.css";

const ModalShow = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = props.data;
  const handleDate = (date) => {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let day = date.getDate();

    year = String(year).padStart(4, "0");
    month = String(month).padStart(2, "0");
    day = String(day).padStart(2, "0");

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <button
        key={data.index}
        data-tag="allowRowEvents"
        className="btnDetails"
        onClick={handleShow}
      >
        See details {">>"}
      </button>
      <Modal show={show} backdrop="static" keyboard={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Individual Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="modalTable">
            <tr key={1}>
              <td>Certificate</td>
              <td>{data.certificate}</td>
            </tr>
            <tr key={2}>
              <td>Salutation</td>
              <td>{data.salutation}</td>
            </tr>
            <tr key={3}>
              <td>Surname</td>
              <td>{data.surname}</td>
            </tr>
            <tr key={4}>
              <td>Name</td>
              <td>{data.firstName}</td>
            </tr>
            <tr key={5}>
              <td>Location</td>
              <td>{data.location}</td>
            </tr>
            <tr key={6}>
              <td>Postcode</td>
              <td>{data.postcode}</td>
            </tr>
            <tr key={7}>
              <td>Initial certification date</td>
              <td>{handleDate(data.certificationDate)}</td>
            </tr>
            <tr key={8}>
              <td>Certification status</td>
              <td>
                {data.certificationStatus ? (
                  <span style={{ color: "#00CC90" }}>Active & Certified</span>
                ) : (
                  <span style={{ color: "red" }}>Deactivaated</span>
                )}
              </td>
            </tr>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalShow;
