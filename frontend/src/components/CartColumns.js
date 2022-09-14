import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h5>Product</h5>
        <h5>Type</h5>
        <h5 className="description">Description</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .content {
    display: grid;
    grid-template-columns: 200px auto auto;
    column-gap: 1rem;
  }
  .description{display:none}
  hr {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  @media (min-width: 800px) {
    display: block;
    .description{display:block}
    .content {
      display: grid;
      grid-template-columns: 16rem 0.7fr 3fr auto;      justify-items: center;
      column-gap: 2.5rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
        width: 6.5rem;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default CartColumns;
