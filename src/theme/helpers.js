import {Platform} from 'react-native';
const isIos = Platform.OS === 'ios';

const fontStyles = {
  regular: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
  },
  bold: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
  },
};

// ------- Styled system helpers -------
export const fontFamilyHelper = ({fontFamily = 'regular'}) => {
  const fontsObject = fontStyles[fontFamily];
  if (!fontsObject) {
    return `font-family: ${fontFamily};`;
  }
  return `font-family: ${fontsObject.fontFamily};${
    isIos ? `font-weight: ${fontsObject.fontWeight};` : ''
  }`;
};
