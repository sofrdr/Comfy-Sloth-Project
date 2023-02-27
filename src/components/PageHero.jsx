import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 170px;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
    &:hover {
      color: var(--clr-primary-1);
    }
  }
`;

const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Accueil</Link>/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;
