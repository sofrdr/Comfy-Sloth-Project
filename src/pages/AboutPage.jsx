import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutPage = () => {
  return (
    <main>
      <PageHero title="À propos" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Notre histoire</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            adipisci aliquid recusandae! Quae quo fugit doloremque reiciendis
            tempore dignissimos, odit odio dolor ratione quidem voluptates
            explicabo quasi corrupti aliquam expedita mollitia, numquam,
            laudantium eum ea repellendus magni in sit inventore. Dolorum nam
            ducimus tempora nostrum rem dolorem, unde autem fuga.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
