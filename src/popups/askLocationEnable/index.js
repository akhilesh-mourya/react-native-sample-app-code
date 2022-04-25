import React from 'react';
import {connect} from 'react-redux';
import {STR_CONST} from 'string_const';
import {openSettings} from 'react-native-permissions';
import {NativeModules, Platform} from 'react-native';
import {
  Root,
  ContentContainer,
  Title,
  TitleBottomLine,
  Description,
  BottomButton,
} from './styles';

const AskLocationEnablePopup = ({locationSettingGuideVisible}) => {
  return !locationSettingGuideVisible ? null : (
    <Root>
      <ContentContainer>
        <Title>{STR_CONST.location_services}</Title>
        <TitleBottomLine />
        <Description>{STR_CONST.location_service_off_des}</Description>
        <BottomButton
          text={STR_CONST.open_setting_to_enable}
          color={true}
          onPress={openLocationSettings}
        />
      </ContentContainer>
    </Root>
  );
};

const openLocationSettings = () => {
  if (Platform.OS === STR_CONST.android) {
    NativeModules.RNOpenSettings.openLocationSetting();
  } else {
    openSettings();
  }
};

const mapStateToProps = ({permissions}) => ({
  locationSettingGuideVisible:
    permissions.popups.locationSettingRationaleVisible,
});

export default connect(mapStateToProps)(AskLocationEnablePopup);
