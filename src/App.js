import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/post">Post</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;

function Home() {
  return <div>
    <h1>Home</h1>
    <h3>Using redux in react project</h3>
    <h2>Author : Saeed Khazaei</h2>
  </div>;
}
