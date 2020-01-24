import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/common/Home';
import Login from './components/auth/Login';

function App() {
  return (
    <div className='container'>
      <Header />
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
