import styled from 'styled-components/native';
import {color, layout, space} from 'styled-system';
import {Platform, Dimensions} from 'react-native';
import {
  TextM,
  TextXs,
  TextS,
  Text10,
  Text12,
  Text14,
  Text15,
} from '../../atom/Text';
import {dark} from '../../../theme/colors';
import scale from '../../../constants/scale';
import LinearGradient from 'react-native-linear-gradient';

export const Root = styled.View`
  justify-content: center;
`;
export const Root1 = styled.View`
  justify-content: center;
`;

const width = Dimensions.get('window').width;

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
  ${layout}
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
  align-self: center;
  text-align: center;
  ${layout}
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
  height: ${scale(68)};
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
  backgroundColor: 'transparent',
})`
  margin-top: ${scale(-7)};
  padding-top: ${scale(14)};
  padding-horizontal: ${scale(5)};
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
  flex: 0.63;
  flex-direction: row;
  align-self: center;
  overflow: hidden;
  ${space}
  ${layout}
`;

export const RightContainerEntry = styled.View`
  flex: 0.43;
  flex-direction: row;
  align-self: center;
  justify-content: space-around ${space} ${layout};
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
  mt: scale(-2),
  mb: scale(0),
  pt: scale(1),
  pb: scale(1),
  bg: 'loginBox',
})`
  flex:1;
  padding-horizontal:${scale(24)};
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
  bg: 'transparent',
})`
  flex: 1;
  flex-direction: row;
  padding-top: ${scale(3)};
  margin-horizontal: ${scale(15)};
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
  borderColor: 'red',
  borderLeftColor: 'rgba(20, 24, 47, 32)',
  borderTopWidth: scale(1),
  borderLeftWidth: 1,
  borderLeftHeight: 1,
  marginVertical: scale(4),
  ml: scale(2),
  mt: scale(4),
  mb: scale(1),
})`
  height: ${scale(83)};
  flex-direction: row;
  flex: 0.5;
   ${(props) => props.color && `border-color: ${props.color}`}
   ${(props) => props.isRight && `marginRight: ${scale(6)}`}
   ${(props) => !props.isRight && `marginLeft: ${scale(6)}`}

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
  flex: 0.22,
})`
  height: ${scale(48)};
  padding-left: ${scale(8)};
  ${(props) => props.isRightMargin && `marginRight: ${scale(3)}`}
  ${(props) => props.isLeftMargin && `marginLeft: ${scale(3)}`}

  ${color}
  ${layout}
`;
export const BigText = styled(TextM).attrs({})`
  ${(props) =>
    props.color ? `color: ${dark.imageBorder}` : 'color: rgba(255,255,255,0.5)'}
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

export const SmallTextOther = styled(Text10)`
  color: ${dark.lightText};
  margin-top: ${scale(2)};
`;

export const BigTextOther = styled(Text15).attrs({
  fontFamily: 'bold',
})`
  ${(props) =>
    props.isPanulty ? `color: ${dark.errorRed}` : `color: ${dark.main}`}
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
  ${(props) =>
    props.width ? `width: ${scale(props.width)}` : `width:${scale(81)}`}
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

export const BoxContainerEntryHeader = styled.View.attrs({
  bg: 'loginBox',
  borderRadius: scale(5),
  justifyContent: 'center',
})`
  align-items: center;
  height: ${scale(48)};
  width: ${scale(61)};
  ${color}
  ${layout}
`;

export const GradientContainer = styled.View.attrs({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  flexDirection: 'row',
})`
  ${color}
  ${space}
  ${layout}
`;
export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['rgba(20, 244, 94, 0.24)', 'rgba(20, 244, 94, 0)'],
})`
position: absolute;
  left: ${scale(20)};
  right: ${scale(width / 2)};
  top: ${scale(0)};
  bottom: ${scale(0)};
  margin-right: ${scale(0.5)};
  ${color}
  ${space}
  ${layout}
`;

export const OppoGradientBackground = styled(LinearGradient).attrs({
  colors: ['rgba(0, 196, 254, 0.24)', 'rgba(0, 196, 254, 0)'],
})`
  position: absolute;
  left: ${scale(width / 2)};
  right: ${scale(20)};
  top: ${scale(0)};
  bottom: ${scale(0)};
  margin-left: ${scale(0.5)};
  ${color}
  ${space}
  ${layout}
`;

export const DashContainer = styled(LinearGradient).attrs({
  dashColor: '#4A4A4A',
})`
  width: ${scale(1)};
  height: ${scale(100.5)};
  flex-direction: column;
  overflow: hidden;
  margin-left: 5;
  margin-right: 5;
   ${color} ${space} ${layout};
`;

export const BigTextEntry = Text14;
