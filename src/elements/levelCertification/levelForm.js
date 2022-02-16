import React from "react";
import "./levelCertification.css";
import upload_icon from "../../assets/icons/upload_icon.svg";

const LevelForm = (props) => {
  return (
    <form className="LevelForm">
      <input
        className="LevelInput"
        type="text"
        placeholder="Enter your fullname here"
      />
      <input
        className="LevelInput"
        type="e-mail"
        placeholder="Enter your email here"
      />
      <label for="uploadFile" className="costumUpload">
        <span>
          <img src={upload_icon} alt="upload_icon" />
        </span>
        <br />
        Upload scanned forms
      </label>
      <input type="file" name="uploadFile" id="uploadFile" />
      <input className="LevelSubmit" type="submit" value="Submit" />
    </form>
  );
};

export default LevelForm;
