import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function resetRoute(routeName, params) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName, params})],
    }),
  );
}

function changeTabRoute(routeName, tab) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: routeName,
          action: NavigationActions.navigate({routeName: tab}),
        }),
      ],
    }),
  );
}

function getCurrentRoute() {
  return getRoute(_navigator.state.nav);
}

function getRoute(nav) {
  if (Array.isArray(nav.routes) && nav.routes.length > 0) {
    return getRoute(nav.routes[nav.index]);
  } else {
    return nav.routeName;
  }
}

function goBack() {
  const backAction = NavigationActions.back();
  _navigator.dispatch(backAction);
}

export default {
  navigate,
  resetRoute,
  changeTabRoute,
  setTopLevelNavigator,
  getCurrentRoute,
  goBack,
};
