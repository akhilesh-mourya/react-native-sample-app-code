import * as CONST from '../constants';

export function getPlayerList(data, isAll = false) {
  return {
    type: CONST.GET_PLAYER,
    data,
    isAll,
  };
}

export function getPlayerListSuccess(data) {
  return {
    type: CONST.GET_PLAYER_SUCCESS,
    data,
  };
}

export function getPlayerListFaliure(data) {
  return {
    type: CONST.GET_PLAYER_FAILURE,
    data,
  };
}

export function addName(data) {
  return {
    type: CONST.ADD_NAME,
    data,
  };
}

export function getTeamPlayer(data) {
  return {
    type: CONST.TEAM_PLAYER,
    data,
  };
}

export function getTeamPlayerSuccess(data) {
  return {
    type: CONST.TEAM_PLAYER_SUCCESS,
    data,
  };
}

export function getTeamPlayerFaliure(data) {
  return {
    type: CONST.TEAM_PLAYER_FAILURE,
    data,
  };
}

export function getAllPlayerSuccess(data) {
  return {
    type: CONST.GET_ALL_PLAYER_SUCCESS,
    data,
  };
}

export function getAllPlayerFaliure(data) {
  return {
    type: CONST.GET_ALL_PLAYER_FAILURE,
    data,
  };
}

export function getAllTeamPlayerSuccess(data) {
  return {
    type: CONST.ALL_TEAM_PLAYER_SUCCESS,
    data,
  };
}

export function getAllTeamPlayerFaliure(data) {
  return {
    type: CONST.ALL_TEAM_PLAYER_FAILURE,
    data,
  };
}
