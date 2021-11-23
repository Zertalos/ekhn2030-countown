import * as React from 'react';

import AppFooter from './modules/views/AppFooter';
import Header from './modules/views/Header';
import ProductValues from './modules/views/ProductValues';

import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      {/*<AppAppBar />*/}
      <Header />
      <ProductValues />
{/*      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />*/}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
