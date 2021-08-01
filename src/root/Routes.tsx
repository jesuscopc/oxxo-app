import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import ProductsPage from './ProductsPage/ProductsPage';

const Routes = (): React.ReactElement => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/products" component={ProductsPage} />
  </Switch>
);
export default Routes;
