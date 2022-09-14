import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, Submenu } from './components'

import {
  Home,
  SingleProduct,
  SinglePackage,
  Cart,
  AppointmentsList,
  Error,
  About,
  Contact,
  Products,
} from './pages'
import AppointmentForm from './pages/AppointmentForm'

function App() {
  return (
      <Router>
        <Navbar />
        <Sidebar />
        <Submenu />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/appointments-list'>
            <AppointmentsList />
          </Route>
          <Route path='/appointment/:type/:id'>
            <AppointmentForm/> 
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <Route exact path='/packages/:id' children={<SinglePackage />} />
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
  )
}

export default App
