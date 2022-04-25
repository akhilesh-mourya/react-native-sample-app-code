import {combineReducers} from 'redux';
import configureStore from '../stores/index';
import rootSaga from '../sagas/index';
import {commonReducer} from './commonReducer';
import {filterReducer} from './filterReducer';
import {user} from './user';
import {tournament} from './tournament';
import {transactions} from './transactions';
import {players} from './playerReducer';
import {teamPlayer} from './teamPlayer';
import tutorial from './tutorialReducer';
import permissions from './permissionsReducer';
import notification from './notificationReducer';
import appState from './appStateReducer';
import leaderboard from './leaderboard';

export default () => {
  const appReducer = combineReducers({
    commonReducer,
    filterReducer,
    user,
    tournament,
    players,
    teamPlayer,
    tutorial,
    transactions,
    permissions,
    notification,
    appState,
    leaderboard,
  });
  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESS') {
      state = undefined;
    }
    return appReducer(state, action);
  };

  return configureStore(rootReducer, rootSaga);
};
