import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ResetPassword from './ResetPassword';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/:userId" component={ResetPassword} />
    </Switch>
  </div>
);

export default Routes;
