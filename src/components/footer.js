import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <h3> made by botanicalCoder</h3>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  text-align: center;
  font-size:small;
  position: sticky;
  bottom: 0;
  padding: 0.1em;
  width:100%;
  color: black;
  background-color: rgb(221, 217, 217);
  
`;

export default Footer;
