import { Switch, Route } from 'react-router-dom';

import { DashBoard } from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={DashBoard} />
  </Switch>
);

export default Routes;
