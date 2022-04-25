import {put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import * as CONST from '../constants';
import {CommonFetch} from '../services/api';
import * as userActions from '../actions/user';
import * as tutorialActions from '../actions/tutorialActions';
import * as CommonActions from '../actions/commonActions';
import NavigationService from '../constants/navigations';
import {SetStoreData, GetStoreData, KEYS} from 'async_storage';
import {Alert} from '../constants/alert';
import {API} from '../constants/apiConstants';
import {appObj} from '../App';

const opts = {
  method: '',
  url: null,
  body: null,
  type: null,
  headers: null,
};

export function* login(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = API.LOGIN;
  try {
    const res = yield call(CommonFetch, action.data.body, opts);
    if (res) {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.loginSuccess(res.body));
      SetStoreData(KEYS.isLoggedIn, true);
      SetStoreData(KEYS.USER_INFO, {user: res.body});
      if (res.body?.user) {
        yield put(userActions.getUserAccountBalence(res.body.user.id));
      }
      action.data?.onSuccess();
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.loginFaliure(res));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(userActions.loginFaliure(error));
  }
}

export function* states(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.GET_API;
  opts.url = API.USER_METADATA;
  yield put(CommonActions.stopSpinner());
  try {
    const res = yield call(CommonFetch, null, opts);
    if (res) {
      const tutorialData = res?.body?.onboarding.filter((item) => !!item);
      yield put(userActions.statesSuccess(res.body));
      yield put(tutorialActions.tutorialDataSuccess(tutorialData));
      NavigationService.navigate(action.data.screen);
    } else {
      yield put(userActions.statesFaliure(res));
      yield put(tutorialActions.tutorialDataFaliure(res));
    }
  } catch (error) {
    yield put(userActions.statesFaliure(error));
    yield put(tutorialActions.tutorialDataFaliure(error));
  }
}

export function* userExist(action) {
  if (action.data.isLoader) {
    yield put(CommonActions.startSpinner());
  }
  opts.method = CONST.POST_API;
  opts.url = API.VALIDATE_USER;
  try {
    const res = yield call(CommonFetch, action.data.user, opts);
    if (res) {
      yield put(userActions.userExistSuccess(res.body));
      if (action.data.screen === 'ChooseStateScreen') {
        yield put(userActions.states(action.data));
      } else {
        yield put(CommonActions.stopSpinner());
        NavigationService.navigate(action.data.screen);
      }
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.userFaliure(res));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(userActions.userFaliure(error));
  }
}

export function* signUp(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = API.REGISTER;
  try {
    const res = yield call(CommonFetch, action.data.body, opts);
    if (res) {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.signUpSuccess(res.body));
      yield put(userActions.updateSignUpInfo({}));
      SetStoreData(KEYS.isLoggedIn, true);
      SetStoreData(KEYS.USER_INFO, {user: res.body});
      if (res.body?.user) {
        yield put(userActions.getUserAccountBalence(res.body.user.id));
      }
      //NavigationService.resetRoute('LocationScreen');
      if (action.data.isPermissionDetermined) {
        NavigationService.resetRoute('MakeDepositScreen');
      } else {
        NavigationService.resetRoute('AllowNotificationScreen', {
          isSignUp: true,
        });
      }
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.signUpFailure(res));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(userActions.signUpFailure(error));
  }
}

export function* forgetPassword(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = API.FORGOT_PASSWORD;
  try {
    const res = yield call(CommonFetch, action.data, opts);
    if (res) {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.forgotPasswordSuccess(true));
      appObj.showCustomActionPopup(
        null,
        'Please check your email to reset the password!',
        'OK',
        null,
        () => NavigationService.navigate('SignInScreen'),
      );
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.forgotPasswordFaliure(res));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(userActions.forgotPasswordFaliure(error));
  }
}

export function* resetPassword(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = API.RESET_PASSWORD + `?token=${action.data.token}`;
  try {
    const res = yield call(CommonFetch, action.data.body, opts);
    if (res) {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.resetPasswordSuccess(res.body));
      Alert.showSuccess(res.body.message);
      NavigationService.navigate('SignInScreen');
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.resetPasswordFaliure(res));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(userActions.resetPasswordFaliure(error));
  }
}

export function* logout(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.POST_API;
  opts.url = API.LOGOUT;
  try {
    const res = yield call(CommonFetch, action.data, opts);
    if (res) {
      NavigationService.resetRoute('SignInScreen');
      AsyncStorage.getAllKeys().then((keys) => {
        const finalKeys = keys.filter((item) => {
          return (
            item !== 'PUSH_PERMISSION_STATUS' &&
            item !== 'FCM_TOKEN' &&
            item !== 'NOTIFICATION_OPEN_TIME'
          );
        });
        AsyncStorage.multiRemove(finalKeys);
      });
      yield put(userActions.logoutSuccess(res));
      yield put(CommonActions.stopSpinner());
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.logoutFaliure(res));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(userActions.logoutFaliure(error));
  }
}

export function* userProfile(action) {
  if (action.data.isLoader) {
    yield put(CommonActions.startSpinner());
  }
  opts.method = CONST.GET_API;
  opts.url = API.USERS + `/${action.data.id}`;
  try {
    const res = yield call(CommonFetch, null, opts);
    if (res) {
      yield put(CommonActions.stopSpinner());
      getUser(res.body)
        .then((json) => {
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
      yield put(userActions.userSuccess(res.body));
      if (action.data.callBack && typeof action.data.callBack === 'function') {
        action.data.callBack();
      }
    } else {
      yield put(CommonActions.stopSpinner());
      yield put(userActions.userFaliure(res));
    }
  } catch (error) {
    yield put(CommonActions.stopSpinner());
    yield put(userActions.userFaliure(error));
  }
}

export function* updateUserProfile(action) {
  yield put(CommonActions.startSpinner());
  opts.method = CONST.PATCH_API;
  opts.url = API.USERS + `/${action.data.id}`;
  opts.headers = {
    'Content-Type': 'multipart/form-data',
  };
  try {
    const res = yield call(CommonFetch, action.data.body, opts);
    if (res) {
      yield put(userActions.updateUserSuccess(res.body));
      if (action.data.onSuccess) action.data.onSuccess();
    } else {
      yield put(userActions.updateUserFaliure(res));
    }
  } catch (error) {
    yield put(userActions.updateUserFaliure(error));
  }
  yield put(CommonActions.stopSpinner());
  opts.headers = null;
}

async function getUser(body) {
  const userInfo = await GetStoreData(KEYS.USER_INFO, false);
  let data = {};
  if (userInfo) {
    data = {
      user: Object.assign({}, userInfo.user.user, body),
      tokens: userInfo.user.tokens,
    };
    SetStoreData(KEYS.USER_INFO, {user: data});
  }
  return data;
}

export function* getUserAccountBalance(action) {
  opts.method = CONST.GET_API;
  opts.url = API.USERS + `/${action.userId}` + API.GET_ACCOUNT_BALANCE;
  const res = yield call(CommonFetch, null, opts);
  if (res) {
    yield put(userActions.getUserAccountBalanceSuccess(res.body));
  } else {
    yield put(userActions.getUserAccountBalanceFaliure(res));
  }
}
