import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

/** Containers */
import Main from './containers/Main';

const Routes = () => (
  <>
    <Route exact path="/" component={Main} />
  </>
);

export default hot(Routes);
