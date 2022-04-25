import * as CONST from '../constants';

export function getTransactions(data, isPullToRefresh = false) {
  return {
    type: CONST.GET_TRANSACTIONS,
    data,
    isPullToRefresh,
  };
}

export function getTransactionsSuccess(data) {
  return {
    type: CONST.GET_TRANSACTIONS_SUCCESS,
    data,
  };
}

export function getSearchTransactionsSuccess() {
  return {
    type: CONST.GET_SEARCH_TRANSACTIONS_SUCCESS,
  };
}

export function getTransactionsFaliure(data) {
  return {
    type: CONST.GET_TRANSACTIONS_FAILURE,
    data,
  };
}

export function getWithdrawalsMeta() {
  return {
    type: CONST.GET_WITHDRAWALS_REQUEST,
  };
}

export function getWithdrawalsSuccess(data) {
  return {
    type: CONST.GET_WITHDRAWALS_SUCCESS,
    data,
  };
}

export function getWithdrawalsFaliure(data) {
  return {
    type: CONST.GET_WITHDRAWALS_FAILURE,
    data,
  };
}

export function sendWithdrawalsrequest(data) {
  return {
    type: CONST.SEND_WITHDRAWALS_REQUEST,
    data,
  };
}

export function sendWithdrawalsrequestSuccess(data) {
  return {
    type: CONST.SEND_WITHDRAWALS_SUCCESS,
    data,
  };
}

export function sendWithdrawalsrequestFaliure(data) {
  return {
    type: CONST.SEND_WITHDRAWALS_FAILURE,
    data,
  };
}
