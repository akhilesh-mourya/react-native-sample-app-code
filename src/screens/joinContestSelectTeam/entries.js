import React, {useEffect, useState} from 'react';
import {
  AddAnotherButton,
  AddIcon,
  Block,
  ButtonText,
  Touchable,
} from './styles';

import {FlatList} from 'react-native';
import ContestDetail from '../../components/molecules/gameCenter/contestDetail';
import {STR_CONST} from 'string_const';
import * as CONST from '../../constants';
import EntrantCard from '../../components/molecules/entrantCard';

const Entries = ({
  tournamentData,
  onButtonPress = () => {},
  navigation,
  sportsList,
  isFromMyContest,
  onMyEntryPress = () => {},
  isFromMyContestDetails = false,
  isTournamentStarted = false,
  startEntriesUpdates = () => {},
  liveLeaderboardMyEntries,
  userInfoData,
  payout,
  isFromResultDetails = false,
  selectedContest,
}) => {
  const [myEntries, setMyEntries] = useState([]);

  var entriesLength = isTournamentStarted
    ? liveLeaderboardMyEntries.length
    : myEntries.length;

  useEffect(() => {
    if (isTournamentStarted && !isFromResultDetails) {
      fetchStartedTournamentEntries(); // Coming from My Contest when tournament started
    } else {
      fetchActiveTournamentEntries(); // Coming from My Contest when tournament not started or from join contest or from result
    }
  }, []);

  const handleLoadMore = async () => {};

  const fetchStartedTournamentEntries = async () => {
    startEntriesUpdates(tournamentData.id, userInfoData.user.username);
  };

  const fetchActiveTournamentEntries = async () => {
    const {results} = selectedContest;
    let userObj = [];
    if (results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        let data = {
          username: userInfoData.user?.username,
          profilePicture: userInfoData.user?.profilePicture,
          rank: results[i].rank ? results[i].rank : 1,
          prize: results[i].prize ? results[i].prize : 0.0,
          score: results[i].entryScore
            ? Number(results[i].entryScore).toFixed(2)
            : '0',
          joinedTournamentItem: results[i],
        };
        userObj.push(data);
      }

      function order(a, b) {
        return a.rank - b.rank;
      }
      const myFinalEntries = userObj.sort(order);
      entriesLength = myFinalEntries.length;
      setMyEntries(myFinalEntries);
    }
  };

  const onPressAdd_Another_Entry = async () => {
    if (isFromMyContest) {
      navigation.push('JoinContestSelectTeamScreen', {
        item: tournamentData,
        selectedMenuIndex: 0,
        sportsList: sportsList,
      });
    } else {
      onButtonPress(0);
    }
  };

  const renderItem = ({item, index}) => {
    if (isFromMyContestDetails || isFromResultDetails) {
      return (
        <EntrantCard
          item={{
            ...item,
            prize:
              isFromResultDetails || isTournamentStarted
                ? item.prize
                : tournamentData.prizePool,
          }}
          onEntrantCardPress={onMyEntryPress}
          tournamentData={tournamentData}
          index={index}
          isTournamentStarted={isTournamentStarted}
          isFromResultDetails={isFromResultDetails}
          payout={payout ? payout : []}
        />
      );
    } else {
      return (
        <ContestDetail
          item={{
            item: {
              ...item,
              score: item.score,
            },
          }}
          onMyEntryPress={onMyEntryPress}
          screen={STR_CONST.entrants}
          isResultsScreen={false}
          tournamentData={tournamentData}
          index={index}
        />
      );
    }
  };

  const renderBody = () => {
    return (
      <Block paddingVertical={5}>
        {entriesLength > 0 && (
          <FlatList
            data={isTournamentStarted ? liveLeaderboardMyEntries : myEntries}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            nestedScrollEnabled
            extraData={entriesLength}
            legacyImplementation={false}
            initialNumToRender={10}
            keyExtractor={(item, index) => index.toString()}
            removeClippedSubviews={false}
            onEndReached={() => handleLoadMore()}
          />
        )}
        {!isFromResultDetails &&
          !isTournamentStarted &&
          tournamentData.maxPerPlayer > entriesLength && (
            <Touchable onPress={() => onPressAdd_Another_Entry()}>
              <AddAnotherButton>
                <AddIcon source={CONST.PLUS_IC} />
                <ButtonText
                  text={
                    !!entriesLength > 0
                      ? CONST.ADD_ANOTHER_ENTRY
                      : CONST.ADD_ENTRY
                  }
                />
              </AddAnotherButton>
            </Touchable>
          )}
      </Block>
    );
  };

  return renderBody();
};

export default Entries;
