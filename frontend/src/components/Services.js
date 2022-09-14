import React from 'react'
import styled from 'styled-components'
import { fields } from '../utils/constants'
import Zipper from './Zipper'

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center section'>
        <article className='header'>
          <h3>
            main fields <br />
            of our duties
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia
            quod?
          </p>
        </article>
        <Zipper fields={fields}/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-skin-10);
  h3,
  h4 {
    color: var(--clr-med-2);
    line-height: 2.3rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-med-3);
  }
`
export default Services
