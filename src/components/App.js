import { hot } from 'react-hot-loader/root';
import React from 'react';
import Box from '@material-ui/core/Box';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/';
import Home from 'pages/Home';
import About from 'pages/About';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Box>
      <Footer />
    </BrowserRouter>
  );
}

export default hot(App);
