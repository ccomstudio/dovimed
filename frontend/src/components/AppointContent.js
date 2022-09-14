import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import AppointmentColumns from "./AppointColumns";
import AppointmentItem from "./AppointItem";

const AppointmentContent = ({appointments}) => {
  return (
    <Wrapper className='section section-center'>
      <h3 className='title'>your appointments</h3>
      <AppointmentColumns />
      {appointments.map((item) => {
        return <AppointmentItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue visiting
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (max-width: 776px) {
    max-width: 35rem;
  }
  .title {
    text-align: center;
    color: var(--clr-grey-3);
    margin-bottom: 2rem;
  }
  .link-container {
    max-width: 50rem;
    display: flex;
    justify-content: center;
    margin: 2rem auto 0;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-med);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default AppointmentContent;
