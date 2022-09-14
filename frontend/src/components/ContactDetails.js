import React from "react";
import styled from "styled-components";
import {FaLocationArrow,FaEnvelope,FaPhoneSquareAlt} from "react-icons/fa";

const ContactDetails = () => {
  return (
    <Wrapper className="contact-info">
    <div className='contact-item'>
      <h4 className='contact-title'>
        <span className='contact-icon'>
          <FaLocationArrow/>
        </span>
        address
      </h4>
      <h4 className='contact-text'>
        postępu 7 <br />
        00-100 Warszawa
      </h4>
    </div>
    <div className='contact-item'>
      <h4 className='contact-title'>
        <span className='contact-icon'>
          <FaEnvelope/>
        </span>
        email
      </h4>
      <h4 className='contact-text email'>email@email.com</h4>
    </div>
    <div className='contact-item'>
      <h4 className='contact-title'>
        <span className='contact-icon'>
          <FaPhoneSquareAlt/>
        </span>
        Phone
      </h4>
      <h4 className='contact-text'>+ 123 456 789</h4>
    </div>
  </Wrapper>
  );
};

const Wrapper = styled.section`
  &.contact-info{
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 35rem;}
  .contact-item {
    width: 16rem;
    margin-bottom: 1rem;
    padding-left: 3rem;
  }
  .contact-title {
    color: var(--clr-med-4);
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  h4{font-size:1.25rem;}
  .contact-icon{padding-right:1rem;
    padding-top: 0.25rem;
    color: var(--clr-med-3);
}
  .contact-text {
    text-transform: uppercase;
    font-weight: 500;
    color: var(--clr-grey-3);
  }
  @media screen and (min-width: 992px) {
    &.contact-info{display: block;
      width: 50%;
      max-width: 35rem;}
    .contact-item{margin-bottom:1.75rem;}
  } 
`;

export default ContactDetails;
