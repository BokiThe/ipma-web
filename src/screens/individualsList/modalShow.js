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
            <tr>
              <td>Certificate</td>
              <td>{data.certificate}</td>
            </tr>
            <tr>
              <td>Salutation</td>
              <td>{data.salutation}</td>
            </tr>
            <tr>
              <td>Surname</td>
              <td>{data.surname}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{data.firstName}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{data.location}</td>
            </tr>
            <tr>
              <td>Postcode</td>
              <td>{data.postcode}</td>
            </tr>
            <tr>
              <td>Initial certification date</td>
              <td>{handleDate(data.certificationDate)}</td>
            </tr>
            <tr>
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
