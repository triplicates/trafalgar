import React from "react";
import PropTypes from "prop-types";
import Service from "components/Service/Service";
import { ServicesBlock as Section } from "./ServicesBlockElements";

let propTypes = {
  serviceList: PropTypes.arrayOf("object").isRequired,
};

export default function ServicesBlock({ serviceList }) {
  return (
    <Section>
      {serviceList.map((objData) => {
        return <Service key={objData.id} obj={objData} />;
      })}
    </Section>
  );
}

ServicesBlock.propTypes = propTypes;
