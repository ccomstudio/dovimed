import styled from "styled-components";

export const Wrapper = styled.div`
  .form {
    display: flex;
    position: relative;
    max-width: 25rem;
    margin: auto;
    margin-bottom: 2rem;
  }

  .form-container {
    position: absolute;
    width: 100%;
    min-height: 20rem;
    background-color: var(--clr-grey-11);
    border-radius: 8px;
    border: solid 2px rgba(0, 0, 0, 0.1);
    /* box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3); */
    display: flex;
    flex-direction: column;
    /* transition: all 0.5s linear; */
  }
  /* transformy  z powyższym transition*/
  /* .active{z-index: 1}
.pending{z-index: -1}
.sent{transform: translateX(-300%);} */

  /* @keyframes ino {
    from {transform: translateX(300%);}
    to {transform: translateX(0%);}
  } */
  @keyframes outo {
    0% {
      transform: translateX(0%) scale(1);
    }
    30% {
      transform: translateY(-8%) scale(1.05);
    }
    50% {
      transform: translateY(-10%) scale(1.05);
    }
    65% {
      transform: translateY(8%) scale(1);
    }
    79% {
      transform: translateY(10%) scale(1);
    }
    100% {
      transform: translateY(-150%) scale(0);
    }
  }
  @keyframes ino {
    0% {
      transform: translateY(-200%) scale(0);
    }
    35% {
      transform: translateY(10%) scale(1);
    }
    45% {
      transform: translateY(8%) scale(1);
    }
    60% {
      transform: translateY(0%) scale(1.05);
    }
    /* 70% {transform: translateY(0%) scale(1.05);} */
    100% {
      transform: translateX(0%) scale(1);
    }
  }
  .active {
    z-index: 1;
  }
  .sent {
    z-index: 2;
    transform: translateY(-200%);
    animation: outo 1s ease-out;
  }
  /* .pending{opacity: 0;}  */
  .out {
    animation: outo 1s ease-out;
  }
  .in {
    animation: ino 1s ease-out;
  }

  .form-container .header {
    height:2rem;
    display: grid;
    place-items: center;
  }

  .form-container .body {
    flex: 60%;
  }

  .footer {
    height:6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: var(--clr-med);
    color: white;
    border: 0 none;
    margin: 0.5rem;
    padding: 0.7rem;
  }
  .grey {
    background-color: grey;
  }
  .hidden {
    display: none;
  }

  .sign-up-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* new */
  .formInput {
    display: flex;
    flex-direction: column;
    width: 100%;
    width: 200px;
  }
  .option {
    text-transform: capitalize;
  }

  .formInput input,
  .formInput select {
    padding: 15px;
    margin: 10px 0px;
    border-radius: var(--radius);
    border: 1px solid gray;
    font-family: inherit;
    background: var(--clr-grey-10);
  }

  .formInput label {
    font-size: 0.9rem;
    color: var(--clr-grey-4);
  }

  .formInput span {
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }
  input.warning,
  select.warning {
    border: 1px solid red;
    background: var(--clr-warning);
  }
  span.warning {
    display: block;
  }

  /* input:invalid[wybrany="true"], //walidowanie css-em
  select:invalid[wybrany="true"] {
    border: 1px solid red;
  }

  input:invalid[wybrany="true"] ~ span,
  select:invalid[wybrany="true"] ~ span {
    display: block;
  } */

  /* PROGRESS BAR */
  .progressbar {
    width: 400px;
    height: 10px;
    background-color: white;
    margin-bottom: 50px;
  }

  .progressbar div {
    width: 33.3%;
    height: 100%;
    background-color: rgb(98, 0, 255);
  }

  .other-info-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .other-info-container input {
    margin: 5px;
    width: 200px;
    height: 40px;
    padding-left: 5px;
    font-size: 20px;
  }

  input {
    border: 2px solid rgb(98, 0, 255);
    border-radius: 5px;
  }

  input:focus {
    border: 3px solid rgb(98, 0, 255);
  }
  .final {
    margin-top: 4rem;
    text-align: center;
    color: var(--clr-med-4);
  }
  .final h4 {
    text-transform: none;
  }
`;
