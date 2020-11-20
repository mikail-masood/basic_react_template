import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/products';
import SignUp from './components/pages/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' exact component={Services}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/sign-up' exact component={SignUp}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
