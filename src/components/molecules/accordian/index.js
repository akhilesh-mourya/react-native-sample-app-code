import React from 'react';
import Utility from '../../../constants/utilis';
import {STR_CONST} from 'string_const';
import * as CONST from '../../../constants';

import {Platform} from 'react-native';

import {
  BigTextEntry,
  BigTextEntryComparision,
  BigTextOther,
  BoxContainerEntryHeader,
  BoxContainerOtherHeader,
  BoxContainerOtherHeaderComparision,
  ColumnContainer,
  DashViewContainerSelection,
  DividerComparision,
  EmptyRowView,
  EntryPlayerNameContainer,
  EstimateHeaderContainer,
  HeaderContainer,
  HeaderEntry,
  HeaderLeftTextContainer,
  HeaderMiddleTextContainer,
  HeaderOtherContainer,
  HeaderRightTextContainer,
  ImageIcon,
  ImageIconOther,
  InnerContainer,
  LeftContainer,
  LeftContainerEntry,
  OtherContainer,
  OtherInnerContainer,
  OtherRootContainer,
  OtherRowContainerComparision,
  OtherRowContainerComparisionTop,
  OuterContainerEntry,
  PlayerIcon,
  PlayerIconOther,
  PlayerNameContainer,
  PlayerNameContainerOther,
  PlayerNameContainerSelection,
  RightContainer,
  RightContainerEntry,
  Root,
  RowView,
  RowViewComparision,
  SelectionContainer,
  SelectionInnerContainer,
  SmallTextOther,
  TextContainerEntry,
  TextContainerOther,
  GradientContainer,
  GradientBackground,
  OppoGradientBackground,
  DashContainer,
} from './styles';
import {dark} from '../../../theme/colors';

