import styled from 'styled-components/native';
import {color, layout, space, border} from 'styled-system';
import {dark} from '../../theme/colors';
import {
  Text10,
  Text11,
  Text13,
  Text14,
  Text16,
  Text18,
  TextM,
  TextS,
  Text12,
  TextXs,
} from '../../components/atom/Text';
import scale, {width} from '../../constants/scale';
import {CommonButton} from '../../components/atom/ButtonNew';

export const BodyContainer = styled.View.attrs({
  flex: 1,
  mt: scale(5),
  backgroundColor: dark.buttonBlack,
})`
  justify-content: center;
  ${layout}
  ${space}
`;

export const BodyScrollContainer = styled.ScrollView.attrs({
  flex: 1,
  mt: scale(5),
})`
  background-color: ${dark.rostersBg};
  ${layout} ${space};
`;

export const SubContainer = styled.View.attrs({
  flex: 1,
  mt: scale(5),
})`
  ${layout}
  ${space}
`;

export const InfoContainer = styled.View.attrs({
  bg: 'loginBox',
  borderRadius: scale(10),
})`
  width: 100%;
  margin-top: ${scale(8)};
  ${(props) => props.isActive && 'padding-top: 15'}
  ${(props) => props.isOpen && 'padding-bottom: 8'}
  ${color} ${border};
`;

export const ArrowTouchable = styled.TouchableOpacity.attrs({
  flex: 1,
})``;

export const InfoIcon = styled.Image.attrs({})`
  ${layout}
`;

export const DownIcon = styled.Image.attrs({})`
  margin-right: ${scale(10)} ${layout};
`;

export const SmallTextOther = styled(Text10)`
  color: ${dark.lightText};
  margin-top: ${scale(5)};
`;

export const BigTextOther = styled(Text14).attrs({
  fontFamily: 'bold',
})`
  ${(props) =>
    props.isPanulty ? `color: ${dark.errorRed}` : `color: ${dark.main}`}
`;

export const BoxContainerEntryHeader = styled.View.attrs({
  bg: 'loginBox',
  borderRadius: scale(5),
  justifyContent: 'center',
})`
  align-items: center;
  height: ${scale(48)};
  width: ${scale(89)};
  ${color}
  ${layout}
`;

export const InfoTachableContainer = styled.View.attrs({
  flex: 1,
})`
  ${layout}
`;

export const TeamSubContainer = styled.View.attrs({})`
  padding-horizontal: ${scale(11)};
  padding-vertical: ${scale(15)};
  align-items: center;
  flex-direction: row;
  ${color}
`;
export const ChifRosterContainer = styled.View.attrs({})`
  background-color: ${dark.loginBox};
  margin-top: ${scale(10)};
  padding-top: ${scale(10)};
  border-radius: ${scale(10)};
  ${layout} ${space};
`;

export const RostersSubContainer = styled.View.attrs({})`
  background-color: ${dark.boosterBG};
  margin-horizontal: ${scale(16.5)};
  margin-top: ${scale(10)};
  margin-bottom: ${scale(10)};
  padding-top: ${scale(9)};
  border-radius: ${scale(5)};
  ${layout} ${space};
`;

export const RosterInstructionRowContainer = styled.View.attrs({
  flexDirection: 'row',
  alignItems: 'center',
})`
  margin-bottom: ${scale(10)};
  padding-end: ${scale(20)};
   ${layout} ${space} ${border};
`;

export const IconicText = styled(Text14).attrs({
  width: scale(17),
  height: scale(17),
  fontFamily: 'bold',
  color: 'errorRed',
})`
  ${(props) => !props.isPlayerView && `margin-start: ${scale(15)}`}
  ${layout};
`;

export const ScoreHeader = styled.View.attrs({
  flexDirection: 'row',
  mt: scale(21),
  marginHorizontal: scale(21),
  justifyContent: 'space-between',
  borderBottomWidth: scale(1),
  paddingBottom: scale(8),
  borderBottomColor: dark.greyBorderBG,
})`
  ${layout} ${space}${border};
`;

