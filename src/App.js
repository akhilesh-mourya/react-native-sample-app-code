/* eslint-disable consistent-this */
import React, {Component} from 'react';
import {StatusBar, AppState, StyleSheet, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import codePush from 'react-native-code-push';
import DropdownAlert from 'react-native-dropdownalert';
import NetInfo from '@react-native-community/netinfo';
import {SafeAreaView} from 'react-native-safe-area-context';

import Navigator from './navigators/navigator';
import Spinner from './components/molecules/spinner';
import NavigationService from './constants/navigations';
import {Alert} from './constants/alert';
import Utility from './constants/utilis';
import {setAppState} from './actions/appStateActions';
import {getSports} from './actions/tournamentActions';
import OfflinePopup from './components/molecules/OfflinePopup/OfflinePopup';
import AskLocationPermissionPopup from './popups/askLocationPermission';
import AskLocationEnablePopup from './popups/askLocationEnable';
import LocationRationalePopup from './popups/locationRationale';
import CustomActionPopup from './popups/CustomActionPopup';
import colorTheme from './constants/theme';

export let appObj = {};

class App extends Component {
  constructor(props) {
    super(props);
    appObj = this;
    this.netInfoListner = null;
    this.state = {
      isNetworkPopupVisible: false,
      customActionPopupData: null,
    };
    console.disableYellowBox = true;
    Text.defaultProps = Text.defaultProps || {};
    TextInput.defaultProps = TextInput.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    codePush.sync({
      installMode: codePush.InstallMode.ON_NEXT_RESUME,
      minimumBackgroundDuration: 60 * 10,
    });

    this.netInfoListner = NetInfo.addEventListener(
      this.handleConnectivityChange,
    );
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (state) => {
    this.props.setAppState(state);
  };

  componentWillUnmount() {
    this.netInfoListner && this.netInfoListner();
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleConnectivityChange = (state) => {
    const route = NavigationService.getCurrentRoute(); // For getting Current active screen
    if (state.isConnected && route === 'HomeTournamentsScreen') {
      // If looged in & app starts when no internet & again come online
      this.props.getSports();
    }
    this.setState({isNetworkPopupVisible: !state.isConnected});
  };

  toggleNoNetworkPopup = () => {
    this.setState({isNetworkPopupVisible: !this.state.isNetworkPopupVisible});
  };

  showCustomActionPopup = (
    title,
    msg = '',
    positiveButtonText = 'OK',
    negativeButtonText = null,
    onPositiveButtonPress = null,
    onNegativeButtonPress = null,
  ) => {
    this.setState({
      customActionPopupData: {
        title: title,
        msg: msg,
        positiveButtonText: positiveButtonText,
        negativeButtonText: negativeButtonText,
        onPositiveButtonPress: onPositiveButtonPress,
        onNegativeButtonPress: onNegativeButtonPress,
      },
    });
  };

  dismissCustomActionPopup = () => {
    this.setState({
      customActionPopupData: null,
    });
  };

  spinner() {
    return <Spinner />;
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    const {customActionPopupData, isNetworkPopupVisible} = this.state;

    return (
      <>
        <SafeAreaView
          style={[
            styles.container,
            {
              backgroundColor: this.props.user
                ? colorTheme.COLORS.BG
                : colorTheme.COLORS.FILTER,
            },
          ]}
          edges={['right', 'bottom', 'left']}>
          <Navigator
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            uriPrefix={Utility.getDeepLink()}
          />
        </SafeAreaView>
        {this.spinner()}
        <DropdownAlert
          ref={(ref) => {
            Alert.setDropDown(ref);
          }}
          renderImage={() => null}
          tapToCloseEnabled
          useNativeDriver
          closeInterval={4000}
        />
        <OfflinePopup
          onClose={this.toggleNoNetworkPopup}
          visible={isNetworkPopupVisible}
        />
        <AskLocationPermissionPopup />
        <AskLocationEnablePopup />
        <LocationRationalePopup />
        {customActionPopupData && (
          <CustomActionPopup
            popupData={customActionPopupData}
            onClose={this.dismissCustomActionPopup}
          />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  setAppState,
  getSports,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
