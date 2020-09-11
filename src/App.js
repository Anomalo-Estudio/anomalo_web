import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutUs from './pages/AboutUs';
import SayHi from './pages/SayHi';

function App() {
  return (

    <Router> 
      <Navbar />
      <Switch>
        <Route path='/' exact components={Home} />
        <Route path='/' components={Work} />
        <Route path='/' components={AboutUs} />
        <Route path='/' components={SayHi} />  
      </Switch>
    </Router>

  );
}

export default App;
