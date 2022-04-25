/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {BodyContainer, TOP} from '../styles';
import Container from '../../../components/templates/container';
import Header from '../../../components/organisms/header';
import TournamentCard from '../../../components/organisms/tournamentCard';
import SelectSportTeamCard from '../../../components/organisms/selectSportTeamCard';
import * as tournamentActions from '../../../actions/tournamentActions';
import Utility from '../../../constants/utilis';

const SelectIndividualTeam = ({navigation, getMatches, matches}) => {
  const {item, index, allSelectedTeamData} = navigation.state.params;
  const [allMatchesData, setAllMatchesData] = useState([]);
  const startText = `${Utility.getFormattedDate(
    item.startsAt,
    'ddd hh:mm A z',
  )}`;

  useEffect(() => {
    let data = {
      id: item.id,
      isLoader: false,
    };
    getMatches(data);
  }, []);

  useEffect(() => {
    if (matches && matches.results) {
      const results = matches.results.filter(
        ({GlobalGameID: id1}) =>
          !allSelectedTeamData.some(({GlobalGameID: id2}) => id2 === id1),
      );
      const allMatches = results.map((obj) => ({
        ...obj,
        selectedBonus: 50,
      }));
      setAllMatchesData(allMatches);
    }
  }, [matches]);

  // Header View
  const renderHeader = () => (
    <Header
      isCross
      title={item.title}
      time={startText}
      onLeftPress={() => {
        navigation.goBack();
      }}
    />
  );

  //Bottom View
  const renderSelectTeamCard = (data) => {
    const {item: matchData, index: teamIndex} = data;
    return (
      <SelectSportTeamCard
        tournamentData={item}
        matchData={matchData}
        index={teamIndex}
        onPressRoster={(selectedMatchData = {}, isHomeTeam) => {
          navigation.navigate('Rosters', {
            tournamentData: item,
            matchData: selectedMatchData,
            selectedTeamIndex: index,
            isHomeTeam: isHomeTeam,
          });
        }}
        onPressPlusIcon={(selectedMatchData = {}, isHome = false) => {
          navigation.navigate('SelectIndividualTeamBoosterScreen', {
            tournamentData: item,
            matchData: selectedMatchData,
            isHome: isHome,
            selectedTeamIndex: index,
          });
        }}
      />
    );
  };

  const renderSelectTeamList = () => {
    return (
      <FlatList
        data={allMatchesData}
        renderItem={renderSelectTeamCard}
        keyExtractor={(tournamentItem) => tournamentItem}
      />
    );
  };

  //Body View
  const renderBody = () => {
    return (
      <BodyContainer>
        <TournamentCard item={item} />
        <TOP />
        {renderSelectTeamList()}
      </BodyContainer>
    );
  };

  return (
    <Container header={renderHeader()} body={renderBody()} autoScroll={false} />
  );
};

const mapStateToProps = (state) => ({
  matches: state.tournament.matches,
  payoutData: state.tournament.payoutData,
});
const mapDispatchToProps = (dispatch) => ({
  getMatches: (data) => {
    return dispatch(tournamentActions.matches(data));
  },
  getPayout: (data) => {
    return dispatch(tournamentActions.getPayout(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectIndividualTeam);
