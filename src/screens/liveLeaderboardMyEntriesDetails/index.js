/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {Root} from './styles';
import Container from '../../components/templates/container';
import Header from '../../components/organisms/header';
import LiveLeaderboardItem from '../../components/organisms/liveLeaderboardItem/index';
import LiveLeaderboardComparisonItem from '../../components/organisms/liveLeaderboardComparisonItem/index';
import {STR_CONST} from 'string_const';
import {FlatList} from 'react-native';
import {Block} from 'galio-framework';
import Moment from 'moment';
import * as CONST from '../../constants';
import Utility from '../../constants/utilis';
import ComparisonUsersView from '../../components/molecules/comparisonUsersView';
import {connect} from 'react-redux';
import * as tournamentActions from '../../actions/tournamentActions';
import * as leaderBoardActions from '../../actions/leaderboard';
import TournamentCard from '../../components/organisms/tournamentCard';

import styles, {
  BodyContainer,
  ResultInfoBold,
  UpcomingContainer,
  ContainerView,
  UserView,
  StandingContainer,
  RightContainer,
  Row,
  UserIcon,
  RootResult,
  RankData,
} from './styles';

import {
  UserName,
  PrizeText,
} from '../../components/molecules/entrantCard/styles';
import EyeIconDescriptionModal from '../../components/molecules/EyeIconDescriptionModal/EyeIconDescriptionModal';
import {TeamNameText} from './../../screens/myResultsDetails/styles';
import mock from '../../constants/mock';
import {TOP} from '../../theme/apptheme';

