import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h5>
          {title?<Link to='/'>Home </Link>:"Home"}
          {product && <span>/ <Link to='/products'> Examinations</Link></span>} {title?`/ ${title}`:''}
        </h5>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-med-9);
  padding: 5.5rem 0 0;
  width: 100%;
  height: 7.4rem;
  /* display: flex; */
  /* align-items: center; */
  
  color: var(--clr-skin-1);
  .section-center{padding-top:0;}
  h5{
    margin: 0 2rem;
    color: var(--clr-grey-4);
  }
  a {
    color: var(--clr-med-4);
    /* padding: 0.5rem 0.5rem 0.5rem 0; */
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-skin-1);
  }
`

export default PageHero
