import React, {useEffect, useState} from 'react';
import {
  Block,
  NotFoundContainer,
  NotFoundText,
  ActivityContainer,
} from './styles';

import {FlatList, ActivityIndicator} from 'react-native';
import ContestDetail from '../../components/molecules/gameCenter/contestDetail';
import EntrantCard from '../../components/molecules/entrantCard';
import materialTheme from '../../constants/theme';

import {STR_CONST} from 'string_const';

const Entrants = ({
  tournamentData,
  getGameEntrantsList,
  getGameEntriesList,
  userInfoData,
  gameEntratsInfo = [],
  liveLeaderboardEntrants = [],
  isFromMyContestDetails = false,
  isFromResultDetails = false,
  startLeaderBoardUpdates = () => {},
  onMyEntryPress = () => {},
  isTournamentStarted = false,
  payout,
  updateResultEntrants = () => {},
  gameResultEntrantsInfo = [],
  isFetchingData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(false);

  var entrantsLength = null;
  const entrantsData = !isFromResultDetails
    ? isTournamentStarted
      ? liveLeaderboardEntrants
      : gameEntratsInfo
    : gameResultEntrantsInfo;
  entrantsLength = !isFromResultDetails
    ? isTournamentStarted
      ? liveLeaderboardEntrants.length
      : gameEntratsInfo.length
    : gameResultEntrantsInfo.length;

  useEffect(() => {
    if (!isFromResultDetails) {
      if (isTournamentStarted) {
        fetchStartedTournamentEntrants();
      } else {
        fetchActiveTournamentEntrants();
      }
    } else {
      fetchResultTournamentEntrants();
    }
  }, []);

  useEffect(() => {
    setLoadMore(false);
  }, [gameResultEntrantsInfo]);

  // Get Entrants when coming from Join Contest
  const fetchActiveTournamentEntrants = async () => {
    let data = {
      id: tournamentData.id,
      page: currentPage,
      loading: false,
    };
    await getGameEntrantsList(data);
  };

  // Get Entrants when coming from Result
  const fetchResultTournamentEntrants = async () => {
    updateResultEntrants({body: {results: [], page: 1}});

    let data = {
      id: tournamentData.id,
      page: currentPage,
      loading: false,
    };
    await getGameEntriesList(data);
  };

  const fetchStartedTournamentEntrants = async () => {
    startLeaderBoardUpdates(tournamentData.id);
  };

  const handleLoadMore = async () => {
    if (!onEndReachedCalledDuringMomentum) {
      let data = {
        id: tournamentData.id,
        page: currentPage,
        loading: true,
      };

      if (!isFromResultDetails) {
        if (isTournamentStarted) {
          fetchStartedTournamentEntrants();
        } else {
          getGameEntrantsList(data);
        }
      } else {
        getGameEntriesList(data);
      }

      setLoadMore(true);
      setCurrentPage((page) => page + 1);
      setOnEndReachedCalledDuringMomentum(true);
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
          loggedInUser={userInfoData ? userInfoData.user.username : ''}
          index={index}
          isTournamentStarted={isTournamentStarted}
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
          details={tournamentData}
          isResultsScreen={!isFromMyContestDetails}
          tournamentData={tournamentData}
          index={index}
          isTournamentStarted={isTournamentStarted}
          payout={payout ? payout : []}
        />
      );
    }
  };

  const renderFooter = () => {
    if (loadMore) {
      return (
        <ActivityContainer>
          <ActivityIndicator
            animating
            size={'large'}
            color={materialTheme.COLORS.PRIMARY}
          />
        </ActivityContainer>
      );
    }
  };

  const renderBody = () => {
    return (
      <Block paddingVertical={5}>
        {!isFromMyContestDetails &&
          !isFromResultDetails &&
          !isFetchingData &&
          entrantsLength !== null &&
          entrantsLength === 0 && (
            <NotFoundContainer>
              <NotFoundText text={STR_CONST.noEntrantsJoinedYet} />
            </NotFoundContainer>
          )}
        {entrantsLength > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={entrantsData}
            renderItem={renderItem}
            onEndReachedThreshold={0.99}
            onEndReached={() => handleLoadMore()}
            keyExtractor={(item) => item.id}
            removeClippedSubviews={false}
            ListFooterComponent={renderFooter()}
            onMomentumScrollBegin={() => {
              setOnEndReachedCalledDuringMomentum(false);
            }}
          />
        )}
      </Block>
    );
  };

  return renderBody();
};

export default Entrants;
