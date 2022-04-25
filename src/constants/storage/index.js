import AsyncStorage from '@react-native-community/async-storage';
/**
 * Get data from store
 *
 * @param {string} key
 * @param {boolean} isString
 */
export async function GetStoreData(key, isString = true) {
  try {
    let data = await AsyncStorage.getItem(key);
    if (isString) {
      return data;
    }
    return JSON.parse(data);
  } catch (error) {}
  return false;
}

/**
 * Set data from store
 *
 * @param {string} key
 * @param {object} item
 */
export async function SetStoreData(key, item) {
  try {
    if (typeof item !== 'string') {
      item = JSON.stringify(item);
    }
    return await AsyncStorage.setItem(key, item);
  } catch (error) {}
}

/**
 * Remove data with associated key from store
 *
 * @param {string} key
 * @param {object} item
 */
export async function RemoveStoreData(key) {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {}
}

export const KEYS = {
  USER_INFO: 'USER_INFO',
  isLoggedIn: 'isLoggedIn',
  FCM_TOKEN: 'FCM_TOKEN',
  PUSH_PERMISSION_STATUS: 'PUSH_PERMISSION_STATUS',
  NOTIFICATION_OPEN_TIME: 'NOTIFICATION_OPEN_TIME',
  IS_SETTINGS_OPENED: 'IS_SETTINGS_OPENED',
  IS_CAMERA_PERMISSION_ASKED: 'IS_CAMERA_PERMISSION_ASKED',
  IS_PHOTO_LIBRARY_PERMISSION_ASKED: 'IS_PHOTO_LIBRARY_PERMISSION_ASKED',
};
