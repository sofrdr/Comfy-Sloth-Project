import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: var(--clr-grey-10);
`;

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Products</h2>
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
