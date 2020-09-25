import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';



const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact/>
      <Route component={Repository} path="/repository/:repository+" />
    </Switch>
  )
}

export default Routes;


