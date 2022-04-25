import * as CONST from '../constants';

export function login(data) {
  return {
    type: CONST.LOGIN_START,
    data,
  };
}

export function loginSuccess(data) {
  return {
    type: CONST.LOGIN_SUCCESS,
    data,
  };
}

export function loginFaliure(data) {
  return {
    type: CONST.LOGIN_FAILURE,
    data,
  };
}

export function states(data) {
  return {
    type: CONST.STATES,
    data,
  };
}

export function statesSuccess(data) {
  return {
    type: CONST.STATES_SUCCESS,
    data,
  };
}

export function statesFaliure(data) {
  return {
    type: CONST.STATES_FAILURE,
    data,
  };
}

export function userExist(data) {
  return {
    type: CONST.USER_EXIST,
    data,
  };
}

export function userExistSuccess(data) {
  return {
    type: CONST.USER_EXIST_SUCCESS,
    data,
  };
}

export function userExistFaliure(data) {
  return {
    type: CONST.USER_EXIST_FAILURE,
    data,
  };
}

export function logout(data) {
  return {
    type: CONST.LOGOUT,
    data,
  };
}

export function logoutSuccess(data) {
  return {
    type: CONST.LOGOUT_SUCCESS,
    data,
  };
}

export function logoutFaliure(data) {
  return {
    type: CONST.LOGOUT_FAILURE,
    data,
  };
}

export function forgotPassword(data) {
  return {
    type: CONST.FORGET_PASSWORD,
    data,
  };
}

export function forgotPasswordSuccess(data) {
  return {
    type: CONST.FORGET_PASSWORD_SUCCESS,
    data,
  };
}

export function forgotPasswordFaliure(data) {
  return {
    type: CONST.FORGET_PASSWORD_FAILURE,
    data,
  };
}

export function resetPassword(data) {
  return {
    type: CONST.RESET_PASSWORD,
    data,
  };
}

export function resetPasswordSuccess(data) {
  return {
    type: CONST.RESET_PASSWORD_SUCCESS,
    data,
  };
}

export function resetPasswordFaliure(data) {
  return {
    type: CONST.RESET_PASSWORD_FAILURE,
    data,
  };
}

export function updateSignUpInfo(data) {
  return {
    type: CONST.UPDATE_SIGNUP_USER_INFO,
    data,
  };
}

export function signUp(data) {
  return {
    type: CONST.SIGN_UP_START,
    data,
  };
}

export function signUpSuccess(data) {
  return {
    type: CONST.SIGN_UP_SUCCESS,
    data,
  };
}

export function signUpFailure(data) {
  return {
    type: CONST.SIGN_UP_FAILURE,
    data,
  };
}

export function user(data) {
  return {
    type: CONST.GET_USER,
    data,
  };
}

export function userSuccess(data) {
  return {
    type: CONST.GET_USER_SUCCESS,
    data,
  };
}

export function userFaliure(data) {
  return {
    type: CONST.GET_USER_FAILURE,
    data,
  };
}

export function updateUser(data) {
  return {
    type: CONST.UPDATE_USER,
    data,
  };
}

export function updateUserSuccess(data) {
  return {
    type: CONST.UPDATE_USER_SUCCESS,
    data,
  };
}

export function updateUserFaliure(data) {
  return {
    type: CONST.UPDATE_USER_FAILURE,
    data,
  };
}

export function getLocation(data) {
  return {
    type: CONST.GET_LOCATION,
    data,
  };
}

export function getUserAccountBalence(userId) {
  return {
    type: CONST.GET_USER_ACCOUNT_BALANCE,
    userId,
  };
}

export function getUserAccountBalanceSuccess(data) {
  return {
    type: CONST.GET_USER_ACCOUNT_BALANCE_SUCCESS,
    data,
  };
}

export function getUserAccountBalanceFaliure(data) {
  return {
    type: CONST.GET_USER_ACCOUNT_BALANCE_FAILURE,
    data,
  };
}