export const ScoreValueContainer = styled.View.attrs({
  flexDirection: 'row',
  mt: scale(21),
  marginHorizontal: scale(21),
  justifyContent: 'space-between',
  borderBottomWidth: scale(1),
  paddingBottom: scale(19),
  borderBottomColor: dark.greyBorderBG,
})`
  ${layout} ${space};
`;

export const Block = styled.View.attrs({
  flex: 1,
})`
  ${space}
`;

export const TournamentInfoContainer = styled.View.attrs({
  mt: scale(5),
  mb: scale(5),
  flexDirection: 'row',
  backgroundColor: 'loginBox',
})`
  ${space}
  ${color}
`;

export const Touchable = styled.TouchableOpacity``;

export const TournamentMenuContainer = styled.ImageBackground.attrs({
  backgroundColor: 'loginBox',
})`
  height: ${scale(48)};
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.index === 1 || props.index === 2
      ? `width: ${scale(width / 4.1)}`
      : `width: ${scale(width / 6)}`}
  
  ${(props) => props.index === 0 && `padding-start : ${scale(6)} `}
  ${layout}
  ${space}
  ${color}
`;

export const Underline = styled.View.attrs({
  backgroundColor: 'main',
})`
  ${(props) => props.isSelected && 'height: 1'}
  align-self: center;
    justify-content: center;

  ${(props) =>
    props.index === 1 || props.index === 2
      ? `width: ${scale(width / 5)}`
      : `width: ${scale(width / 6)}`}
  ${(props) => props.index === 3 && `width: ${scale(width / 6.5)}`}
  ${space}
  ${color}
`;

export const RosterTitleText = styled(Text16).attrs({
  color: 'main',
})`
  font-weight: 600;
  align-self: center;
  text-align: center;
  ${space}
  ${layout}
`;

export const SelectTeamCount = styled(Text16).attrs({
  color: 'accent',
  fontFamily: 'bold',
})`
  align-self: center;
  text-align: center;
  margin-bottom: ${scale(24)};
  ${space} ${layout};
`;

export const TournamentMenuText = styled(Text14).attrs({
  fontFamily: 'regular',
  color: 'tournamentDate',
})`
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: ${scale(3)};
  ${space} ${layout};
`;

export const ScoreTypeText = styled(Text13).attrs({
  fontFamily: 'regular',
  color: 'lightGrey',
})`
  max-width: ${scale(width / 1.3)};
  align-items: center;
`;

export const InfoText = styled(Text11).attrs({
  fontFamily: 'regular',
  color: 'textMain',
})`
  margin-start: ${scale(12)};
  padding-end: ${scale(20)};
  align-items: center;
`;

export const AccordianText = styled(Text14).attrs({
  fontFamily: 'bold',
})`
  margin-start: ${scale(12)};
  padding-end: ${scale(20)};
  align-items: center;
  ${(props) =>
    !props.isActive ? `color: ${dark.errorRed}` : `color: ${dark.main}`}
`;

export const PointText = styled(Text14).attrs({
  fontFamily: 'regular',
})`
  color: ${(props) => props.textColor};
`;

export const TOP = styled.View.attrs({})`
  margin-top: ${scale(10)} ${space};
`;

export const SubmitButton = styled(CommonButton).attrs({
  mb: scale(50),
  height: scale(50),
  ml: scale(60),
  mr: scale(60),
})`
  align-items: center; 
  border-radius: ${scale(9)};
  ${layout}
  ${space}
  ${border}
`;

export const AddAnotherButton = styled.View.attrs({
  mb: scale(100),
  mt: scale(30),
  height: scale(45),
  ml: scale(56),
  mr: scale(56),
  backgroundColor: 'main',
})`
  align-items: center; 
  justify-content:center;
  flex-direction:row;
  border-radius: ${scale(9)};
  ${layout}
  ${space}
  ${border}
  ${color}
`;
export const AddIcon = styled.Image.attrs({})`
  align-items: center;
  position: absolute;
  start: ${scale(34)};
  border-radius: ${scale(9)};
 } ${layout} ${border};
`;
export const ButtonText = styled(Text18).attrs({
  fontFamily: 'bold',
  color: 'buttonBlack',
})`
  margin-start: ${scale(15)};
  align-items: center;
  align-self: center;
  ${layout} ${border};
`;

