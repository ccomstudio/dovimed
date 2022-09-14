import React, {useState, useEffect} from "react";
import {FiChevronRight, FiChevronLeft} from "react-icons/fi";
import {packages} from "../utils/constants";
import {FaSearch} from "react-icons/fa";
import styled from "styled-components";
import { Link } from 'react-router-dom';

// let data = dat.slice(0, 3);
const positions = ["lastSlide", "activeSlide", "nextSlide"];
const people = [...packages];
while(people.length<positions.length){
  people.push(...JSON.parse(JSON.stringify(people)))
}
people.unshift(people.pop()); 
people.unshift(people.pop()); //ostatni na początek [5, 1, 2, 3, 4]
people.map((person,i)=>person.ind=i)
let dispayed

function Slider() {
  const [index, setIndex] = useState(0);
  const [interval, setInterv] = useState(0);

  const lastIndex = people.length - 1;
  if (index < 0) setIndex(lastIndex);
  if (index > lastIndex) setIndex(0);
  useEffect(() => {
    let start=setTimeout(() => {
      setInterv(5000)
    }, 0);
    return () => {
      clearTimeout(start)
    }
  }, [])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prvIndex) => prvIndex + 1);
    }, interval);
    return () => {
      clearInterval(slider);
    };
  }, [index, interval]);

  if (index < 0 || index > lastIndex) return null;
  const frames = positions.map((frame, i) => {
    let {id, ind, image, name, memo} = people[index + i] || people[index - people.length + i];
    if(frame==="activeSlide") dispayed=id
    return (
      <Link to={`/packages/${id}`} className={`product ${frame}`} key={ind}>
        <img src={image} alt={name} className='slide-img' />
        <span className="search"><FaSearch/></span>
        <div className={`description ${frame === "activeSlide" ? "slide" : ""}`}>
          <h4 >{name}</h4>
          <p className='memo'>{memo}</p>
        </div>
      </Link>
    );
  });

  return (
    <SliderContainer className='top-section section-center' onMouseOver={() => setInterv(90000)} onMouseLeave={() => setInterv(5000)}>
      {frames}
      <div className='prev' onClick={() => setIndex((prvIndex) => prvIndex - 1)}>
        <FiChevronLeft />
      </div>
      <div className='next' onClick={() => setIndex((prvIndex) => prvIndex + 1)}>
        <FiChevronRight />
      </div>
      <div className='balls'>
        {packages.map((item, personIndex) => {
          return <div key={personIndex} className={`ball ${dispayed === item.id ? "active" : ""}`} onClick={() => setIndex(personIndex+1)}></div>;
        })}
      </div>
    </SliderContainer>
  );
}

export default Slider;

const SliderContainer = styled.div`
  /* width: 90vw; */
  margin-top: 0.3rem;
  height: 50vh;
  position: relative;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--dark-shadow);

.product {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* opacity: 0; */
  transition: var(--transition-smooth);
  background: rgba(0, 0, 0, 0.3);
}
.slide-img {
  position: absolute;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply
}
.search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 2.5rem;
      color: var(--clr-white);
    }
  }
  .product:hover .search {
    opacity: 0.7;
    background: rgba(255, 255, 255, 0.4);
  }
.product h4 {
  text-transform: uppercase;
  color: var(--clr-skin-8);
  margin-bottom: 0.25rem;
}
.description {
  position: absolute;
  bottom: 10%;
  left: 20%;
  opacity: 0.5;
  transform: translate(-3rem, 0rem) scale(1.4);
  transition: transform 5s linear, opacity 2s;
}
.memo{
  color: var(--clr-med-8);
  text-transform: capitalize;
}
.slide {
  opacity: 1;
  transform: translate(4rem,-3rem) scale(1);
  /* animation: move 3s linear forwards; */
}
/* @keyframes move {
  0% {
    transform: translate(0px);
  }
  100% {
    bottom: 20%;
    left: 50%;
    transform: scale(0.8);
  }
} */

.prev,
.next {
  width: 2.25rem;
  height: 2.25rem;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.4);
  color: var(--clr-white);
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: var(--transition);
}
.prev:hover,
.next:hover {
  background: rgba(255, 255, 255, 0.8);
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
.balls {
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.3rem;
}
.ball {
  width: 0.9rem;
  height: 0.9rem;
  border: solid 3px var(--clr-med-8);
  border-radius: 50%;
}
.ball.active {
  background: var(--clr-med-8); 
}

@media (min-width: 800px) {
  height: 70vh;
  .prev,
  .next {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2.5rem;
  }
}
.product.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
.product.lastSlide {
  transform: translateX(-100%);
}
.product.nextSlide {
  transform: translateX(100%);
}

`