/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {BodyContainer, TOP} from '../styles';
import Container from '../../../components/templates/container';
import Header from '../../../components/organisms/header';
import TournamentCard from '../../../components/organisms/tournamentCard';
import * as tournamentActions from '../../../actions/tournamentActions';
import BoosterSelection from '../../../components/molecules/BoosterSelection/BoosterSelection';
import Utility from '../../../constants/utilis';

const SelectIndividualTeamBooster = ({
  navigation,
  updateSelectedTeam,
  selectedTeams,
}) => {
  const {
    tournamentData,
    matchData,
    isHome,
    selectedTeamIndex,
  } = navigation.state.params;

  useEffect(() => {}, []);
  const startText = `${Utility.getFormattedDate(
    tournamentData.startsAt,
    'ddd hh:mm A z',
  )}`;

  const onSubmit = (selectedFantasyPoints, selectedBonus) => {
    const selectedTeamData = {...matchData};
    selectedTeamData.selectedFantasyPoints = selectedFantasyPoints;
    selectedTeamData.selectedBonus = selectedBonus;
    selectedTeamData.isHomeTeamSelected = isHome;
    selectedTeamData.isSelected = true;
    const selectedTeamsArr = [...selectedTeams];
    selectedTeamsArr[selectedTeamIndex] = selectedTeamData;
    updateSelectedTeam(selectedTeamsArr);
    navigation.navigate('JoinContestSelectTeamScreen');
  };

  // Header View
  const renderHeader = () => (
    <Header
      isCross
      title={tournamentData.title}
      time={startText}
      onLeftPress={() => {
        navigation.goBack();
      }}
    />
  );

  //Bottom View
  const renderSelectTeamCard = () => {
    return (
      <BoosterSelection
        teamData={matchData}
        onSliderChange={() => {}}
        setListScroll={() => {}}
        showBooster={true}
        isHometeam={isHome}
        onSubmit={onSubmit}
      />
    );
  };

  //Body View
  const renderBody = () => {
    return (
      <BodyContainer>
        <TournamentCard item={tournamentData} />
        <TOP />
        {renderSelectTeamCard()}
      </BodyContainer>
    );
  };

  return (
    <Container header={renderHeader()} body={renderBody()} autoScroll={false} />
  );
};

const mapStateToProps = (state) => ({
  selectedTeams: state.tournament.selectedTeams,
});
const mapDispatchToProps = (dispatch) => ({
  updateSelectedTeam: (data) => {
    return dispatch(tournamentActions.updateSelectedTeam(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectIndividualTeamBooster);
