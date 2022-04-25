import React from 'react';
import {Platform} from 'react-native';
import {connect} from 'react-redux';
import * as userActions from '../../actions/user';
import messaging from '@react-native-firebase/messaging';
import {
  Root,
  ScrollContainer,
  Touchable,
  BottomButton,
  DescText,
  SkipText,
  MainImage,
} from './style';
import {STR_CONST} from 'string_const';
import Container from '../../components/templates/container';
import Header from '../../components/organisms/header';
import * as CONST from '../../constants';
import Utility from '../../constants/utilis';
import NavigationService from '../../constants/navigations';
import {SetStoreData, KEYS} from '../../constants/storage';

const AllowNotification = (props) => {
  const onOKPress = async () => {
    const requestedStatus = await messaging().requestPermission();
    const isEnabled =
      requestedStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      requestedStatus === messaging.AuthorizationStatus.PROVISIONAL;

    let fcmToken = null;
    if (isEnabled) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        SetStoreData(KEYS.FCM_TOKEN, fcmToken);
      }
    }
    SetStoreData(KEYS.PUSH_PERMISSION_STATUS, requestedStatus);
    updateUserNotificationData(fcmToken, isEnabled);
  };

  const updateUserNotificationData = async (fcmToken, pushNotification) => {
    const {userProfile, updateUser, navigation} = props;
    const body = new FormData();
    body.append('pushNotification', pushNotification);
    body.append('deviceType', Platform.OS);
    body.append('deviceToken', fcmToken);
    const data = {
      body,
      id: userProfile?.id,
      onSuccess: () =>
        NavigationService.resetRoute(
          navigation?.state?.params?.isSignUp
            ? 'MakeDepositScreen'
            : 'DashBoardScreen',
        ),
    };
    updateUser(data);
  };

  const onNotNowPress = async () => {
    if (Platform.OS === 'android') {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        SetStoreData(KEYS.FCM_TOKEN, fcmToken);
      }
    }
    SetStoreData(
      KEYS.PUSH_PERMISSION_STATUS,
      messaging.AuthorizationStatus.DENIED,
    );
    updateUserNotificationData(null, false);
  };

  const renderBody = () => {
    return (
      <ScrollContainer>
        <Root>
          <MainImage />
          <DescText>{STR_CONST.allowNotificationsDesc}</DescText>
          <BottomButton
            text={Utility.changeStringStyle(STR_CONST.ok, 'fullCapital')}
            color={true}
            onPress={onOKPress}
          />
          <Touchable onPress={onNotNowPress}>
            <SkipText>
              {Utility.changeStringStyle(
                STR_CONST.gps_skip_btn_text,
                'fullCapital',
              )}
            </SkipText>
          </Touchable>
        </Root>
      </ScrollContainer>
    );
  };

  const renderHeader = () => {
    return <Header title={STR_CONST.allowNotifications} />;
  };

  return (
    <Container
      isImgBg={true}
      source={CONST.LOGINBG}
      body={renderBody()}
      header={renderHeader()}
    />
  );
};

const mapStateToProps = ({user}) => ({userProfile: user.userProfile});

const {updateUser} = userActions;
const mapDispatchToProps = {updateUser};

export default connect(mapStateToProps, mapDispatchToProps)(AllowNotification);
