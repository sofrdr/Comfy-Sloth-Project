import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    -moz-box-pack: justify;
    justify-content: space-between;
    -moz-box-align: center;
    align-items: center;
    h5 {
      margin-bottom: 0;
      font-weight: 400;
    }
    p {
      margin-bottom: 0;
      font-weight: 400;
      color: var(--clr-primary-5);
      letter-spacing: var(--spacing);
    }
  }
`;

const Product = ({ name, image, price, id }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link className="link" to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
