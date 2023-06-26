import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import WorkoutsPage from 'containers/WorkoutsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/workouts',
    component: WorkoutsPage,
    exact: true,
  },
  {
    component: NotFoundPage,
  },
];

const IndexRoutes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);

export default IndexRoutes;
