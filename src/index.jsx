import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import apolloClient from 'common/apollo';
import Routes from './routes';

const darkTheme = {
  primaryBg: '#191A23',
  secondaryBg: '#252735',
  tetriaryBg: '#101116',
  quaternaryBg: '#1E2028;',
  primaryText: '#FFFFFF',
  secondaryText: '#7D7F8E',
};

const lightTheme = {
  primaryBg: '#F5F5F5',
  secondaryBg: '#FFFFFF',
  tetriaryBg: '#FFFFFF',
  quaternaryBg: '#F5F5F5;',
  primaryText: '#000000',
  secondaryText: '#828282',
};

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
