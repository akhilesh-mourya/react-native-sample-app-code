import React from 'react';
import {dark} from '../../theme/colors';
import {
  Block,
  BodyScrollContainer,
  PointText,
  ScoreHeader,
  ScoreTypeText,
  ScoreValueContainer,
  SubContainer,
} from './styles';
import {
  SCORING_STR,
  POINTS,
  PLAYER_SCORING,
  GOALIE_SCORING,
  PITCHER_SCORING,
  HITTER_SCORING,
} from '../../constants/index';

const Rules = ({matchData, sport}) => {
  var fieldsArrayOne = [];
  var fieldsArrayTwo = [];

  const renderListOne = (data) => {
    for (const key in data) {
      fieldsArrayOne.push(
        <ScoreValueContainer>
          <ScoreTypeText>{key}</ScoreTypeText>
          <PointText
            textColor={!isNaN(data[key].charAt(0)) ? dark.main : dark.errorRed}>
            {data[key]}
          </PointText>
        </ScoreValueContainer>,
      );
    }
  };

  const renderListTwo = (data) => {
    for (const key in data) {
      fieldsArrayTwo.push(
        <ScoreValueContainer>
          <ScoreTypeText>{key}</ScoreTypeText>
          <PointText
            textColor={!isNaN(data[key].charAt(0)) ? dark.main : dark.errorRed}>
            {data[key]}
          </PointText>
        </ScoreValueContainer>,
      );
    }
  };
  const renderSingal = (data) => {
    renderListOne(data.scoring);
    return (
      <BodyScrollContainer>
        <SubContainer>
          <ScoreHeader>
            <ScoreTypeText>{SCORING_STR}</ScoreTypeText>
            <ScoreTypeText>{POINTS}</ScoreTypeText>
          </ScoreHeader>
          {fieldsArrayOne}
        </SubContainer>
      </BodyScrollContainer>
    );
  };

  const renderMLB = (data) => {
    renderListOne(PITCHER_SCORING);
    renderListTwo(HITTER_SCORING);
    return (
      <BodyScrollContainer>
        <ScoreHeader>
          <ScoreTypeText>{PITCHER_SCORING}</ScoreTypeText>
          <ScoreTypeText>{POINTS}</ScoreTypeText>
        </ScoreHeader>
        {fieldsArrayOne}
        <ScoreHeader>
          <ScoreTypeText>{HITTER_SCORING}</ScoreTypeText>
          <ScoreTypeText>{POINTS}</ScoreTypeText>
        </ScoreHeader>
        {fieldsArrayTwo}
      </BodyScrollContainer>
    );
  };
  const renderNHL = (data) => {
    renderListOne(data.scoring[PLAYER_SCORING]);
    renderListTwo(data.scoring['Goalie Scoring']);
    return (
      <BodyScrollContainer>
        <ScoreHeader>
          <ScoreTypeText>{PLAYER_SCORING}</ScoreTypeText>
          <ScoreTypeText>{POINTS}</ScoreTypeText>
        </ScoreHeader>
        {fieldsArrayOne}

        <ScoreHeader>
          <ScoreTypeText>{GOALIE_SCORING}</ScoreTypeText>
          <ScoreTypeText>{POINTS}</ScoreTypeText>
        </ScoreHeader>
        {fieldsArrayTwo}
      </BodyScrollContainer>
    );
  };

  const renderBody = () => {
    if (sport === 'NBA') {
      return <Block>{renderSingal(matchData[1])}</Block>;
    } else if (sport === 'MLB') {
      return <Block>{renderMLB(matchData[2])}</Block>;
    } else if (sport === 'NHL') {
      return <Block>{renderNHL(matchData[3])}</Block>;
    } else {
      return <Block>{renderSingal(matchData[0])}</Block>;
    }
  };

  return renderBody();
};

export default Rules;
