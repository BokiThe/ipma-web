import React from "react";
import Faq from "react-faq-component";
import  "./levelCertification.css";


const LevelFaq = (props) => {
    const object = props.object;
    const data = {
      rows: object.map((el, index) => {
          return (
              //TODO:: solution for reusabile component
          )
      }),
    };
    
    const styles = {
      // bgColor: 'white',
      titleTextColor: "#04151F",
      rowTitleColor: "#04151F",
      // rowContentColor: 'grey',
      arrowColor: "#04151F",
    };
    
    const config = {
      //   animate: true,
      arrowIcon: ["+" || "-"],
      //   tabFocus: false,
    };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};
export default LevelFaq;
