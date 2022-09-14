import React, {useEffect, useState} from "react";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import styled from "styled-components";
import useSize from "../hooks/useSize";

const Zipper = ({fields}) => { //slider homepage services (duties)
  const services = [...fields];
  const [index, setIndex] = useState(0);
  const [responsive, setResponsive] = useState(null)
  const{width}=useSize()
  const lastIndex = services.length - 1;
  const nextTile = () => {//krok przewijania
    if (responsive>1&&index + responsive < lastIndex) {
      setIndex((prvIndex) => prvIndex + 2);
    } else if (index + responsive -1 < lastIndex) {
      setIndex((prvIndex) => prvIndex + 1);
    }
  };
  const privTile = () => {//krok przewijania
    if (responsive>1&&index > 1) {
      setIndex((prvIndex) => prvIndex - 2);
    } else if (index > 0) {
      setIndex((prvIndex) => prvIndex - 1);
    }
  };
  const tiles = services.map((service, i) => {
    let {id, icon, title, text} = service;
    return (
      <div className='service-container' style={{minWidth:`${100/responsive}%`}} key={i}>
        <article className='service' key={id}>
          <span className='icon'>{icon} </span>
          <h4>{title}</h4>
          <p>{text}</p>
        </article>
      </div>
    );
  });
useEffect(() => {
  if (width>900) {setResponsive(3)}
  else if (width>576) {setResponsive(2)}
  else{setResponsive(1)}
},[width])
  return (
    <Wrapper>
      <section className='services-center'>
        <div className='services-container' style={{transform: `translateX(${-index * 100/responsive}%)`}}>
          {tiles}
        </div>
        <button className={`prev ${index === 0 ? "remove" : ""}`} onClick={privTile}>
          <FiChevronLeft />
        </button>
        <button className={`next ${index + responsive > lastIndex ? "remove" : ""}`} onClick={nextTile}>
          <FiChevronRight />
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* height: 70vh; */
  --transition: all 0.3s linear;
  .services-center {
    /* height: 70vh; */
    width: 100%;
    margin: auto;
    margin-top: 3rem;
    position: relative;

    /* gap: 1rem; */
    overflow: hidden;
  }
  .services-container {
    display: flex;
    transition: var(--transition);
  }
  .service-container{
    padding: 0 0.5%;
  }
  .service {
    background: var(--clr-skin-9);
    text-align: center;
    border-radius: var(--radius);
    padding: 1rem;

    /* position: absolute;
    top: 0;
    left: 0; */

    /* height: 100%; */
  }
  .active {
    opacity: 0.6;
    border: solid var(--clr-med-6);
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--clr-med-4);
    color: var(--clr-white);
    width: 1.75rem;
    height: 1.75rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: var(--clr-med-7);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  .hide {
    opacity: 0;
    cursor: auto;
  }
  .remove {
    display: none;
  }
  @media (min-width: 700px) {
    .text {
      max-width: 45em;
    }
  }
  @media (min-width: 992px) {
    .tiles {
      height: 11%;
    }
  }
  //services
  h3,
  h4 {
    color: var(--clr-med-2);
    line-height: 2.3rem;
  }

  background: var(--clr-skin-10);

  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-med-3);
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-skin-10);
    color: var(--clr-med-2);
    svg {
      font-size: 2rem;
    }
  }
`;

export default Zipper;
