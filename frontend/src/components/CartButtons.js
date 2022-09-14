import React from 'react'
import { BsFillStarFill} from 'react-icons/bs'
import { RiFileEditFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'

const CartButtons = () => {
  const { toggleSidebar } = useProductsContext()
  const { cart,appointments } = useCartContext()
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={toggleSidebar}>
        Watchlist
        <span className='cart-container'>
          <BsFillStarFill />
          <span className='cart-value'>{cart.length}</span>
        </span>
      </Link>
      <Link to='/appointments-list' className='cart-btn' onClick={toggleSidebar}>
        Appointments
        <span className='cart-container'>
          <RiFileEditFill />
          <span className='cart-value'>{appointments.length}</span>
        </span>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 300px;
  gap: 1.4rem;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.15rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    &:hover{
      border-bottom: 2px solid var(--clr-med-7);
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
      stroke: var(--clr-grey-3);
      fill: var(--clr-grey-3);
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -15px;
    background: var(--clr-med-6);
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--clr-white);
    padding: 11px;
  }
`
export default CartButtons
