import React, { useState } from "react";
import Faq from "react-faq-component";

//TODO:: Styling the faq component
const data = {
  title: <span style={{ marginLeft: "30px" }}> FAQs</span>,
  rows: [
    {
      title: (
        <>
          <span
            className="subtitle"
            style={{
              marginLeft: "30px",
              fontSize: "13px",
              paddingBottom: "10%",
            }}
          >
            01{" "}
          </span>
          <span className="title-xs" style={{ marginLeft: "30px" }}>
            Lorem ipsum dolor sit amet,
          </span>
        </>
      ),
      content: (
        <p className="subtitle" style={{ marginLeft: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
          mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
          purus, at tempus turpis.
        </p>
      ),
    },
    {
      title: (
        <>
          <span
            className="subtitle"
            style={{ marginLeft: "30px", fontSize: "13px" }}
          >
            02{" "}
          </span>
          <span className="title-xs" style={{ marginLeft: "30px" }}>
            Lorem ipsum dolor sit amet,
          </span>
        </>
      ),
      content: (
        <p className="subtitle" style={{ marginLeft: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
          mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
          purus, at tempus turpis.
        </p>
      ),
    },
    {
      title: (
        <>
          <span
            className="subtitle"
            style={{ marginLeft: "30px", fontSize: "13px" }}
          >
            03{" "}
          </span>
          <span className="title-xs" style={{ marginLeft: "30px" }}>
            Lorem ipsum dolor sit amet,
          </span>
        </>
      ),
      content: (
        <p className="subtitle" style={{ marginLeft: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
          mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
          purus, at tempus turpis.
        </p>
      ),
    },
    {
      title: (
        <>
          <span
            className="subtitle"
            style={{ marginLeft: "30px", fontSize: "13px" }}
          >
            04{" "}
          </span>
          <span className="title-xs" style={{ marginLeft: "30px" }}>
            Lorem ipsum dolor sit amet,
          </span>
        </>
      ),
      content: (
        <p className="subtitle" style={{ marginLeft: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor
          sem. Aenean vel turpis feugiat, ultricies metus at, consequat velit.
          Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In
          maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet
          mauris tortor, sed egestas libero interdum vitae. Fusce sed commodo
          purus, at tempus turpis.
        </p>
      ),
    },
  ],
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
  arrowIcon: "-",
  // tabFocus: true,
};
const handleExpand = () => {};
const FaqComponent = () => {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FaqComponent;
