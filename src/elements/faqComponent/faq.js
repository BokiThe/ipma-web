import React from "react";
import Faq from "react-faq-component";

//TODO:: Styling the faq component
const FaqComponent = () => {
  const data = {
    title: "FAQs",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                    ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                    In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                    Fusce sed commodo purus, at tempus turpis.`,
        close: () => {
          config.arrowIcon = "+";
        },
        expand: () => {
          config.arrowIcon = "-";
        },
      },
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                    ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                    In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                    Fusce sed commodo purus, at tempus turpis.`,
        close: () => {
          styles.rowTitleColor = "#04151F";
          config.arrowIcon = "-";
          styles.arrowColor = "#ED3E3E";
        },
        expand: () => {
          styles.rowTitleColor = "#04151F";
          config.arrowIcon = "-";
          styles.arrowColor = "#ED3E3E";
        },
      },
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                    ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                    In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                    Fusce sed commodo purus, at tempus turpis.`,
        close: () => {
          styles.rowTitleColor = "#04151F";
          config.arrowIcon = "-";
          styles.arrowColor = "#ED3E3E";
        },
        expand: () => {
          styles.rowTitleColor = "#04151F";
          config.arrowIcon = "-";
          styles.arrowColor = "#ED3E3E";
        },
      },
      {
        title: "Lorem ipsum dolor sit amet,",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                    ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                    In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                    Fusce sed commodo purus, at tempus turpis.`,
        close: () => {
          styles.rowTitleColor = "#04151F";
          config.arrowIcon = "-";
          styles.arrowColor = "#ED3E3E";
        },
        expand: () => {
          styles.rowTitleColor = "#04151F";
          config.arrowIcon = "-";
          styles.arrowColor = "#ED3E3E";
        },
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
    arrowIcon: ["+" || "-"],
    //   tabFocus: false,
  };
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FaqComponent;
