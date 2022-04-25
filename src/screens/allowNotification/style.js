import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {color, layout, space} from 'styled-system';
import {TextL, TextML, TextXl} from '../../components/atom/Text';
import {NOTIFICATION_PERMISSION} from '../../constants';
import {CommonButton} from '../../components/atom/ButtonNew';
const {height} = Dimensions.get('window');

export const Touchable = styled.TouchableWithoutFeedback``;

export const TouchableB = styled.TouchableOpacity``;

export const ScrollContainer = styled.ScrollView``;

export const Root = styled.View.attrs({
  flex: 1,
  alignItems: 'center',
})`
  ${layout}
`;

export const MainImage = styled.Image.attrs({
  source: NOTIFICATION_PERMISSION,
  height: 180,
  width: 160,
  resizeMode: 'contain',
  mt: 20,
})`
  ${space};
  ${layout};
`;

export const MainTitle = styled(TextXl).attrs({
  mt: 8,
  color: 'textMain',
})`
  ${space}
  ${color}
  ${layout}
`;

export const BottomButton = styled(CommonButton).attrs({
  width: '85%',
  alignSelf: 'center',
})``;

export const DescText = styled(TextL).attrs({
  color: 'textMain',
  textAlign: 'center',
  mt: 55,
  mb: height * 0.22,
})`
  ${space}
`;

export const SkipText = styled(TextML).attrs({
  fontFamily: 'bold',
  mt: 36,
})``;

export const styles = StyleSheet.create({
  mainTitle: {
    paddingTop: 10,
  },
});
