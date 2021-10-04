import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>

        </Switch>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
