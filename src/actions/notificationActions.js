import * as CONST from '../constants';

export function notificationCount(data) {
  return {
    type: CONST.NOTIFICATION_COUNT,
    data,
  };
}

export function notificationCountSuccess(data) {
  return {
    type: CONST.NOTIFICATION_COUNT_SUCCESS,
    data,
  };
}

export function notificationCountFaliure(data) {
  return {
    type: CONST.NOTIFICATION_COUNT_FAILURE,
    data,
  };
}

export function resetNotificationCount() {
  return {
    type: CONST.RESET_NOTIFICATION_COUNT,
  };
}

export function myNotifications(data, isPullToRefresh = false) {
  return {
    type: CONST.MY_NOTIFICATIONS,
    data,
    isPullToRefresh,
  };
}

export function myNotificationsSuccess(data) {
  return {
    type: CONST.MY_NOTIFICATIONS_SUCCESS,
    data,
  };
}

export function myNotificationFaliure(data) {
  return {
    type: CONST.MY_NOTIFICATIONS_FAILURE,
    data,
  };
}
