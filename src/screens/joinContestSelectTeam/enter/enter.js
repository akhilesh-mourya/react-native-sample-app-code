/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {BodyContainer, SubmitButton, SelectTeamCount} from '../styles';
import SelectTeamCard from '../../../components/organisms/selectTeamCard';
import TeamCardAfterSelecting from '../../../components/organisms/teamCardAfterSelecting';
import Utility from '../../../constants/utilis';
import * as CONST from '../../../constants';
import {STR_CONST} from 'string_const';
import GetLocation from 'react-native-get-location';
import ActionSheet from 'react-native-actionsheet';

const Enter = (gameData) => {
  const {
    item,
    userAccountBalence,
    sportsList,
    submitSummary,
    selectedContest,
    matches,
    isFromMyContest,
    updateSelectedTeam,
    selectedTeams,
    navigation,
    removeMatches,
    myEntryIndex = 0,
  } = gameData;
  const [actionSheet, setActionSheet] = useState(0);
  const [selectedContestData, setSelectedContestData] = useState([]);
  const [selectedSelection_id, setSelectedSelection_id] = useState(0);

  useEffect(() => {
    if (isFromMyContest && selectedContestData.length === 0) {
      // If coming from my contest then show selected teams

      const selectedMatches = Utility.driveSelectedMatches(
        matches.results,
        selectedContest.results[myEntryIndex].selections,
      );
      setSelectedContestData(selectedMatches);
      updateSelectedTeam(selectedMatches);
      setSelectedSelection_id(selectedContest.results[myEntryIndex].id);
    } else if (selectedContestData.length === 0) {
      // If coming from join team

      const selectTeam = new Array(item.maxPicks).fill({
        isSelected: false,
      });
      setSelectedContestData(selectTeam);
      updateSelectedTeam(selectTeam);
    }
  }, [matches, selectedContest]);

  // Update local selected team state once coming from booster screen
  useEffect(() => {
    setSelectedContestData(selectedTeams);
  }, [selectedTeams]);

  const onRemove = (index) => {
    let selectTeams = [...selectedContestData];
    selectTeams[index] = {isSelected: false};
    setSelectedContestData(selectTeams);
    updateSelectedTeam(selectTeams);
  };

  const onPressSelectTeam = (index, teamData, isTeamCardSelected = false) => {
    if (isTeamCardSelected) {
      //On click selected team card to update the booster
      const selectedTeam = {...teamData};
      navigation.navigate('SelectIndividualTeamBoosterScreen', {
        tournamentData: item,
        matchData: selectedTeam,
        isHome: teamData.isHomeTeamSelected,
        selectedTeamIndex: index,
      });
    } else {
      //On click team card to select team
      removeMatches({body: []});
      navigation.navigate('SelectIndividualTeamScreen', {
        item,
        index,
        teamData,
        allSelectedTeamData: selectedTeams,
      });
    }
  };

  const renderSelectTeamCard = (selectTeamData) => {
    const {item: selectTeamItem, index} = selectTeamData;
    if (selectTeamItem.isSelected) {
      return (
        <TeamCardAfterSelecting
          sport={item.sport}
          matchData={selectTeamItem}
          index={index}
          onPress={onPressSelectTeam}
          onRemove={onRemove}
          onPressRoster={(selectedMatchData = {}, isHomeTeam) => {
            navigation.navigate('Rosters', {
              tournamentData: item,
              matchData: selectedMatchData,
              selectedTeamIndex: index,
              isHomeTeam: isHomeTeam,
            });
          }}
        />
      );
    } else {
      return (
        <SelectTeamCard
          sport={item.sport}
          data={selectTeamItem}
          index={index}
          onPress={onPressSelectTeam}
        />
      );
    }
  };
  const renderSelectTeamList = () => {
    return (
      <FlatList
        data={selectedContestData}
        renderItem={renderSelectTeamCard}
        keyExtractor={(tournamentItem) => tournamentItem}
      />
    );
  };

  const getSelectedSport = () => {
    const contestName = item.sport;
    return sportsList.find(({sport}) => sport === contestName);
  };

  const sheetPressed = (index) => {
    if (index === 0) {
      callSubmitAPI();
    }
  };

  const callSubmitAPI = () => {
    const currContest = getSelectedSport();
    const isJoined = isFromMyContest; // Update tournament

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((deviceLocation) => {
        const selectedTeamData = selectedContestData.map((teamData) => {
          const teamID = teamData.isHomeTeamSelected
            ? teamData.GlobalHomeTeamID
            : teamData.GlobalAwayTeamID;
          return {
            GlobalGameID: teamData.GlobalGameID,
            GlobalTeamID: teamID,
            booster: teamData.selectedBonus,
          };
        });

        const {id} = item;

        let teamData = {
          tournament_id: id,
          data: {
            deviceLocation,
            selections: selectedTeamData,
          },
          isJoined,
          currContestData: currContest,
          selection_id: selectedSelection_id,
        };
        submitSummary(teamData);
      })
      .catch((error) => {
        const {message} = error;
        Utility.showAlert(null, `Location: ${message}`);
      });
  };

  renderActionSheet = () => {
    const {title, entryFee} = item;
    const {totalBalance} = userAccountBalence.userBalances;
    const entryFees = entryFee ? `$${entryFee.toFixed(2)}` : '';
    const submitTitle = `${STR_CONST.submitSmall} ${entryFees}`;

    return (
      <ActionSheet
        ref={(o) => setActionSheet(o)}
        title={title}
        message={`\nCurrent Balance: $${totalBalance}`}
        options={[submitTitle, STR_CONST.cancelSmall]}
        cancelButtonIndex={1}
        onPress={sheetPressed}
      />
    );
  };

  const nonSelectedTeamData = selectedContestData
    ? selectedContestData.filter((teamItem) => !teamItem.isSelected)
    : 0;
  return (
    <BodyContainer>
      <SelectTeamCount>{`${STR_CONST.SELECT} ${item.maxPicks} ${STR_CONST.TEAMS_PER_ENTRY}`}</SelectTeamCount>

      {renderSelectTeamList()}
      <SubmitButton
        opacity={nonSelectedTeamData.length > 0 ? 0.5 : 1}
        disable={nonSelectedTeamData.length > 0}
        text={Utility.changeStringStyle(CONST.SUBMIT, 'fullCapital')}
        color={true}
        onPress={() => {
          isFromMyContest ? callSubmitAPI() : actionSheet.show();
        }}
      />
      {renderActionSheet()}
    </BodyContainer>
  );
};

export default Enter;
