import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ products, group }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} group={group}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    height: 12rem;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 592px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 768px) {
    .products-container {
      grid-template-columns: repeat(1, 1fr);
    }
    img {
    height: 15rem;
  }
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
