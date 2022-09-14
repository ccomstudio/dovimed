import React from 'react'
import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
const CartItem = ({ id,isExamination }) => {
  const { removeItem } = useCartContext()
  const{products,packages}=useProductsContext()
  const product=isExamination?products.find((item)=>{
    return item.id===+id}):packages.find((item)=>{
      return item.id===+id})
  const{name,age,image,description}=product||{}
  return (
    <Wrapper>
      <Link to={`/${isExamination?"products":"packages"}/${id}`} className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='age'>
            age : {age?age:"all"}
          </p>
        </div>
      </Link>
      <h5 className='category'>{isExamination?"examination":"package"}</h5>
      <h5 className='description'>{description&&description.slice(0,100)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id,isExamination)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  column-gap: 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 90px 100px;
    align-items: center;
    text-align: left;
    gap: 1rem;
    /* overflow: hidden; */
  }
  img {
    width: 100%;
    height: 4rem;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
    color: var(--clr-grey-3)
  }

  .age {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .category{
    width: 6.5rem;
    text-align: center;
  }
  .description{
    display: none;
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 800px) {
    grid-template-columns: 16rem 0.7fr 3fr auto;
    align-items: center;
    grid-template-rows: 75px;
    column-gap: 2.5rem;
    img{
      height: 4.7rem;
    }
    .description {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .category {
      display: block;
      font-size: 1rem;
      color: var(--clr-med-4);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 110px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
  }
`

export default CartItem
