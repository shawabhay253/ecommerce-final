import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home,About,Product,Singleproduct,Checkout,Cart,Error, Privateroute,AuthWrapper} from "./pages/index"


function App() {
  return (
  <AuthWrapper>
  <Router>
    <Navbar/>
    <Sidebar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/about">
      <About/>
    </Route>
    <Route exact path="/cart">
      <Cart/>
    </Route>
    <Route exact path="/products">
      <Product/>
    </Route>
    <Route exact path="/Products/:id" children={<Singleproduct/>}/>
    <Privateroute exact path="/checkout">
      <Checkout/>
    </Privateroute>
    <Route path="*">
      <Error/>
    </Route>
    </Switch>
    <Footer/>
    </Router>
    </AuthWrapper>
  )}

export default App
