import {Platform} from 'react-native';

export default {
  BOLD: 'Roboto-Bold',
  REGULAR: 'Roboto-Regular',
  MEDIUM: 'Roboto-Medium',
  LIGHT: 'Roboto-Light',
  SFUIDisplay_BOLD:
    Platform.OS === 'ios' ? 'SFUIDisplay-Bold' : 'SF-UI-Display-Bold',
  SFUIDisplay_MEDIUM:
    Platform.OS === 'ios' ? 'SFUIDisplay-Medium' : 'SF-UI-Display-Medium',
  SFUITEXT_REGULAR:
    Platform.OS === 'ios' ? 'SFUIText-Regular' : 'SF-UI-Text-Regular',
  SFCOMPACT_DISPLAY_REGULAR:
    Platform.OS === 'ios'
      ? 'SFCompactDisplay-Regular'
      : 'SF-Compact-Display-Regular',
};