const LiveLeaderboard = ({
  navigation,
  getMatches,
  matches,
  leaderboardsMyEntryDetails,
  startMyEntryDetailsUpdates,
  stopMyEntryDetailsUpdates,
  startOthersEntryDetailsUpdates,
  stopOthersEntryDetailsUpdates,
  leaderboardsOthersEntryDetails,
  isMatchesFetching,
}) => {
  const [expandedRow, setExpandedRow] = useState('');
  const {
    isOtherDetails = false,
    oppDetails,
    myDetails,
    tournamentData,
    isFromResultDetails = false,
  } = navigation.state.params;

  const [myEntryData, setMyEntryData] = useState(null);
  const [othersEntryData, setOthersEntryData] = useState(null);
  const [combinedDataList, setCombinedDataList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * onCaretPress will handle show & hide of players
   */
  const onCaretPress = (index) => {
    if (expandedRow === index) {
      setExpandedRow('');
    } else {
      setExpandedRow(index);
    }
  };

  useEffect(() => {
    getLiveTournamentInfo();
  }, []);

  useEffect(() => {
    if (
      isOtherDetails &&
      leaderboardsMyEntryDetails &&
      leaderboardsOthersEntryDetails &&
      leaderboardsMyEntryDetails.length > 0 &&
      leaderboardsMyEntryDetails[0] &&
      leaderboardsOthersEntryDetails.length > 0 &&
      leaderboardsOthersEntryDetails[0] &&
      matches.results
    ) {
      const tempSelections = [];
      leaderboardsMyEntryDetails[0].selections.map((obj) =>
        matches.results.find((o) => {
          if (o.GlobalGameID === obj.GlobalGameID) {
            tempSelections.push({...obj, ...o});
          }
        }),
      );
      const tempMyEntry = {
        ...leaderboardsMyEntryDetails[0],
        selections: tempSelections,
      };
      setMyEntryData(tempMyEntry);

      const tempOtherSelections = [];
      leaderboardsOthersEntryDetails[0].selections.map((obj) =>
        matches.results.find((o) => {
          if (o.GlobalGameID === obj.GlobalGameID) {
            tempOtherSelections.push({...obj, ...o});
          }
        }),
      );
      const tempOtherEntry = {
        ...leaderboardsOthersEntryDetails[0],
        selections: tempOtherSelections,
      };
      setOthersEntryData(tempOtherEntry);

      getCombinedData(tempMyEntry.selections, tempOtherEntry.selections);
    } else if (
      !isOtherDetails &&
      leaderboardsMyEntryDetails &&
      leaderboardsMyEntryDetails.length > 0 &&
      leaderboardsMyEntryDetails[0] &&
      matches.results
    ) {
      const tempSelections = [];
      leaderboardsMyEntryDetails[0].selections.map((obj) =>
        matches.results.find((o) => {
          if (o.GlobalGameID === obj.GlobalGameID) {
            tempSelections.push({...obj, ...o});
          }
        }),
      );
      const tempMyEntry = {
        ...leaderboardsMyEntryDetails[0],
        selections: tempSelections,
      };
      setMyEntryData(tempMyEntry);
    }
  }, [matches, leaderboardsMyEntryDetails, leaderboardsOthersEntryDetails]);

  useEffect(
    () => () => {
      stopMyEntryDetailsUpdates(myDetails.uniqueId);
      if (isOtherDetails) {
        stopOthersEntryDetailsUpdates(oppDetails.uniqueId);
      }
    },
    [],
  );

  const getLiveTournamentInfo = () => {
    let data = {
      id: myDetails.tournamentId,
      isLoader: false,
    };

    if (isOtherDetails) {
      startMyEntryDetailsUpdates(myDetails.uniqueId);
      startOthersEntryDetailsUpdates(oppDetails.uniqueId);
      setTimeout(() => {
        getMatches(data);
        setIsLoading(false);
      }, 1000);
    } else {
      startMyEntryDetailsUpdates(myDetails.uniqueId);
      setTimeout(() => {
        getMatches(data);
        setIsLoading(false);
      }, 1000);
    }
  };

  const getCombinedData = (_myData, _opponentData) => {
    const combinedData = [];
    if (
      _myData &&
      _myData.length > 0 &&
      _opponentData &&
      _opponentData.length > 0
    ) {
      _myData.map((_data, index) => {
        const item = {
          myComparisionDetails: _data,
          opponentComparisionDetails: _opponentData[index],
        };
        combinedData.push(item);
      });
    }

    setCombinedDataList(combinedData);
  };

  const renderUpcoming = () => (
    <UpcomingContainer>
      <RootResult>
        {isOtherDetails ? renderOtherEntryTopView() : renderMyEntryTopView()}
      </RootResult>
    </UpcomingContainer>
  );

  const renderOtherEntryTopView = () => {
    return (
      <ComparisonUsersView myDetails={myEntryData} details={othersEntryData} />
    );
  };

  const renderMyEntryTopView = () => {
    const userProfile = myEntryData?.profilePicture
      ? {uri: myEntryData?.profilePicture}
      : CONST.USER;
    const currRank = myEntryData.rank ? myEntryData.rank : 1;

    return (
      <Row>
        <ContainerView>
          <UserView>
            <UserIcon source={userProfile} />
          </UserView>
        </ContainerView>
        <StandingContainer>
          <RankData text={Moment.localeData().ordinal(currRank)} />
          <UserName
            text={Utility.changeStringStyle(
              `${myEntryData.username}`,
              'smallCase',
            )}
          />
          <PrizeText text={`$${myEntryData.prize}`} />
        </StandingContainer>
        <RightContainer>
          <ResultInfoBold
            text={
              myEntryData.entryScore
                ? Number(myEntryData.entryScore).toFixed(2)
                : '0.00'
            }
          />
        </RightContainer>
      </Row>
    );
  };

  const renderMyContestHeader = () => (
    <Root>
      <Header
        isCross
        title={tournamentData.title}
        myContestStatus={STR_CONST.LIVE}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <TournamentCard item={tournamentData} isFromMyContestDetails={true} />
      {myEntryData && renderUpcoming()}
    </Root>
  );

  const renderResultsHeader = () => (
    <Root>
      <Header
        isBack
        title={STR_CONST.results}
        onProfilePress={() => navigation.navigate('ProfileScreen')}
        info={true}
        displayInsets={{left: 90, right: 15}}
        renderRightHeader={renderTopContent}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      {renderSubHeader()}
      <TOP value={20} />
      <TournamentCard item={tournamentData} isFromMyContestDetails={true} />
      {myEntryData && renderUpcoming()}
    </Root>
  );

  const renderTopContent = () => {
    return <EyeIconDescriptionModal options={mock.guaranteedEyeIconOptions} />;
  };

  const renderSubHeader = () => {
    return <TeamNameText>{tournamentData.title}</TeamNameText>;
  };
  const renderContent = ({item, index}) => {
    const tmpData = {
      isExpanded: expandedRow === index,
      playersData: item.roasters,
      teamData: item,
      itemIndex: index,
    };
    return (
      <LiveLeaderboardItem
        tmpData={tmpData}
        tournamentData={tournamentData}
        onCaretPress={onCaretPress}
        isFromResultDetails={isFromResultDetails}
      />
    );
  };

  const renderComparisonContent = ({item, index}) => {
    return (
      <LiveLeaderboardComparisonItem
        item={item}
        onCaretPress={onCaretPress}
        isExpanded={expandedRow === index}
        index={index}
        isFromResultDetails={isFromResultDetails}
      />
    );
  };

  const renderBody = () => {
    let listData = null;
    if (isOtherDetails && combinedDataList) {
      listData = combinedDataList;
    } else if (!isOtherDetails && myEntryData) {
      listData = myEntryData.selections;
    }

    return (
      <BodyContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listData ? listData : []}
          renderItem={isOtherDetails ? renderComparisonContent : renderContent}
          nestedScrollEnabled
          extraData={listData ? listData.length : 0}
          legacyImplementation={false}
          removeClippedSubviews={false}
        />

        {!isMatchesFetching && !isLoading && listData && listData.length === 0 && (
          <Block style={styles.noEntrant}>
            <ResultInfoBold text={STR_CONST.noPlayerYet} />
          </Block>
        )}
      </BodyContainer>
    );
  };

  return (
    <Container
      header={
        isFromResultDetails ? renderResultsHeader() : renderMyContestHeader()
      }
      body={renderBody()}
    />
  );
};

const mapStateToProps = (state) => ({
  matches: state.tournament.matches,
  leaderboardsMyEntryDetails: state.leaderboard.leaderboardsMyEntryDetails,
  leaderboardsOthersEntryDetails:
    state.leaderboard.leaderboardsOthersEntryDetails,
  isMatchesFetching: state.tournament.fetch,
});

const mapDispatchToProps = (dispatch) => ({
  getMatches: (data) => {
    return dispatch(tournamentActions.matches(data));
  },
  startMyEntryDetailsUpdates: (tourId) => {
    return dispatch(
      leaderBoardActions.startMyEntryDetailsUpdates(tourId, dispatch),
    );
  },
  stopMyEntryDetailsUpdates: (tourId) => {
    return dispatch(
      leaderBoardActions.stopMyEntryDetailsUpdates(tourId, dispatch),
    );
  },
  startOthersEntryDetailsUpdates: (tourId) => {
    return dispatch(
      leaderBoardActions.startOthersEntryDetailsUpdates(tourId, dispatch),
    );
  },
  stopOthersEntryDetailsUpdates: (tourId) => {
    return dispatch(
      leaderBoardActions.stopOthersEntryDetailsUpdates(tourId, dispatch),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveLeaderboard);
