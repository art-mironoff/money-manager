import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import report from './pages/Report/reducer';

export default (history: History) =>
  combineReducers({
    report,
    router: connectRouter(history)
  });
