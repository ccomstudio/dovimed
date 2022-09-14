import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { PageHero,VisitsContent } from '../components'

const AppointmentsList = () => {
  const { appointments } = useCartContext()
  if (appointments.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>No Appointments made</h2>
          <Link to='/appointment/new/new' className='btn'>
            Appoint
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title='Appointments List' />
      <Wrapper className='page'>
        <VisitsContent appointments={appointments}/>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`

export default AppointmentsList
