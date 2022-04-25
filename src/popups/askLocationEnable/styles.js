import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {TextXxxl, TextM} from '../../components/atom/Text';
import {DPLINEBG} from '../../constants';
import {color, border, layout, space} from 'styled-system';
import {CommonButton} from '../../components/atom/ButtonNew';
import DreampickPopup from '../DreampickPopup';

export const Root = DreampickPopup;

export const ContentContainer = styled.View.attrs({
  bg: 'bgPopup',
  borderRadius: 'card',
})`
  align-items: center;
  ${color}
  ${border}
`;

export const Title = styled(TextXxxl).attrs({
  fontFamily: 'bold',
  mt: 9,
  mb: 5,
  color: 'main',
})`
  ${space}
  ${color}
`;

export const TitleBottomLine = styled.Image.attrs({
  source: DPLINEBG,
  mb: 4,
})`
  width: 240;
  height: 2;
  resize-mode: stretch;
  ${space}
`;

export const Description = styled(TextM).attrs({
  color: 'textMain',
  mt: 8,
  ml: Platform.OS === 'ios' ? 13 : 10,
  mr: Platform.OS === 'ios' ? 13 : 10,
  mb: 5,
})`
  text-align: center;
  opacity: 0.6;
  ${space}
  ${color}
`;

export const BottomButton = styled(CommonButton).attrs({
  height: 50,
  mt: 11,
  ml: Platform.OS === 'ios' ? 10 : 9,
  mr: Platform.OS === 'ios' ? 10 : 9,
  mb: 10,
})`
    align-items: center; 
    border-radius: 9;
    align-self: stretch;
    ${layout} ${space} ${border}`;
