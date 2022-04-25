/* eslint-disable no-undef */
import React from 'react';
import {
  MainContainer,
  Container,
  SubContainer,
  SubValue,
  SubTitle,
  Separator,
} from './styles';
import Utility from '../../../constants/utilis';
import {STR_CONST} from 'string_const';

const TournamentCard = ({item, isFromMyContestDetails = false}) => {
  const {maxPlayers, remainingPlayers, entryFee, startsAt, prizePool} = item;

  const startText = `${Utility.getFormattedDate(startsAt, 'ddd hh:mm A z')}`;
  const playersText = `${Utility.numFormatter(
    maxPlayers - remainingPlayers,
  )}/${Utility.numFormatter(maxPlayers)}`;
  const totalPrize = prizePool;

  return (
    <MainContainer>
      <Container>
        <SubContainer>
          <SubValue isSelected>{startText}</SubValue>
          <SubTitle>{STR_CONST.STARTS}</SubTitle>
        </SubContainer>
        <SubContainer>
          <SubValue>{playersText}</SubValue>
          <SubTitle>{STR_CONST.ENTRIES}</SubTitle>
        </SubContainer>
        <SubContainer>
          <SubValue>${entryFee}</SubValue>
          <SubTitle>{STR_CONST.ENTRY}</SubTitle>
        </SubContainer>
        <SubContainer>
          <SubValue isSelected>${totalPrize}</SubValue>
          <SubTitle isSelected>{STR_CONST.PRIZES_GTD}</SubTitle>
        </SubContainer>
      </Container>
      {!isFromMyContestDetails && <Separator />}
    </MainContainer>
  );
};

export default TournamentCard;
