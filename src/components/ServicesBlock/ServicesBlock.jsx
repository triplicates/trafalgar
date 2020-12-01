import React from "react";
import PropTypes from "prop-types";
import Service from "components/Service/Service";
import { ServicesBlock as Section } from "./ServicesBlockElements";

let propTypes = {
  serviceList: PropTypes.arrayOf("object").isRequired,
};

export default ServicesBlock = ({ serviceList }) => {
  return (
    <Section>
      {serviceList.map((obj) => {
        return <Service key={obj.id} obj={obj} />;
      })}
    </Section>
  );
};

ServicesBlock.propTypes = propTypes;
