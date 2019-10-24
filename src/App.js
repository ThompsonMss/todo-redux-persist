import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Home from './pages/Home';
import Config from './pages/Configurations';
import Error404 from './pages/Error404';

import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Config" component={Config} />
          <Route component={Error404} />
        </Switch>
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
