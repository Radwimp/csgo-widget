import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from 'common/apollo';
import Routes from './routes';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
