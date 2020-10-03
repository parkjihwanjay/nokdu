import React from 'react';
import './styles/base.scss';
import { routes } from './routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const App: React.FC = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));
  return (
    <Router>
      <Switch>{routeComponents}</Switch>
    </Router>
  );
};
