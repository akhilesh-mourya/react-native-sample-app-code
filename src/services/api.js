import {environment} from '../environments/environment';
import * as CONST from '../constants';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from '../constants/alert';
import NavigationService from '../constants/navigations';
import {GetStoreData, KEYS} from 'async_storage';
import AsyncStorage from '@react-native-community/async-storage';
import Utility from '../constants/utilis';

export async function CommonFetch(params, opt) {
  let result;
  const isInternetWorking = await NetInfo.fetch().then((state) => {
    return state.isConnected;
  });

  const showAlert = (message) => {
    Utility.showAlert(null, message);
  };

  const showActionAlert = (res, currContestData) => {
    let okCallBack = () => {};
    let cancelCallBack = () => {};
    let isOkCancelAlert = false;
    let okButtonText = 'OK';
    let cancelButtonText;
    if (res.errorCode && res.errorCode === 'FUNDS_LOW') {
      okCallBack = () => Utility.onFundsAction('pay', null, 'Add Funds');
      isOkCancelAlert = true;
      okButtonText = 'Deposit';
      cancelButtonText = 'Cancel';
    } else if (
      (res.errorCode && res.errorCode === 'CONTEST_FULL') ||
      res.errorCode === 'CONTEST_MAX_PLAYER' ||
      res.errorCode === 'CONTEST_INACTIVE'
    ) {
      okCallBack = () =>
        NavigationService.navigate('HomeTournamentsScreen', {
          selectedSport: currContestData,
          tournamentTitle: currContestData.sport,
        });
      isOkCancelAlert = true;
      okButtonText = 'Select Contests';
    } else if (res.errorCode && res.errorCode === 'CONTEST_CLOSED') {
      okCallBack = () => {};
      isOkCancelAlert = true;
      okButtonText = 'OK';
    }
    if (isOkCancelAlert) {
      if (cancelButtonText === 'Cancel') {
        Utility.showDefaultAlert(
          res.message,
          res.description,
          okButtonText,
          okCallBack,
          cancelButtonText,
          cancelCallBack,
        );
      } else {
        Utility.showAlert(
          res.description,
          res.message,
          okCallBack,
          okButtonText,
        );
      }
    } else {
      showAlert(res.message);
    }
  };

  if (isInternetWorking) {
    try {
      const URL = `${environment.api}` + `${opt.url}`;
      const Options = {
        method: opt.method,
        URL,
        body: params,
      };

      const ReqOptions = {
        method: Options.method,
        headers: opt?.headers || {},
        body: params,
        timeout: CONST.API_TIMEOUT,
      };

      ReqOptions.headers.Accept = 'application/json';
      if (!ReqOptions.headers['Content-Type']) {
        ReqOptions.headers['Content-Type'] = 'application/json';
      }
      const sessionToken = await GetStoreData(KEYS.USER_INFO, false);

      if (sessionToken && sessionToken.user && sessionToken.user.tokens) {
        ReqOptions.headers.Authorization = `Bearer ${sessionToken.user.tokens.access.token}`;
      } else {
        ReqOptions.headers.Authorization = '';
      }

      if (ReqOptions.method === CONST.GET_API) {
        delete ReqOptions.body;
      } else if (ReqOptions.method === CONST.PATCH_API) {
        ReqOptions.body = Options.body;
      } else {
        ReqOptions.body = JSON.stringify(Options.body);
      }

      console.log('Options.URL=====', Options.URL);
      try {
        return new Promise((Resolve, Reject) => {
          requestTimeoutPromise(
            ReqOptions.timeout,
            fetch(Options.URL, ReqOptions),
            Resolve,
            Reject,
          );
        })
          .then(async (Response) => {
            const contentType = Response.headers.get('content-type');

            if (
              Response.status === 200 ||
              Response.status === 201 ||
              Response.status === 204
            ) {
              // To check the response is in json or plain text or null
              if (
                contentType &&
                contentType.indexOf('application/json') !== -1
              ) {
                await Response.json().then((data) => {
                  result = {
                    accesstoken: [...Response.headers].reduce((acc, header) => {
                      return {...acc, [header[0]]: header[1]};
                    }, {}).accesstoken,
                    body: data,
                  };
                  return result;
                });
                return result;
              } else if (contentType === null) {
                return Response.status;
              } else {
                return Response.text().then((text) => {
                  return JSON.stringify(text);
                });
              }
            } else if (Response.status === 400 || Response.status === 403) {
              Response.json().then((res) => {
                if (res.message) {
                  showActionAlert(res, opt?.extraData?.currContestData);
                } else {
                  showAlert(JSON.stringify(res));
                }
              });
            } else if (Response.status === 401) {
              try {
                Response.json().then((res) => {
                  if (res.message) {
                    showAlert(res.message);
                    if (res.message === 'Please authenticate to DreamPick') {
                      AsyncStorage.getAllKeys()
                        .then((keys) => {
                          const finalKeys = keys.filter((item) => {
                            return (
                              item !== 'PUSH_PERMISSION_STATUS' &&
                              item !== 'FCM_TOKEN' &&
                              item !== 'NOTIFICATION_OPEN_TIME'
                            );
                          });
                          AsyncStorage.multiRemove(finalKeys);
                        })
                        .then(() =>
                          setTimeout(
                            () => NavigationService.resetRoute('SignInScreen'),
                            400,
                          ),
                        );
                    }
                  } else {
                    showAlert(JSON.stringify(res));
                  }
                });
              } catch (error) {
                showAlert(`Something went wrong. ${JSON.stringify(error)}`);
              }
            } else if (Response.status === 404) {
              try {
                Response.json().then((res) => {
                  if (res.message) {
                    showAlert(res.message);
                  } else {
                    showAlert(JSON.stringify(res));
                  }
                });
              } catch (error) {
                showAlert(`Something went wrong. ${JSON.stringify(error)}`);
              }
            } else if (Response.status === 409) {
              Response.json().then((res) => {
                showAlert(JSON.stringify(res));
              });
            } else if (Response.status === 500) {
              showAlert('Internal Server Error!');
            } else {
              showAlert('Something went wrong!');
            }
          })
          .catch((error) => {
            showAlert(`Something went wrong. ${JSON.stringify(error)}`);
          });
      } catch (error) {
        showAlert(`Something went wrong. ${JSON.stringify(error)}`);
      }
    } catch (error) {
      showAlert(`Something went wrong. ${JSON.stringify(error)}`);
    }
  } else {
    Alert.showNetworkError();
  }
}

/**
 * Request Timeout Promise
 */
function requestTimeoutPromise(
  waitingTime,
  promise,
  resolveInternal,
  rejectInternal,
) {
  const timeoutId = setTimeout(() => {
    rejectInternal('TIMEOUT');
  }, waitingTime);
  try {
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolveInternal(res);
      },
      (resError) => {
        clearTimeout(timeoutId);
        rejectInternal('Request Timeout');
      },
    );
  } catch (error) {}
}
