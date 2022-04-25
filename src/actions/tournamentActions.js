import * as CONST from '../constants';

export function tournament(data, isPullToRefresh = false) {
  return {
    type: CONST.TOURNAMENT,
    data,
    isPullToRefresh,
  };
}

export function tournamentSuccess(data) {
  return {
    type: CONST.TOURNAMENT_SUCCESS,
    data,
  };
}

export function tournamentFaliure(data) {
  return {
    type: CONST.TOURNAMENT_FAILURE,
    data,
  };
}

export function removeTournament() {
  return {
    type: CONST.TOURNAMENT_REMOVE,
  };
}

export function myContest(data, isPullToRefresh = false) {
  return {
    type: CONST.MYCONTEST,
    data,
    isPullToRefresh,
  };
}

export function myContestSuccess(data) {
  return {
    type: CONST.MYCONTEST_SUCCESS,
    data,
  };
}

export function myContestFaliure(data) {
  return {
    type: CONST.MYCONTEST_FAILURE,
    data,
  };
}

export function removeMyContestTournament() {
  return {
    type: CONST.REMOVEMYCONTEST,
  };
}

export function getGameEntrantsList(data) {
  return {
    type: CONST.GET_GAME_ENTRANTS,
    data,
  };
}

export function gameEntrantsSuccess(data) {
  return {
    type: CONST.GET_GAME_ENTRANTS_SUCCESS,
    data,
  };
}

export function gameEntrantsFailure(data) {
  return {
    type: CONST.GET_GAME_ENTRANTS_FAILURE,
    data,
  };
}

export function myResult(data, isPullToRefresh = false) {
  return {
    type: CONST.MYRESULT,
    data,
    isPullToRefresh,
  };
}

export function myResultSuccess(data) {
  return {
    type: CONST.MYRESULT_SUCCESS,
    data,
  };
}

export function myResultFaliure(data) {
  return {
    type: CONST.MYRESULT_FAILURE,
    data,
  };
}

export function matches(data, callBack = () => {}) {
  this.matchesCallBack = callBack;
  return {
    type: CONST.MATCHES,
    data,
  };
}

export function matchesSuccess(data) {
  if (this.matchesCallBack) {
    this.matchesCallBack();
  }
  return {
    type: CONST.MATCHES_SUCCESS,
    data,
  };
}

export function removeMatches(data) {
  return {
    type: CONST.MATCHES_SUCCESS,
    data,
  };
}

export function matchesFaliure(data) {
  return {
    type: CONST.MATCHES_FAILURE,
    data,
  };
}

export function submitSummary(data) {
  return {
    type: CONST.SUBMIT_SUMMARY,
    data,
  };
}

export function updateSelectedTeam(data) {
  return {
    type: CONST.ADD_SELECTEC_TEAM_SUCCESS,
    data,
  };
}

export function submitSummaryFaliure(data) {
  return {
    type: CONST.SUBMIT_SUMMARY_FAILURE,
    data,
  };
}

export function teamSummary(data, callBack = () => {}) {
  this.callBack = callBack;
  return {
    type: CONST.TEAM_SUMMARY,
    data,
  };
}

export function teamSummarySuccess(data) {
  if (this.callBack) {
    this.callBack();
  }
  return {
    type: CONST.TEAM_SUMMARY_SUCCESS,
    data,
  };
}

export function teamSummaryFaliure(data) {
  return {
    type: CONST.TEAM_SUMMARY_FAILURE,
    data,
  };
}

export function getPayout(data) {
  return {
    type: CONST.GET_PAYOUT,
    data,
  };
}

export function getPayoutSuccess(data) {
  return {
    type: CONST.GET_PAYOUT_SUCCESS,
    data,
  };
}

export function getPayoutFailure(data) {
  return {
    type: CONST.GET_PAYOUT_FAILURE,
    data,
  };
}

export function gameKey(data) {
  return {
    type: CONST.GAME_KEY,
    data,
  };
}

export function saveSelections(data) {
  return {
    type: CONST.SAVE_SELECTIONS,
    data,
  };
}

export function saveMatches(data) {
  return {
    type: CONST.SAVE_MATCHES,
    data,
  };
}

export function getContestType(data) {
  return {
    type: CONST.GET_CONTEST_TYPE,
    data,
  };
}

export function getContestTypeSuccess(data) {
  return {
    type: CONST.GET_CONTEST_TYPE_SUCCESS,
    data,
  };
}

export function getContestTypeFailure(data) {
  return {
    type: CONST.GET_CONTEST_TYPE_FAILURE,
    data,
  };
}

export function getGameEntriesList(data) {
  return {
    type: CONST.GET_GAME_ENTRIES,
    data,
  };
}

export function getGameEntriesListSuccess(data) {
  return {
    type: CONST.GET_GAME_ENTRIES_SUCCESS,
    data,
  };
}

export function getGameEntriesListFaliure(data) {
  return {
    type: CONST.GET_GAME_ENTRIES_FAILURE,
    data,
  };
}

export function getOtherTeamSummary(data, callBack = () => {}) {
  this.callBack = callBack;
  return {
    type: CONST.GET_OTHER_SELECTIONS,
    data,
  };
}

export function getOtherTeamSummarySuccess(data) {
  if (this.callBack) {
    this.callBack();
  }
  return {
    type: CONST.GET_OTHER_SELECTIONS_SUCCESS,
    data,
  };
}

export function getOtherTeamSummaryFaliure(data) {
  return {
    type: CONST.GET_OTHER_SELECTIONS_FAILURE,
    data,
  };
}

export function searchTournamentSuccess(data) {
  return {
    type: CONST.SEARCH_TOURNAMENT_SUCCESS,
    data,
  };
}

export function searchTournamentFailed(data) {
  return {
    type: CONST.SEARCH_TOURNAMENT_FAILURE,
    data,
  };
}

export function getSports() {
  return {
    type: CONST.GET_SPORTS,
  };
}

export function getSportsSuccess(data) {
  return {
    type: CONST.GET_SPORTS_SUCCESS,
    data,
  };
}

export function getSportsFaliure(data) {
  return {
    type: CONST.GET_SPORTS_FAILURE,
    data,
  };
}

export function clearContestSearch() {
  return {
    type: CONST.CLEAR_CONTEST_SEARCH,
  };
}
