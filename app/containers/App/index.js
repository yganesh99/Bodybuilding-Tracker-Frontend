/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
import IndexRoutes from '../../routes/indexRoutes';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
        <IndexRoutes/>
      {/* <Footer /> */}
      <GlobalStyle />
    </div>
  );
}