export const NotFoundContainer = styled.View.attrs({
  flex: 1,
})`
  align-items: center;
  justify-content: center;
  ${space}
`;

export const NotFoundText = styled(Text14).attrs({
  fontFamily: 'regular',
  color: 'lightGrey',
})`
  ${layout} ${border};
`;

export const Root = styled.View`
  justify-content: center;
`;

export const OtherRoot = styled.View``;

export const OtherRootContainer = styled.View`
  flex: 1;
`;

export const ImageIcon = styled.Image.attrs({
  width: scale(17),
  height: scale(17),
  alignSelf: 'center',
})`
  ${layout}
`;

export const ImageIconOther = styled.Image.attrs({
  width: scale(17),
  height: scale(17),
})`
  margin-left: ${scale(15)};
  ${layout};
`;

export const PlayerIcon = styled.Image.attrs({
  width: scale(37),
  height: scale(51),
})`
  margin-start: ${scale(6.5)};
  ${layout};
`;

export const PlayerIconOther = styled.Image.attrs({
  width: scale(45),
  height: scale(40),
})`
  ${layout}
`;

export const PlayerNameContainer = styled(Text14).attrs({
  numberOfLines: 1,
})`
  margin-top: ${scale(10)};

  align-self: flex-start;
  text-align: left;
  margin-left: ${scale(5)};
`;

export const PlayerNameContainerOther = styled(Text14).attrs({
  numberOfLines: 1,
  ml: scale(2),
})`
  align-self: center;
  text-align: left;
  ${layout}
  ${space}
`;

export const PlayerNameContainerSelection = styled(
  Platform.OS === 'android' ? TextS : TextM,
).attrs({
  maxWidth: scale(Platform.OS === 'android' ? 100 : 115),
  numberOfLines: 1,
  ml: scale(2),
})`
  align-self: center;
  text-align: left;
  margin-left: 1;
  ${layout}
  ${space}
`;

export const FPPGTextContainerSelection = styled(
  Platform.OS === 'android' ? TextXs : TextS,
)`
  align-self: center;
  text-align: left;
  ${layout}
`;

export const FPPGTextContainerEntry = styled(TextM).attrs({
  minWidth: scale(38),
})`
  align-self: center;
  text-align: right;
  ${layout}
`;

export const TextContainerEntry = styled(Text12).attrs({
  minWidth: scale(22),
})`
  margin-top: ${scale(10)};
  align-self: center;
  text-align: center;
  ${layout}
`;

export const PlayerReservedTypeText = styled(Text14).attrs({
  minWidth: scale(22),
  color: 'errorRed',
})`
  margin-top: ${scale(7)};
  align-self: center;
  text-align: center;
  ${layout}
  ${color}
`;

export const TextContainerOther = styled(Text14).attrs({
  mt: scale(2),
  color: 'lightText',
})`
  align-self: center;
  ${layout}
  ${color}
  ${space}
`;

export const HeaderLeftTextContainer = styled(TextXs).attrs({
  ml: scale(8),
})`
  align-self: center;
  text-align: center;
  ${layout}
`;

export const EsitmateText = styled(TextM)`
  align-self: center;
  text-align: center;
  ${layout}
  ${color}
`;

export const EsitmateTextFpOther = styled(TextXs)`
  color: #50c433;
  font-weight: 600;
  align-self: center;
  text-align: center;
  font-size: 11px;
  ${layout}
`;

export const HeaderMiddleTextContainer = styled(TextXs).attrs({
  ml: scale(8),
})`
  align-self: center;
  text-align: center;
  ${layout}
  ${space}
`;

export const HeaderRightTextContainer = styled(TextXs)`
  align-self: center;
  text-align: center;
  ${layout}
  ${space}
`;

export const LineContainer = styled.View.attrs({
  width: scale(1.5),
  height: scale(25),
  bg: 'textMain',
})`
  margin-horizontal: ${scale(10)};
  ${color};
`;

export const OtherLineContainer = styled.View.attrs({
  width: scale(1.5),
  height: '100%',
  bg: '#383636',
})`
  margin-horizontal: ${scale(10)};
  align-self: center;
  ${color}
`;

