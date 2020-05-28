import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

/** Containers */
import Home from './containers/Home';

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
  </>
);

export default hot(Routes);
