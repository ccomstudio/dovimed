import React, {useState, useEffect} from "react";
import {FiChevronRight, FiChevronLeft} from "react-icons/fi";
import {FaSearch} from "react-icons/fa";
import styled from "styled-components";
import { Link } from 'react-router-dom';


function Carusel({data}) {
  const [index, setIndex] = useState(0);
  const [interval, setInterv] = useState(0);
  const [transition, setTransition] = useState('')
  const positions = Array(6).fill(null);
  const people = [...data];
  
  while (people.length < positions.length) {
    people.push(...JSON.parse(JSON.stringify(people)));
  }
  people.unshift(people.pop());
  people.unshift(people.pop()); //ostatni na początek [5, 1, 2, 3, 4]
  people.map((person, i) => (person.ind = i)); //udworzenie pomocniczego niezdublowanego indexu
  let dispayed; // aktywna kulka
  
  useEffect(() => {
    let start = setTimeout(() => {
      setInterv(5000);
    }, 0);
    return () => {
      clearTimeout(start);
    };
  }, []);
  
  const lastIndex = people.length - 1;
  if (index < 0) setIndex(lastIndex);
  if (index > lastIndex) setIndex(0);
  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, interval);
    return () => {
      clearInterval(slider);
    };
  }, [index, interval]);
  
  if(!data) {return null};
  const onLeave=()=>{
    // setInterv(5000);
    setInterv(2000)
    setTimeout(() => {
      setInterv(5000);
      setTransition('slow')
    }, 2050);
  }
  const balls=(i) => {
    setTransition('instant')
    setIndex(i + 1)
    setInterv(90000)
    setTimeout(() => {
      setTransition('slow')
    }, 0);
  }


  if (index < 0 || index > lastIndex) return null; //cofając wskakuje -1
  const frames = positions.map((_, i) => {
      let {id, ind, image, name, memo} = people[index + i] || people[index - people.length + i];
      if (i === 1) dispayed = id;
      return (
        <Link to={`/products/${id}`} className={`product ${transition}`} key={ind} style={{transform: `translateX(${-100 + i * 100}%)`}}>
          <img src={image} alt={name} className='slide-img' />
          <span className="search"><FaSearch/></span>
          <div className='story'>
            <h4 className='name'>{name}</h4>
            <p className='memo'>{memo}</p>
          </div>
        </Link>
      );
    });

  return (
    <Wrapper>
      <section className='slides' onMouseOver={()=>setInterv(90000)} onMouseLeave={onLeave}>
        {frames}
        <button className='prev' onClick={() => setIndex((prvIndex) => prvIndex - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex((prvIndex) => prvIndex + 1)}>
          <FiChevronRight />
        </button>
      </section>
      <div className='balls' onMouseOver={()=>setInterv(90000)} onMouseLeave={onLeave}>
        {data.map((item, personIndex) => {
          return <div key={personIndex} className={`ball ${dispayed === item.id ? "active" : ""}`} onClick={()=>balls(personIndex)}></div>;
        })}
      </div>
    </Wrapper>
  );
}

export default Carusel;

const Wrapper = styled.section`
--transition-long: all 5s linear;
.slides{
  height: 50vh;
  max-width: 1200px;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: var(--radius);
}
.product {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 0.4rem;
  height: 100%;
  transition: var(--transition-long);
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
.search {
    position: absolute;
    top: 45%;
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
  .product:hover .slide-img {
    opacity: 0.5;
  }
  .product:hover .search {
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
.slides:hover .product{
  transition: all 0.5s
}
.product:hover .story {
  opacity: 1;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.5);
  text-align: left;
}
.product:hover .memo {
  opacity: 1;
}
.product:hover .name {
  color: var(--clr-med-3);
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
@media (min-width: 576px) {
  .product{width:50%}
}
@media (min-width: 700px) {
  .product{width:33.33%}
}
@media (min-width: 900px) {
  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  .product{width:25%}
}

.instant{transition: var(--transition-quick)}
.slow{transition: var(--transition-long)}
.balls {
  display: flex;
  gap: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
}
.ball {
  width: 0.9rem;
  height: 0.9rem;
  border: solid 3px var(--clr-med-3);
  border-radius: 50%;
}
.ball.active {
  background: var(--clr-med-3); 
};`