export const SelectionLineContainer = styled.View.attrs({
  width: scale(1.5),
  height: '100%',
  bg: '#383636',
})`
  margin-right: ${scale(6)};
  align-self: center;
  ${color}
`;

export const EstimateHeaderContainer = styled.View.attrs({
  mb: scale(5),
})`
  flex-direction: row;
  justify-content: space-between;
  ${space}
  ${layout}
`;

export const InnerContainer = styled.View.attrs({
  backgroundColor: 'inputBorder',
  borderRadius: scale(5),
})`
  margin-bottom: ${scale(7)};
  padding-horizontal: ${scale(10)};
  height: ${scale(55)};
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  ${layout}
  ${color}
`;

export const HeaderContainer = styled.View.attrs({
  backgroundColor: '#191818',
  padding: scale(3),
  mt: -scale(3),
  ml: scale(8),
  mr: scale(10),
  pt: scale(7),
})`
  height:${scale(35)};
  flex-direction: row;
  justifyContent: space-around;
  flex:1;
  ${space}
  ${layout}
  ${(props) => (!props.home_added ? 'marginTop: -30' : 'marginTop: -3')}
`;

export const HeaderOtherContainer = styled.View.attrs({
  backgroundColor: 'loginBox',
})`
  margin-top: ${scale(-10)};
  padding-top: ${scale(14)};
  padding-horizontal: ${scale(10)};
  margin-horizontal: ${scale(20)};
  justify-content: space-around;
  flex: 1;
  ${layout}
  ${color}
`;

export const HeaderContainerEntry = styled.View.attrs({
  bg: 'boxBg',
})`
 height: ${scale(35)};
 flex-direction: row;
 justifyContent: space-around;
 flex:1;
 ${space}
 ${layout}
 ${color}
`;

export const HeaderEntry = styled.View.attrs({
  bg: 'loginBox',
})`
padding-horizontal:${scale(24)};
padding-top:${scale(13)};
  height: ${scale(80)};
  ${space}
  ${layout}
  ${color}
`;

export const LeftContainer = styled.View`
  flex: 0.49;
  flex-direction: row;
  align-self: center;
  ${space}
  ${layout}
`;

export const LeftContainerEntry = styled.View`
  flex: 0.5;
  flex-direction: row;
  align-self: center;
  overflow: hidden;
  position: absolute;
  start: 11;
  ${space}
  ${layout}
`;

export const RightContainerEntry = styled.View`
  flex: 0.8;
  flex-direction: row;
  align-self: center;
  align-items: center;
  position: absolute;
  end: 3;

  justify-content: center ${space} ${layout};
`;

export const RightContainer = styled.View`
  flex: 0.49;
  flex-direction: row;
  align-self: center;
  justify-content: space-around ${space} ${layout};
`;

export const OuterContainer = styled.View.attrs({
  mt: -scale(2),
  ml: scale(8),
  mr: scale(10),
  pt: scale(2),
  pb: scale(2),
  pl: scale(4),
  pr: scale(4),
  bg: '#191818',
})`
  flex:1;
  flex-direction: row;
  justifyContent: space-around;
  ${space}
  ${layout}
  ${color}
`;

export const OuterContainerEntry = styled.View.attrs({
  mb: scale(0),
  bg: 'loginBox',
})`
  flex:1;
  padding-horizontal:${scale(17)};

  flex-direction: row;
  justifyContent: space-around;
  ${space}
  ${layout}
  ${color}
`;

export const OtherContainerEntry = styled.View.attrs({
  mt: scale(-9),
  mb: scale(0),
  ml: scale(8),
  mr: scale(8),
  pt: scale(3),
  pb: scale(3),
  pl: scale(4),
  pr: scale(4),
  bg: 'boxBg',
})`
  flex:1;
  flex-direction: row;
  justifyContent: space-around;
  ${space}
  ${layout}
  ${color}
`;

export const OtherContainer = styled.View.attrs({
  bg: 'loginBox',
})`
  flex: 1;
  flex-direction: row;
  padding-top: ${scale(8)};
  margin-horizontal: ${scale(20)};
  padding-horizontal: ${scale(14)};
  ${layout}
  ${color}
`;

