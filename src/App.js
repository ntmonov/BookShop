import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/common/Home';
import Login from './components/auth/Login';

function App() {

  const [username, setUserName] = useState('');

  const getUserName = (username) => {
    setUserName(username);
  }

  return (
    <div className='container'>
      <Header username={username} getUserName={getUserName}/>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login getUserName={getUserName}/>
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
