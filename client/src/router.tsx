import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import IndexPage from './pages/Index/container';
import IncomesPage from './pages/Incomes/container';
import ReportPage from './pages/Report/container';

const router = (history: History) => {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/income" exact component={IncomesPage} />
          <Route path="/report" exact component={ReportPage} />
        </Switch>
      </Router>
    </ConnectedRouter>
  );
};

export default router;
