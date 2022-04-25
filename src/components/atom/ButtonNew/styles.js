import styled from 'styled-components/native';
import {space, color, border, layout} from 'styled-system';
import {TextXl, TextML, Text18} from '../Text';
import scale from '../../../constants/scale';

export const Touchable = styled.TouchableWithoutFeedback``;

export const Container = styled.View.attrs({
  backgroundColor: 'main',
  borderRadius: 'card',
  pl: scale(7),
  pr: scale(7),
  height: 'buttonHeight',
})`
  align-items: center;
  justify-content: center;
  ${space}
  ${color}
  ${layout}
  ${border}
`;

export const Text = styled(TextXl).attrs({
  fontFamily: 'bold',
})``;

export const TextMedium = styled(TextML).attrs({
  fontFamily: 'bold',
  color: 'buttonBlack',
})`
  text-align: center;
`;

export const TextXxL = styled(Text18).attrs({
  fontFamily: 'bold',
  color: 'buttonBlack',
})`
  text-align: center;
`;