export const SelectionContainer = styled.View.attrs({
  mt: scale(-3),
  pt: scale(1),
  ml: scale(7),
  mr: scale(8),
  pl: scale(6),
  pr: scale(7),
  bg: 'inputBorder',
})`
  flex:1;
  flex-direction: row;
  justifyContent: space-around;
  
  ${space}
  ${layout}
  ${color}
`;

export const OtherInnerContainer = styled.View.attrs({
  backgroundColor: 'inputBorder',
  borderRadius: scale(8),
  marginVertical: scale(4),
  ml: scale(2),
  mr: scale(2),
  mt: scale(4),
  mb: scale(1),
})`
  height: ${scale(83)};
  flex-direction: row;
  flex: 0.5;
  ${layout}
  ${color}
`;

export const SelectionInnerContainer = styled.View.attrs({
  backgroundColor: '#020202',
  borderRadius: scale(8),
  mt: scale(3),
  flex: 1,
})`
  height: ${scale(95)};
  flex-direction: row;
  ${space}
  ${layout}
`;

export const OtherRowContainerTop = styled.View.attrs({
  paddingLeft: scale(6),
  paddingRight: scale(6),
  padding: scale(4),
  paddingTop: scale(7),
})`
  flex-direction: row;
  alignself: stretch;
  width: 100%;
  flex: 1;
  ${color}
  ${layout}
`;

export const OtherRowItems = styled.View.attrs({})`
  flex-direction: row;
  justify-content: flex-start ${color} ${layout};
`;

export const DIVIDER = styled.View.attrs({})`
  align-items: stretch;
  margin-top: ${scale(7)};
  height: 1px;
  width: 100%;
  background: #383636;
`;

export const BoxContainerTeam = styled.View.attrs({
  padding: scale(4),
  minWidth: scale(70),
  bg: 'boxBg',
  borderRadius: scale(5),
  pt: scale(6),
  pb: scale(6),
})`
  align-items: center;
  justify-content: center;
  ${color}
  ${space}
  ${layout}
`;

export const BoxContainerOtherHeader = styled.View.attrs({
  bg: 'inputBorder',
  borderRadius: scale(5),
  justifyContent: 'center',
  flex: 0.24,
})`
  height: ${scale(48)};
  padding-left: ${scale(5)};
  ${color}
  ${layout}
`;
export const BigText = styled(TextM).attrs({})`
  ${(props) =>
    props.color ? 'color: #50c433' : 'color: rgba(255,255,255,0.5)'}
`;

export const RowView = styled.View.attrs({
  flex: 1,
})`
  flex-direction: row;
  justify-content: space-around;
  ${(props) => props.topMargin && 'margin-top: 5'}
  ${layout}
  ${color}
`;

export const DashViewContainerSelection = styled.View.attrs({
  width: scale(28),
})`
  align-items: center;
  justify-content: center;
  ${layout}
`;
export const OtherRowContainerComparisionTop = styled.View.attrs({
  padding: scale(4),
})`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  ${color}
  ${layout}
  ${space}
`;
export const DividerComparision = styled.View`
  align-items: stretch;
  height: 1px;
  width: 100%;
  background: #383636;
`;
export const BoxContainerOtherHeaderComparision = styled.View.attrs({
  borderRadius: scale(5),
  justifyContent: 'center',
  alignSelf: 'center',
  pl: scale(2),
  flex: 0.8,
})`
  ${(props) => (props.width ? `width: ${props.width}` : 'width: 81')}
    ${color}
    ${space}
    ${layout}
  `;
export const RowViewComparision = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${layout}
`;
export const BigTextEntryComparision = styled(Text14)`
  margin-start: ${scale(12)};
  color: ${dark.lightText};
`;
export const EmptyRowView = styled.View`
  border-right-width: ${scale(2)};
  border-right-color: ${dark.loginBox};
  flex: 0.3;
`;
export const OtherRowContainerComparision = styled.View.attrs({
  paddingLeft: scale(3),
  paddingRight: scale(3),
})`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  ${color}
  ${layout}
`;
export const ColumnContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const EntryPlayerNameContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-start: ${scale(12)};
`;

export const ActivityContainer = styled.View.attrs({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})``;

export const BigTextEntry = Text14;
