import {takeLatest, all, call} from 'redux-saga/effects';
import * as CONST from '../constants';
import {
  login,
  signUp,
  forgetPassword,
  logout,
  userProfile,
  resetPassword,
  userExist,
  states,
  updateUserProfile,
  getUserAccountBalance,
} from './user';
import {
  tournamentsByLeague,
  myContest,
  getGameEntrants,
  getPayout,
  myResults,
  matchesBytournament,
  getTeamSummary,
  submitSelectedTeamSummary,
  getContestType,
  getGameEntries,
  getOtherTeamSummary,
  getSportsData,
} from './tournament';
import {getNotificationsCount, myNotifications} from './notification';
import {
  getTransactions,
  getWithdrawalsMeta,
  sendWithdrawalRequest,
} from './transactions';
import {getContestPlayers} from './players';
import tutorialSagas from './tutorial';
import permissionsSaga from './permissionsSaga';
import leaderboardRootSaga from './leaderboard';

export default function* root() {
  yield all([
    takeLatest(CONST.LOGIN_START, login),
    takeLatest(CONST.SIGN_UP_START, signUp),
    takeLatest(CONST.FORGET_PASSWORD, forgetPassword),
    takeLatest(CONST.LOGOUT, logout),
    takeLatest(CONST.TOURNAMENT, tournamentsByLeague),
    takeLatest(CONST.MYCONTEST, myContest),
    takeLatest(CONST.GET_GAME_ENTRANTS, getGameEntrants),
    takeLatest(CONST.GET_GAME_ENTRIES, getGameEntries),
    takeLatest(CONST.MYRESULT, myResults),
    takeLatest(CONST.MATCHES, matchesBytournament),
    takeLatest(CONST.SUBMIT_SUMMARY, submitSelectedTeamSummary),
    takeLatest(CONST.TEAM_SUMMARY, getTeamSummary),
    takeLatest(CONST.GET_PLAYER, getContestPlayers),
    takeLatest(CONST.GET_USER, userProfile),
    takeLatest(CONST.RESET_PASSWORD, resetPassword),
    takeLatest(CONST.GET_PAYOUT, getPayout),
    takeLatest(CONST.GET_CONTEST_TYPE, getContestType),
    takeLatest(CONST.GET_OTHER_SELECTIONS, getOtherTeamSummary),
    takeLatest(CONST.USER_EXIST, userExist),
    takeLatest(CONST.STATES, states),
    takeLatest(CONST.GET_TRANSACTIONS, getTransactions),
    takeLatest(CONST.GET_SPORTS, getSportsData),
    takeLatest(CONST.UPDATE_USER, updateUserProfile),
    takeLatest(CONST.GET_WITHDRAWALS_REQUEST, getWithdrawalsMeta),
    takeLatest(CONST.SEND_WITHDRAWALS_REQUEST, sendWithdrawalRequest),
    takeLatest(CONST.NOTIFICATION_COUNT, getNotificationsCount),
    takeLatest(CONST.GET_USER_ACCOUNT_BALANCE, getUserAccountBalance),
    takeLatest(CONST.MY_NOTIFICATIONS, myNotifications),
    call(tutorialSagas),
    call(permissionsSaga),
    call(leaderboardRootSaga),
  ]);
}
