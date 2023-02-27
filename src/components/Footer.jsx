import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  p {
    color: #fff;
    margin: 0 5px;
  }

  @media screen and (min-width: 776px) {
    flex-direction: row;
  }

  span {
    color: var(--clr-primary-5);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth</span>
      </p>
      <p>All rights reserved</p>
    </FooterContainer>
  );
};

export default Footer;
