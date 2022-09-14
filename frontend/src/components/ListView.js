import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ListView = ({ products, group }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, age ,description } = product
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <div className="description">
                <h4>{name}</h4>
                {group==="all"&&age&&<h5 className='age'>({age})</h5>}
              </div>
                <p>{description.slice(0,150)}</p>
                <Link to={`/products/${id}`} className='btn'>
                  Details
                </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}


const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    display: block;
    width: 100%;
    max-width: 400px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  .description{
    display: flex;
    align-items: baseline;
  }
  h4 {
    margin-bottom: 0.5rem;
    padding-right: 1rem;
  }
  .age {
    color: var(--clr-med-4);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
    img{width:300px}
  }
`

export default ListView
