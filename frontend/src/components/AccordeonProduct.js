import React, {useEffect, useRef, useState} from "react";
import {AiFillCaretLeft} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useSize from "../hooks/useSize";

const AccordeonProduct = ({id, name, description, memo, image, opened, toggle}) => {
  const [heights, setHeights] = useState({head: 0, par: 0, art: 0});
  const refPar = useRef();
  const refArt = useRef();
  const refHead = useRef();
  const{width}=useSize()
  useEffect(() => {
    setHeights({
      head: refHead.current.getBoundingClientRect().height,
      par: refPar.current.getBoundingClientRect().height,
      art: refArt.current.getBoundingClientRect().height,
    });
  }, []);
  const baseHeight = heights.head + heights.art;
  if(width<700) description=description.slice(0,130)+' (...)'

  return (
    <Wrapper ref={refArt} style={{height: `${opened.includes(id) ? baseHeight + heights.par : baseHeight}px`}} onClick={() => toggle(id)}>
      <header ref={refHead} className='single-product'>
        <h4>{name}</h4>
        <p className='memo'>{memo}</p>
        <button className={`circle-btn ${opened.includes(id) ? "rotate" : ""}`}>
          <AiFillCaretLeft />
        </button>
      </header>
      <Link to={`/products/${id}`} className="product-content" ref={refPar}>
        <div className="image-box">
          <img src={image} alt={name} />
          <span className="search"><FaSearch/></span>
        </div>
        <p >{description}</p>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: var(--radius);
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
  transition: var(--transition);
  overflow: hidden;
  cursor: pointer;
  background: var(--clr-skin-9);

  .single-product {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items:center;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .single-product h4 {
    line-height: 1.5;
    margin-bottom: 0;
  }
  .product-content{
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 7rem auto;
    column-gap: 1rem;
  align-items: center;
  }
  .image-box{position: relative;}
  img {
    width: 100%;
    height: 5rem;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-med-6);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1rem;
      color: var(--clr-white);
    }
  }
  .product-content:hover .search {
    opacity: 0.6;
  }
  .memo {
    font-weight: 500;
  }
  p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    /* overflow: hidden; */
  }
  .circle-btn {
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    color: var(--clr-med-3);
    background: var(--clr-grey-10);
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    border-radius: 50%;
    cursor: pointer;
    transition: var(--transition);
  }
  .circle-btn svg {
    margin-right: 0.2rem;
  }
  .rotate {
    transform: rotate(-90deg);
  }
  @media (min-width: 700px){
    .product-content{
      grid-template-columns: 10rem auto;
      column-gap: 3rem;
    }
    img{
      height: 6.5rem;
    }
    .circle-btn {
      margin-left: 1.5rem;
    }
  }
`;

export default AccordeonProduct;
