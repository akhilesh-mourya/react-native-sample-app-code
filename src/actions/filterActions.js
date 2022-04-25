import * as CONST from '../constants';

export function updateFilterInfo(data) {
  return {
    type: CONST.UPDATE_FILTER_INFO,
    data,
  };
}

export function sortTournamentList(data) {
  return {
    type: CONST.SORT_TOURNAMENT_LIST,
    data,
  };
}

export function filterEnable(data) {
  return {
    type: CONST.FILTER_ENABLED,
    data,
  };
}
