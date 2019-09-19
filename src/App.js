import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route'


const ReactPage = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
const HomePage = () => {
  return (
    <div className='wrapper'>
     <h1>Home Page</h1>
      <ui className='uistyle'>
        <Link className="uistyle-link" to='/'> Home </Link>
        <Link 
          className="uistyle-link" 
          to='/user/srikalyan' 
        > 
        Route to Srikalyan
        </Link>
        <Link 
          className="uistyle-link"
          to='/user/Guest'  
          >
            Route to Guest
          </Link>
        <Link className="uistyle-link" to='/reactPage'> React Page </Link>
      </ui>
    </div>
  )
}
const UserLoggedIn = (props) => {
  console.log(props);
  return ( 
    <>
    <h1>{`Welcome User ${props.match.params.username}`} <span> <Link className="uistyle-link" to='/'>{'<-Back'}</Link> </span></h1>
    </>
  )
}
function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage}/>
      <Route path='/reactPage' exact component={ReactPage}/>
      <Route path='/user/:username' exact component={UserLoggedIn}/>
    </Router>
  );
}

export default App;
