import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {PageHero} from "../components";
import {contactForm} from "../utils/constants";
import ContactDetails from "../components/ContactDetails";
import ContactField from "../components/ContactField";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [check, setCheck] = useState(false);
  const [validation, setValidation] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const errorField = contactForm.find((input) => input.pattern && !new RegExp(input.pattern).test(formData[input.name]));
    if (!errorField) {
      setValidation(true);
    } else if (validation) {
      setValidation(false);
    }
  }, [formData,validation]);

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCheck(true);
    if (validation) setSubmitted(true);
  };

  return (
    <main>
      <PageHero title='Contact' />
      <Wrapper className='page'>
        <div className='section section-center contact'>
          <ContactDetails />
          <article className='contact-form'>
            <div className={`form form-front ${submitted?'rotate-front':''}`}>
              <h3>contact us</h3>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  {contactForm.map((contact) => {
                    return <ContactField key={contact.id} {...contact} value={formData[contact.name]} onChange={onChange} check={check} />;
                  })}
                </div>
                <button type='submit' className={`btn ${!validation ? "grey" : ""}`}>
                  submit here
                </button>
              </form>
            </div>
            <div className={`form form-back ${submitted?'rotate-back':''}`}>
              <div>
                <h4>The form has been submitted.</h4>
                <h4>We will contact you shortly.</h4>
              </div>
            </div>
          </article>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;

  .email {
    text-transform: none;
  }
  .contact-form {
    max-width: 35rem;
    perspective: 1000px;
    display: flex;
    margin: auto;
    /* align-items: center; */
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    margin-bottom: -0.3rem;
    color: var(--clr-med-4);
    font-weight: 500;
    font-size: 1.6rem;
  }
  .contact-form h4{
    margin-bottom: 1.5rem;
  }
  .form-group {
    padding: 1rem 2rem 0;
  }
  .form {
    background: var(--clr-grey-11);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
    transition: all 1s linear;
    backface-visibility: hidden;
    min-width: 100%;
  }
  .form-back {
    transform: translateX(-100%) rotateY(180deg);
    color: var(--clr-med-4);
    /* padding-top: 25%; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .rotate-front {
    transform: rotateY(-180deg);
  }
  .rotate-back {
    transform: translateX(-100%) rotateY(0);
  }

  .btn {
    margin: 1rem 0 1.5rem;
    padding: 0.7rem;
  }
  .grey {
    background-color: grey;
  }
  @media screen and (min-width: 992px) {
    .contact {
      display: flex;
      align-items: center;
      max-width: 75vw;
    }
    .contact-form {
      width: 50%;
      max-width: 35rem;
    }
    .contact-form h3 {
      font-size: 1.8rem;
    }
  }
`;

export default ContactPage;
