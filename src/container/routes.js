import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// import component
import history from 'utils/history';
import RootContainer from './rootContainer';
import HomePage from './HomePage';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </RootContainer>
    </Router>
  );
};
export default AppRouter;
