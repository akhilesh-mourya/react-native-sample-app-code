export const SET_LOCATION_PERMISSION_RATIONALE_VISIBLE =
  'permission/set-location-permission-rationale-visible';
export const SET_LOCATION_PERMISSION_GUIDE_VISIBLE =
  'permission/set-location-permission-guide-visible';
export const SET_LOCATION_SETTING_RATIONALE_VISIBLE =
  'permission/set-location-setting-rationale-visible';

export const LOCATION_PERMISSION_GUIDE_ACKNOWLEDGED =
  'permission/location-permission-rationale-acknowledged';

export const acknowledgeLocationPermissionGuide = () => ({
  type: LOCATION_PERMISSION_GUIDE_ACKNOWLEDGED,
});

export const showLocationPermissionRationale = () => ({
  type: SET_LOCATION_PERMISSION_RATIONALE_VISIBLE,
  visible: true,
});

export const hideLocationPermissionRationale = () => ({
  type: SET_LOCATION_PERMISSION_RATIONALE_VISIBLE,
  visible: false,
});

export const showLocationPermissionGuide = () => ({
  type: SET_LOCATION_PERMISSION_GUIDE_VISIBLE,
  visible: true,
});

export const hideLocationPermissionGuide = () => ({
  type: SET_LOCATION_PERMISSION_GUIDE_VISIBLE,
  visible: false,
});

export const setLocationSettingRationaleVisible = (visible) => ({
  type: SET_LOCATION_SETTING_RATIONALE_VISIBLE,
  visible,
});

export const hideLocationSettingRationale = () => ({
  type: SET_LOCATION_SETTING_RATIONALE_VISIBLE,
  visible: false,
});

export const showLocationSettingRationale = () => ({
  type: SET_LOCATION_SETTING_RATIONALE_VISIBLE,
  visible: true,
});
