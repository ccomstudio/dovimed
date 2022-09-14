import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Wrapper className='section-center section'>
      <article className='content'>
        <h2>create your</h2>
        <h2>comfort zone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
        </p>
        <Link to='/products' className='btn hero-btn'>
          details
        </Link>
      </article>
      
      <img src='https://res.cloudinary.com/dkm9cvsyg/image/upload/v1648722471/lab/tomograf_2_f3765t.jpg' alt='person working' className='hero-img'/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 50vh;
  display: grid;
  place-items: center;
  .hero-img {
    display: none;
  }

  p {
    line-height: 2;
    /* max-width: 45em; */
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    /* height: 50vh; */
    grid-template-columns: 1.2fr 0.8fr;
    gap: 6rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .hero-img {
      width: 100%;
      height: 60vh;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  }
`

export default Hero
