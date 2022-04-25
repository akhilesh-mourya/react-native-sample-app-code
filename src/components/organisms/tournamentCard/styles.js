import styled from 'styled-components/native';
import {layout, space} from 'styled-system';
import {Text13, Text14} from '../../atom/Text';
import {dark} from '../../../theme/colors';
import scale from '../../../constants/scale';

export const MainContainer = styled.View.attrs({})`
  ${layout}
  ${space}
`;

export const Container = styled.View.attrs({
  padding: scale(5),
})`
  flex-direction: row;
  justify-content: space-between;
  ${layout}
  ${space}
`;

export const SubContainer = styled.View.attrs({})`
  justify-content: center;
  align-items: center;
  ${layout}
  ${space}
`;

export const SubValue = styled(Text13).attrs({
  fontFamily: 'regular',
})`
  color: ${(props) => (props.isSelected ? dark.accent : dark.inputField)};
`;

export const SubTitle = styled(Text14).attrs({
  fontFamily: 'regular',
  mt: scale(4),
})`
  color: ${(props) => (props.isSelected ? dark.main : dark.textTertiary)};
`;

export const Separator = styled.View.attrs({
  height: scale(1),
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 3},
  shadowOpacity: 0.9,
  shadowRadius: 1,
  elevation: 5,
})`
  ${layout}
  ${space}
`;