const Accordian = ({
  players = [],
  isFetching = false,
  isHeader = true,
  isEntry = false,
  isOther = false,
  myFpg = '',
  otherFpg = '',
  totalFfpg = '',
  home_added = false,
  _points,
  showbonus,
  gameScore,
  needed,
  myGameScore,
  oppGameScore,
  _neededHome,
  _neededOppo,
  _pointsOppo,
  showbonusOppo,
}) => {
  const arrangeText = (item) => {
    return item.length < 10 ? `${item}` : `${item.substring(0, 10)}...`;
  };
  const renderSelectionView = (item) => {
    return (
      <Root>
        <SelectionContainer>
          <SelectionInnerContainer>
            <OtherRootContainer>
              <OtherRowContainerComparisionTop>
                <ImageIconOther
                  resizeMode="contain"
                  source={
                    item.opponentComparisionDetails.playerType === 'starter'
                      ? CONST.SELECTED_RADIO
                      : CONST.RESERVEICON
                  }
                />
                <PlayerNameContainerSelection
                  text={Utility.getInitials(
                    item.opponentComparisionDetails.name,
                  )}
                />
              </OtherRowContainerComparisionTop>
              <DividerComparision />
              <OtherRowContainerComparision>
                <EmptyRowView>
                  <TextContainerOther
                    text={item.opponentComparisionDetails.position}
                  />
                  <PlayerIcon
                    resizeMode="contain"
                    source={
                      item.opponentComparisionDetails.photoUrl
                        ? {uri: item.opponentComparisionDetails.photoUrl}
                        : CONST.PLAYER
                    }
                  />
                </EmptyRowView>
                {renderBoxDetailOther(
                  Number(item.opponentComparisionDetails.fppg).toFixed(2),
                  STR_CONST.ep,
                )}
              </OtherRowContainerComparision>
            </OtherRootContainer>
          </SelectionInnerContainer>
          <DashViewContainerSelection>
            {dashedView(100.5)}
          </DashViewContainerSelection>
          <SelectionInnerContainer>
            <OtherRootContainer>
              <OtherRowContainerComparisionTop>
                <ImageIconOther
                  resizeMode="contain"
                  source={
                    item.myComparisionDetails.playerType === 'starter'
                      ? CONST.SELECTED_RADIO
                      : CONST.RESERVEICON
                  }
                />
                <PlayerNameContainerSelection
                  text={Utility.getInitials(item.myComparisionDetails.name)}
                />
              </OtherRowContainerComparisionTop>
              <DividerComparision />
              <OtherRowContainerComparision>
                <EmptyRowView>
                  <TextContainerOther
                    text={item.myComparisionDetails.position}
                  />
                  <PlayerIcon
                    resizeMode="contain"
                    source={
                      item.myComparisionDetails.photoUrl
                        ? {uri: item.myComparisionDetails.photoUrl}
                        : CONST.PLAYER
                    }
                  />
                </EmptyRowView>
                {renderBoxDetailOther(
                  Number(item.myComparisionDetails.fppg).toFixed(2),
                  STR_CONST.ep,
                )}
              </OtherRowContainerComparision>
            </OtherRootContainer>
          </SelectionInnerContainer>
        </SelectionContainer>
      </Root>
    );
  };

  const renderOtherDetails = (item) => {
    return (
      <Root>
        <OtherContainer>
          {item.myComparisionDetails.actualUsed && (
            <OtherInnerContainer color={dark.main} isRight={true}>
              <OtherRootContainer>
                <OtherRowContainerComparisionTop>
                  <ImageIconOther
                    resizeMode="contain"
                    source={CONST.TICKICON}
                  />
                  <PlayerIconOther
                    resizeMode="contain"
                    source={
                      item.myComparisionDetails.photoUrl
                        ? {uri: item.myComparisionDetails.photoUrl}
                        : CONST.PLAYER
                    }
                  />
                  <PlayerNameContainerOther
                    text={arrangeText(
                      Utility.getInitials(item.myComparisionDetails.name),
                    )}
                  />
                </OtherRowContainerComparisionTop>
                <DividerComparision />
                <OtherRowContainerComparision>
                  <EmptyRowView>
                    <TextContainerOther
                      text={item.myComparisionDetails.position}
                    />
                  </EmptyRowView>
                  {renderBoxDetailOther(
                    Number(item.myComparisionDetails.actualFppg).toFixed(2),
                    STR_CONST.actual,
                    item.myComparisionDetails,
                  )}
                </OtherRowContainerComparision>
              </OtherRootContainer>
            </OtherInnerContainer>
          )}
          {item.opponentComparisionDetails &&
            item.opponentComparisionDetails.actualUsed && (
              <OtherInnerContainer color={dark.accent} isRight={false}>
                <OtherRootContainer>
                  <OtherRowContainerComparisionTop>
                    <ImageIconOther
                      resizeMode="contain"
                      source={CONST.TICKICON}
                    />
                    <PlayerIconOther
                      resizeMode="contain"
                      source={
                        item.opponentComparisionDetails.photoUrl
                          ? {uri: item.opponentComparisionDetails.photoUrl}
                          : CONST.PLAYER
                      }
                    />

                    <PlayerNameContainerOther
                      text={`${arrangeText(
                        Utility.getInitials(
                          item.opponentComparisionDetails.name,
                        ),
                      )}`}
                    />
                  </OtherRowContainerComparisionTop>
                  <DividerComparision />
                  <OtherRowContainerComparision>
                    <EmptyRowView>
                      <TextContainerOther
                        text={item.opponentComparisionDetails.position}
                      />
                    </EmptyRowView>
                    {renderBoxDetailOther(
                      Number(
                        item.opponentComparisionDetails.actualFppg,
                      ).toFixed(2),
                      STR_CONST.actual,
                      item.opponentComparisionDetails,
                    )}
                  </OtherRowContainerComparision>
                </OtherRootContainer>
              </OtherInnerContainer>
            )}
        </OtherContainer>
      </Root>
    );
  };

  const renderEntryView = (item) => {
    return (
      <Root>
        {item.actualUsed && (
          <OuterContainerEntry>
            <InnerContainer>
              <LeftContainerEntry>
                <ColumnContainer>
                  <TextContainerEntry text={item.position} />
                  <ImageIcon resizeMode="contain" source={CONST.TICKICON} />
                </ColumnContainer>
                <PlayerIcon
                  resizeMode="contain"
                  source={item.photoUrl ? {uri: item.photoUrl} : CONST.PLAYER}
                />
                <EntryPlayerNameContainer>
                  <PlayerNameContainer
                    text={`${Utility.getInitials(item.name)}`}
                  />
                </EntryPlayerNameContainer>
              </LeftContainerEntry>
              <RightContainerEntry>
                {renderBoxDetailEntry(
                  Number(item.fppg).toFixed(2),
                  STR_CONST.proj,
                )}
                {renderBoxDetailEntry(
                  Number(item.actualFppg).toFixed(2),
                  STR_CONST.actual,
                )}
              </RightContainerEntry>
            </InnerContainer>
          </OuterContainerEntry>
        )}
      </Root>
    );
  };

  const renderBoxDetail = (
    value,
    label,
    isPanulty,
    isRightMargin = false,
    isLeftMargin = false,
  ) => {
    return (
      <BoxContainerOtherHeader
        isRightMargin={isRightMargin}
        isLeftMargin={isLeftMargin}>
        <BigTextOther isPanulty={isPanulty} text={value} />
        <SmallTextOther text={label} />
      </BoxContainerOtherHeader>
    );
  };

  const renderBoxDetailOther = (value, label, iconData = null) => {
    return (
      <BoxContainerOtherHeaderComparision
        width={iconData ? (Platform.OS === 'android' ? 68 : 76) : 65}>
        <RowViewComparision>
          <BigTextEntryComparision text={value} />
        </RowViewComparision>
      </BoxContainerOtherHeaderComparision>
    );
  };

  const renderBoxDetailEntry = (value, label) => {
    return (
      <BoxContainerEntryHeader>
        <BigTextEntry text={value} />
        <SmallTextOther text={label} />
      </BoxContainerEntryHeader>
    );
  };

  const dashedView = (height = 50) => {
    return <DashContainer />;
  };

  const renderHeader = () => {
    if (isEntry) {
      return (
        <HeaderEntry>
          <EstimateHeaderContainer>
            {renderBoxDetail(needed, STR_CONST.selected)}
            {renderBoxDetail(Number(totalFfpg).toFixed(2), STR_CONST.actual)}
            {renderBoxDetail(
              _points,
              showbonus ? STR_CONST.bonus : STR_CONST.penaltyCaps,
              !showbonus,
            )}
            {renderBoxDetail(Number(gameScore).toFixed(2), STR_CONST.totalCaps)}
          </EstimateHeaderContainer>
        </HeaderEntry>
      );
    } else if (isOther) {
      return (
        <HeaderOtherContainer>
          <RowView>
            {renderBoxDetail(_neededHome, STR_CONST.selected)}
            {renderBoxDetail(
              Number(myFpg).toFixed(2),
              STR_CONST.actual,
              false,
              true,
              false,
            )}
            {renderBoxDetail(
              _neededOppo,
              STR_CONST.selected,
              false,
              false,
              true,
            )}
            {renderBoxDetail(Number(otherFpg).toFixed(2), STR_CONST.actual)}
          </RowView>
          <RowView topMargin={5}>
            {renderBoxDetail(
              Number(_points).toFixed(2),
              showbonus ? STR_CONST.bonus : STR_CONST.penaltyCaps,
              !showbonus,
            )}
            {renderBoxDetail(
              Number(myGameScore).toFixed(2),
              STR_CONST.totalCaps,
              false,
              true,
              false,
            )}
            {renderBoxDetail(
              Number(_pointsOppo).toFixed(2),
              showbonusOppo ? STR_CONST.bonus : STR_CONST.penaltyCaps,
              !showbonusOppo,
              false,
              true,
            )}
            {renderBoxDetail(
              Number(oppGameScore).toFixed(2),
              STR_CONST.totalCaps,
            )}
          </RowView>
        </HeaderOtherContainer>
      );
    } else {
      return (
        <HeaderContainer home_added={home_added}>
          <LeftContainer>
            <HeaderLeftTextContainer text={STR_CONST.player} />
          </LeftContainer>
          <RightContainer>
            <HeaderMiddleTextContainer text={STR_CONST.pos} />
            <HeaderRightTextContainer text={STR_CONST.ep} />
          </RightContainer>
        </HeaderContainer>
      );
    }
  };

  return (
    <Root>
      {!isFetching && (
        <Root>
          <GradientContainer>
            <GradientBackground />
            <OppoGradientBackground />
          </GradientContainer>
          {players.length > 0 && isHeader && renderHeader()}
          {players.length > 0 &&
            players.map((item) => {
              return (
                <Root>
                  {isEntry
                    ? renderEntryView(item)
                    : isOther
                    ? renderOtherDetails(item)
                    : renderSelectionView(item)}
                </Root>
              );
            })}
        </Root>
      )}
    </Root>
  );
};

export default Accordian;
