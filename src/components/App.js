import { hot } from 'react-hot-loader/root';
import React from 'react';
import Box from '@material-ui/core/Box';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/';
import Home from 'pages/Home';
import About from 'pages/About';
import './App.css';
import Footer from './Footer';
import Space from 'pages/Space';
import { Provider } from 'react-redux';
import configureStore from './store';
import NewPost from 'pages/NewPost';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Box style={{ minHeight: 'calc(100vh - 140px)' }}>
          <Route path="/" exact component={Home} />
          <Route path="/spaces/:id" exact component={Space} />
          <Route path="/posts/new" exact component={NewPost} />
          <Route path="/about" exact component={About} />
        </Box>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
