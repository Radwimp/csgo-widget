import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import apolloClient from 'common/apollo';
import GlobalStyle from './globalStyle';
import Routes from './routes';

const commonTheme = {
  green: '#27AE60',
  red: '#EB5757',
  primaryFontSize: '1.8rem',
  secondaryFontSize: '1.6rem',
  tetriaryFontSize: '1.4rem',
  primaryLineHeight: '2.4rem',
  secondaryLineHeight: '2rem',
};

const darkTheme = {
  primaryBg: '#191A23',
  secondaryBg: '#252735',
  tetriaryBg: '#101116',
  quaternaryBg: '#1E2028',
  primaryText: '#FFFFFF',
  secondaryText: '#7D7F8E',
  primaryBorder: '#3B3D49',
};

const lightTheme = {
  primaryBg: '#F5F5F5',
  secondaryBg: '#FFFFFF',
  tetriaryBg: '#FFFFFF',
  quaternaryBg: '#F5F5F5;',
  primaryText: '#000000',
  secondaryText: '#828282',
  primaryBorder: '#E0E0E0',
};

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <ThemeProvider theme={Object.assign(commonTheme, darkTheme)}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
