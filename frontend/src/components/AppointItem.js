import React from "react";
import styled from "styled-components";
import {FaTrash} from "react-icons/fa";
import {useCartContext} from "../context/cart_context";
const AppointmentItem = ({id, date, firstName, lastName, list, email, isExamination}) => {
  const {removeAppointment} = useCartContext();
  return (
    <Wrapper>
      <h5 className='info'>{date}</h5>
      <h5 className='info'>{list}</h5>
      <h5 className='description'>{firstName}</h5>
      <h5 className='description'>{lastName}</h5>
      <h5 className='description lowCaps'>{email}</h5>
      <h5 className='info lowCaps'>confirmed</h5>
      <button type='button' className='remove-btn' onClick={() => removeAppointment(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
text-align: center;
  display: grid;
  grid-template-columns: repeat(3,29%) auto;
  grid-template-rows: 3rem;
  gap: 3rem 0.7rem;
  justify-items: center;
  margin-bottom: 1.5rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 90px 100px;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 4rem;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    margin-bottom: 0;
    font-size: 0.875rem;
    font-weight: 400;
  }
  .lowCaps{
    text-transform: none;
    font-size: 0.95rem;
    overflow-wrap: break-word;
    width: 100%;
  }
  .description {
    display: none;
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 14%) 20% 10% auto;
    align-items: center;
    margin-bottom: 2rem;
    img {
      height: 4.7rem;
    }
    h5{font-size: 0.95rem;}
    .description {
      display: block;
      color: var(--clr-grey-5);
    }
    .info {
      display: block;
      color: var(--clr-med-4);
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 110px;
    }
  }
`;

export default AppointmentItem;
