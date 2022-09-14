import React, {useState} from "react";
import {FiChevronRight, FiChevronLeft} from "react-icons/fi";
import {FaSearch} from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Collection({packProducts}) {
  const people = [...packProducts];
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  
  // if(!data) {return null};
    people.map((person, i) => (person.ind = i)); //udworzenie pomocniczego niezdublowanego indexu
  
  const lastIndex = people.length - 1;

  const nextSlide=()=>{if (index1<lastIndex) setIndex1((prvIndex) => prvIndex + 1)}
  const privSlide=()=>{if (index1>0) setIndex1((prvIndex) => prvIndex - 1)}

  const nextTile = () => {
    if(index2+5 < lastIndex) {setIndex2((prvIndex) => prvIndex + 2)}
    else if(index2+3 < lastIndex) {setIndex2((prvIndex) => prvIndex + 1)}
  }
  const privTile = () => {
    if(index2 > 2) {setIndex2((prvIndex) => prvIndex - 2)}
    else if(index2 > 0) {setIndex2((prvIndex) => prvIndex - 1)}
  }

  // if (index1 < 0 || index1 > lastIndex || index2 < 0 || index2 > lastIndex) return null; //cofając wskakiwało -1
  const slides = people.map((people, i) => {
      let {id, ind, image, name, memo} = people;
      return (
        <Link to={`/products/${id}`} className={`slide`} key={ind} style={{transform: `translateX(${(i-index1) * 100}%)`}}>
          <img src={image} alt={name} className='slide-img'/>
          <span className="search"><FaSearch/></span>
          <div className='story'>
            <h4 className='name'>{name}</h4>
            <p className='memo'>{memo}</p>
          </div>
        </Link>
      );
    });
  const tiles = people.map((people, i) => {
      let {ind, image, name} = people;
      return (
        <article className={`tile`} key={ind} style={{transform: `translateX(${(i-index2) * 100}%)`}} onClick={()=>{setIndex1(ind)}}>
          <img src={image} alt={name} className={`slide-img ${index1===ind?"active" : ""}`} />
        </article>
      );
    });

  return (
    <Wrapper>
      <section className='slides'>
        {slides}
        <button className={`prev ${index1===0?'hide':''}`} onClick={privSlide}>
          <FiChevronLeft />
        </button>
        <button className={`next ${index1===lastIndex?'hide':''}`} onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
      <section className='tiles'>
        {tiles}
        <button className={`prev ${index2===0?'remove':''}`} onClick={privTile}>
          <FiChevronLeft />
        </button>
        <button className={`next ${index2+4>lastIndex?'remove':''}`} onClick={nextTile}>
          <FiChevronRight />
        </button>
      </section>
    </Wrapper>
  );
}

export default Collection;

const Wrapper = styled.section`
/* height: 100%; */
height: 70vh;
--transition: all 0.3s linear;
.slides{
  position: relative;
  height: 85%;
  display: flex;
  overflow: hidden;
  border-radius: var(--radius);
  margin-bottom: 1%;
}
.tiles{
  height: 13%;
  width: 50%;
  margin: auto;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: var(--radius);
}
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: var(--transition);
  overflow: hidden;
  background: rgb(0, 0, 0);
  background-clip: content-box;
  /* border-radius: var(--radius); */
}
.tile {
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  padding: 0 0.5%;
  height: 100%;
  transition: var(--transition);
  overflow: hidden;
  background: rgb(0, 0, 0);
  background-clip: content-box;
  /* border-radius: var(--radius); */
}
.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  /* border-radius: var(--radius); */
  opacity: 0.8;
}
.active{
  opacity: 0.6; 
  border: solid var(--clr-med-6); 
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
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .slide:hover .slide-img {
    opacity: 0.5;
  }
  .slide:hover .search {
    opacity: 0.6;
  }

.name {
  text-transform: uppercase;
  color: var(--clr-skin-9);
  font-size: 1.3rem;
  height:2.2rem;
  line-height: 1.5rem;
  /* margin-bottom: 0.25rem; */
}
.memo {
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: var(--clr-med-2);
  opacity: 0;
  transition: var(--transition);
}
.story {
  position: absolute;
  bottom: -40px;
  transition: var(--transition);
  width: 100%;
  padding: 1rem 1.5rem 0.5rem;

}
.slides:hover .slide{
  /* transition: all 0.5s */
}
.slide:hover .story {
  opacity: 1;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.5);
  text-align: left;
}
.slide:hover .memo {
  opacity: 1;
}
.slide:hover .name {
  color: var(--clr-med-3);
}
.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--clr-med-4);
  color: var(--clr-white);
  width: 1.5rem;
  height: 1.5rem;
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
.hide{opacity:0;cursor:auto}
.remove{display:none}
@media (min-width: 700px) {
  .text {
    max-width: 45em;
  }
  .slides .prev,
  .slides .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
@media (min-width: 992px) {
  .slides{
  height: 87%;
  }
  .tiles{
  height: 11%;
  }
}
`