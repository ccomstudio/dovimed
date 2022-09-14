import React, {useState} from "react";
import styled from "styled-components";

const ContactField = (props) => {
  const [focused, setFocused] = useState(false);
  const {id, tag: Tag, label, errorMessage, required, pattern, check, ...inputProps} = props;
  const warning = (focused||check) && !(pattern && new RegExp(pattern).test(props.value));

  return (
    <Wrapper>
      <Tag className={`form-control ${warning ? "warning" : ""}`} {...inputProps} onBlur={() => setFocused(true)} />
      <span className={warning? "warning" : ""}>{errorMessage}</span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid gray;
    margin: 0.8rem 0 0.3rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-family: inherit;
  }
  .form-control::placeholder {
    color: var(--clr-grey-3);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-weight: 500;
  }
  span {
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
    text-align: left;
  }
  .form-control.warning {
    border: 1px solid red;
    background: var(--clr-warning);
  }
  span.warning {
    display: block;
  }
`;

export default ContactField;
