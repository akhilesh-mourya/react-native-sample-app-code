import * as CONST from '../constants';

/**
 * TODO: Remove userProfile state & use only user state to access login user data
 * Reasone used two states:
 * - From loginUser action data is dispatched in user state
 * - From getUser/updateUser action data is dispatched in userProfile state
 * - Also both states are used in diffrent screen, so need to updated in all screens and use single state
 */

const initialState = {
  user: null,
  message: '',
  tokens: null,
  emailSent: false,
  signUpInfo: {},
  userLocation: null,
  userProfile: null,
  states: [],
  userExist: null,
  userAccountBalence: null,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case CONST.LOGIN_START:
      return {
        ...state,
        message: CONST.LOGIN_START,
      };
    case CONST.LOGIN_SUCCESS:
      return {
        ...state,
        message: CONST.LOGIN_SUCCESS,
        user: action.data,
        userProfile: action.data?.user || null,
      };
    case CONST.LOGIN_FAILURE:
      return {
        ...state,
        message: CONST.LOGIN_FAILURE,
        user: null,
        userProfile: null,
      };
    case CONST.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.data,
        userProfile: action.data?.user || null,
      };
    case CONST.SIGN_UP_FAILURE:
      return {
        ...state,
        user: null,
        userProfile: null,
      };
    case CONST.STATES:
      return {
        ...state,
        message: CONST.STATES,
      };
    case CONST.STATES_SUCCESS:
      return {
        ...state,
        message: CONST.STATES_SUCCESS,
        states: action.data,
      };
    case CONST.STATES_FAILURE:
      return {
        ...state,
        message: CONST.STATES_FAILURE,
        states: [],
      };
    case CONST.USER_EXIST:
      return {
        ...state,
        message: CONST.USER_EXIST,
      };
    case CONST.USER_EXIST_SUCCESS:
      return {
        ...state,
        message: CONST.USER_EXIST_SUCCESS,
        userExist: action.data,
      };
    case CONST.USER_EXIST_FAILURE:
      return {
        ...state,
        message: CONST.USER_EXIST_FAILURE,
        userExist: null,
      };
    case CONST.GET_LOCATION:
      return {
        ...state,
        userLocation: action.data,
        message: CONST.GET_LOCATION,
      };
    case CONST.LOGOUT:
      return {
        ...state,
        message: CONST.LOGOUT_SUCCESS,
      };
    case CONST.LOGOUT_FAILURE:
      return {
        ...state,
        message: CONST.LOGOUT_FAILURE,
      };
    case CONST.FORGET_PASSWORD:
      return {
        ...state,
        message: CONST.FORGET_PASSWORD,
      };
    case CONST.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        emailSent: action.data,
        message: CONST.FORGET_PASSWORD_SUCCESS,
      };
    case CONST.FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        message: CONST.FORGET_PASSWORD_FAILURE,
      };
    case CONST.RESET_PASSWORD:
      return {
        ...state,
        message: CONST.RESET_PASSWORD,
      };
    case CONST.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: CONST.RESET_PASSWORD_SUCCESS,
      };
    case CONST.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        message: CONST.RESET_PASSWORD_FAILURE,
      };
    case CONST.UPDATE_SIGNUP_USER_INFO:
      return {
        ...state,
        signUpInfo: action.data,
      };
    case CONST.GET_USER:
      return {
        ...state,
        message: CONST.GET_USER,
      };
    case CONST.GET_USER_SUCCESS:
      return {
        ...state,
        message: CONST.GET_USER_SUCCESS,
        userProfile: action.data,
      };
    case CONST.GET_USER_FAILURE:
      return {
        ...state,
        message: CONST.GET_USER_FAILURE,
        userProfile: null,
      };
    case CONST.UPDATE_USER:
      return {
        ...state,
      };
    case CONST.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.data,
      };
    case CONST.UPDATE_USER_FAILURE:
      return {
        ...state,
      };
    case CONST.GET_USER_ACCOUNT_BALANCE_SUCCESS:
      return {
        ...state,
        userAccountBalence: action.data,
      };
    case CONST.GET_USER_ACCOUNT_BALANCE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default {
  user,
};
