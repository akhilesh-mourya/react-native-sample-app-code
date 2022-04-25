import scale from '../constants/scale';
import materialTheme from '../constants/theme';
import styled from 'styled-components/native';

import {dark} from '../theme/colors';
export default {
  tab: {
    backgroundColor: dark.inputBorder,
    borderBottomWidth: 0.1,
    borderTopColor: materialTheme.COLORS.WHITE,
    borderBottomColor: materialTheme.COLORS.WHITE,
    alignSelf: 'center',
    height: scale(52),
    paddingTop: scale(10),
    borderTopWidth: 0,
    elevation: 8,
    paddingBottom: 2,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  label: {
    fontSize: scale(10.5),
    margin: scale(4.5),
  },
};

export const TabIcon = styled.Image.attrs({})`
  width: ${scale(27)};
  height: ${scale(27)};
  resize-mode: contain;
`;
