import React from "react";
import styled from "styled-components";

const AppointmentColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h5>Visit</h5>
        <h5>Examination</h5>
        <h5 className="description">First Name</h5>
        <h5 className="description">Last Name</h5>
        <h5 className="description">Email</h5>
        <h5>Status</h5>
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
    grid-template-columns: repeat(3,29%) auto;
    column-gap: 0.7rem;
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
      grid-template-columns: repeat(4, 14%) 20% 10% auto;
      justify-items: center;
      column-gap: 0.7rem;
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

export default AppointmentColumns;
