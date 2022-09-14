import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const Filters = () => {
  const {filters: {text,age,location},updateFilters,clearFilters,all_products,} = useFilterContext()

  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]).filter(item=>item); //wyciąga wszystkie i odrzuca puste
    return ['all', ...new Set(unique)]
  }
  const ages = getUniqueValues(all_products, 'age')
  const locations = getUniqueValues(all_products, 'location')


  return   <Wrapper>
  <div className='content'>
    <form onSubmit={(e) => e.preventDefault()}>
      {/* search */}
      <div className='form-control'>
        <h5>Examination</h5>
        <input
          type='text'
          name='text'
          placeholder='search'
          className='search-input'
          value={text}
          onChange={updateFilters}
        />
      </div>
      {/* ages */}
      <div className='form-control'>
        <h5>Age</h5>
        <div className="age">
          {ages.map((a, index) => {
            return (
              <button
                key={index}
                onClick={updateFilters}
                type='button'
                name='age'
                className={`${
                  age === a.toLowerCase() ? 'active' : null
                }`}
              >
                {a}
              </button>
            )
          })}
        </div>
      </div>
      {/* locations */}
      <div className='form-control'>
        <h5>Location</h5>
        <select
          name='location'
          value={location}
          onChange={updateFilters}
          className='location'
        >
          {locations.map((l, index) => {
            return (
              <option key={index} value={l}>
                {l}
              </option>
            )
          })}
        </select>
      </div>
    </form>
    <button type='button' className='clear-btn' onClick={clearFilters}>
      {' '}
      clear filters
    </button>
  </div>
</Wrapper>

}

const Wrapper = styled.section`
  form {display:flex;
  flex-wrap:wrap}
  .form-control {
    margin-bottom: 1.25rem;
    margin-right: 1.5rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .form-control:nth-of-type(2){
    width: 7rem;
  }
h5,.age{
  padding-left: 0.4rem;
}
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .location {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.5rem;
    text-transform: capitalize;
    width: 11.5rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 4rem;
    }
  }
`

export default Filters
