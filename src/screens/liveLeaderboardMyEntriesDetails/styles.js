import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {layout, space, color, border} from 'styled-system';
import {Text20, Text22} from '../../components/atom/Text';
import scale, {height} from '../../constants/scale';
import FONTS from '../../constants/fonts';
import materialTheme from '../../constants/theme';
import {TextS, TextM} from '../../components/atom/Text';
import * as CONST from '../../constants';
import {PlainRowContainer} from '../../components/atom/RowContainer';
export const Touchable = styled.TouchableWithoutFeedback``;

export const Scrollable = styled.ScrollView``;

export const Root = styled.View`
  ${(props) => props.top && `marginTop: ${props.top}`}
`;

export const ResultInfoBold = styled(Text20).attrs({})``;

export const BodyContainer = styled.View.attrs({
  flex: 1,
})`
  ${space} ${layout};
`;

export const UpcomingContainer = styled.View.attrs({
  backgroundColor: 'loginBox',
})`
margin-top: ${scale(10)};
margin-bottom: ${scale(13)};
${layout}
${color}
${space}`;

export const RootHeaderImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.ImageBackground.attrs({
  source: CONST.FINALICON,
  alignItems: 'center',
  alignSelf: 'center',
})`
  height: 29px;
  width: 160;
  justify-content: center;
  ${layout}
`;

export const FinalTitle = styled(TextS).attrs({
  textAlign: 'center',
})`
  ${layout}
`;

export const UpcomingTitleResult = styled(TextM).attrs({
  alignSelf: 'center',
  flex: 1,
  pt: 5,
  pb: 5,
  color: 'textTertiary',
})`
  ${layout}
`;

export const DividerImageComponent = styled.Image.attrs({
  alignSelf: 'center',
})`
  width: 320px;
  height: 2px ${space};
`;

export const ContainerView = styled.View.attrs({
  marginHorizontal: scale(5),
  alignSelf: 'center',
})`
  ${(props) => props.flex && `flex: ${props.flex}`}
  ${(props) =>
    props.marginHorizontal && `marginHorizontal: ${props.marginHorizontal}`}
`;

export const LiveTournamentIcon = styled.Image.attrs({
  mr: 3,
})`
  ${space}
`;

export const UserView = styled.View.attrs({
  borderColor: 'main',
  borderWidth: scale(1),
  borderRadius: scale(30.5),
})`
  width: ${scale(61)};
  height: ${scale(61)};
  align-items: center;
  justify-content: center;
  ${color}
  ${border}
`;

export const StandingContainer = styled.View.attrs({
  alignSelf: 'center',
})`
  margin-start: ${scale(11)};
  ${layout};
`;

export const RightContainer = styled.View.attrs({
  right: 15,
  alignSelf: 'center',
})`
  position: absolute ${layout} ${space};
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const UserIcon = styled.Image.attrs({
  borderWidth: scale(3),
  borderRadius: scale(26.5),
})`
  width: ${scale(55)};
  height: ${scale(55)};
  ${color}
  ${border}
`;

export const RootResult = styled(PlainRowContainer).attrs({})`
  ${layout}
  ${space}
`;

export const RankData = styled(Text22).attrs({
  color: 'main',
  fontFamily: 'bold',
})`
  ${(props) => props.reverse && 'align-self: flex-end'}
`;

export default StyleSheet.create({
  tab: {
    borderWidth: 0,
    borderColor: 'transparent',
    height: scale(40),
    backgroundColor: materialTheme.COLORS.BG,
    color: materialTheme.COLORS.WHITE,
  },
  tabTextStyle: {
    color: materialTheme.COLORS.WHITE,
    fontWeight: '600',
  },
  activeTab: {
    backgroundColor: materialTheme.COLORS.BG,
    borderWidth: 0,
  },
  activeTabTextStyle: {
    color: materialTheme.COLORS.GREEN,
  },
  tabText: {
    color: materialTheme.COLORS.BLACK,
    fontWeight: '600',
    fontFamily: FONTS.BOLD,
    fontSize: scale(14),
  },
  noEntrant: {
    alignItems: 'center',
    marginVertical: height / 3,
  },
});
