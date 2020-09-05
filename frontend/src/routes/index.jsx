import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Articles from '../pages/Articles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/articles" component={Articles} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
