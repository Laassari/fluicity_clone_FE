import React from 'react';
import Container from '@material-ui/core/Container';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/';
import Home from 'pages/Home';
import About from 'pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
