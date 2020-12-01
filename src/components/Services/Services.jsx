import React from "react";
import {
  Services as Section,
  ServicesWrapper,
  ServicesTitle,
  ServicesSubtitle,
} from "./ServicesElements";
import ServicesBlock from "components/ServicesBlock/ServicesBlock";
import servicesList from "components/Data/Services";

export default function Services() {
  return (
    <Section>
      <ServicesWrapper>
        <ServicesTitle size="medium" line>
          Our services
        </ServicesTitle>
        <ServicesSubtitle>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </ServicesSubtitle>
        <ServicesBlock serviceList={servicesList} />
      </ServicesWrapper>
    </Section>
  );
}
