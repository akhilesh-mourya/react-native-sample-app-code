import React, {useEffect, useState} from 'react';
import Container from '../../components/templates/container';
import Header from '../../components/organisms/header';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as tournamentActions from '../../actions/tournamentActions';
import {
  BodyContainer,
  TournamentInfoContainer,
  Touchable,
  TournamentMenuContainer,
  Underline,
  TournamentMenuText,
  Block,
} from './styles';
import TournamentCard from '../../components/organisms/tournamentCard';
import mock from '../../constants/mock';
import Enter from './enter/enter';
import Rules from './rules';
import Entrants from './entrants';
import Entries from './entries';
import DetailView from '../../components/molecules/gameCenter/detailView';
import {STR_CONST} from 'string_const';

const JoinContestSelectTeam = ({
  navigation,
  selectedTeams,
  updateSelectedTeam,
  userAccountBalence,
  sportsList,
  submitSummary,
  getPayout,
  payoutData,
  getGameEntrantsList,
  gameEntratsInfo,
  getGameEntriesList,
  gameEntriesInfo,
  removeMatches,
  selectedContest,
  matches,
  updateGameEntriesList,
  updateEntrants,
  isFetchingData,
}) => {
  const {
    item,
    selectedMenuIndex = 0,
    isFromMyContest = false,
    onMyEntryPress,
    myEntryIndex,
    userInfo,
  } = navigation.state.params;

  const [
    selectedTournamentMenuIndex,
    setSelectedTournamentMenuIndex,
  ] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSelectedTournamentMenuIndex(selectedMenuIndex);
    }, 100);
  }, []);

  const onTournamentMenuPress = (index) => {
    switch (index) {
      case 1:
        updateEntrants({body: {results: [], page: 1}});
        break;
      case 2:
        updateGameEntriesList({body: {results: [], page: 1}});
        break;
      default:
        break;
    }
    setSelectedTournamentMenuIndex(index);
  };

  const renderHeader = () => (
    <Header
      isCross
      title={item.title}
      myContestStatus={isFromMyContest && STR_CONST.UPCOMING}
      onLeftPress={() => {
        navigation.goBack();
      }}
    />
  );

  const renderTournamentInfoMenu = () => {
    return (
      <TournamentInfoContainer>
        <FlatList
          horizontal
          data={mock.tournamentMenuOptions}
          renderItem={renderTournamentMenuView}
          extraData={this.state}
          keyExtractor={(tournamentItem) => tournamentItem}
          getItemLayout={this.getItemLayout}
        />
      </TournamentInfoContainer>
    );
  };

  const renderTournamentMenuView = (menuData) => {
    const {item: menuItem, index} = menuData;
    return (
      <Touchable
        onPress={() => onTournamentMenuPress(index)}
        activeOpacity={0.9}>
        <TournamentMenuContainer isSelected={true} index={index}>
          <TournamentMenuText text={menuItem} />
        </TournamentMenuContainer>
        <Underline
          isSelected={selectedTournamentMenuIndex === index}
          index={index}
        />
      </Touchable>
    );
  };

  const renderMenuConainer = () => {
    switch (selectedTournamentMenuIndex) {
      case 0:
        return (
          <Enter
            item={item}
            updateSelectedTeam={updateSelectedTeam}
            userAccountBalence={userAccountBalence}
            sportsList={sportsList}
            submitSummary={submitSummary}
            selectedContest={selectedContest}
            matches={matches}
            isFromMyContest={isFromMyContest}
            selectedTeams={selectedTeams}
            navigation={navigation}
            removeMatches={removeMatches}
            myEntryIndex={myEntryIndex}
          />
        );
      case 2:
        return (
          <Block>
            <Entrants
              tournamentData={item}
              getGameEntrantsList={getGameEntrantsList}
              gameEntratsInfo={gameEntratsInfo}
              updateEntrants={updateEntrants}
              isFetchingData={isFetchingData}
            />
          </Block>
        );
      case 1:
        return (
          <Block>
            <Entries
              tournamentData={item}
              isFromMyContest={isFromMyContest}
              sportsList={sportsList}
              navigation={navigation}
              gameEntriesInfo={gameEntriesInfo}
              getGameEntriesList={getGameEntriesList}
              onButtonPress={onTournamentMenuPress}
              onMyEntryPress={onMyEntryPress}
              selectedContest={selectedContest}
              userInfoData={userInfo}
            />
          </Block>
        );
      case 3:
        return (
          <Block>
            <DetailView
              item={item}
              payout={payoutData ? payoutData.payoutStructureList : []}
              getPayout={getPayout}
            />
          </Block>
        );
      case 4:
        return <Rules matchData={sportsList} sport={item.sport} />;
      default:
        break;
    }
  };

  const renderBody = () => {
    return (
      <BodyContainer>
        <TournamentCard item={item} />
        {renderTournamentInfoMenu()}
        {renderMenuConainer()}
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
  selectedTeams: state.tournament.selectedTeams,
  userAccountBalence: state.user.userAccountBalence,
  sportsList: state.tournament.sportsList,
  gameEntratsInfo: state.tournament.gameEntratsInfo,
  gameEntriesInfo: state.tournament.entries,
  selectedContest: state.tournament.selectedContest,
  isFetchingData: state.tournament.fetch,
});
const mapDispatchToProps = (dispatch) => ({
  submitSummary: (data) => {
    return dispatch(tournamentActions.submitSummary(data));
  },
  removeMatches: (data) => {
    return dispatch(tournamentActions.removeMatches(data));
  },
  updateSelectedTeam: (data) => {
    return dispatch(tournamentActions.updateSelectedTeam(data));
  },
  getPayout: (data) => {
    return dispatch(tournamentActions.getPayout(data));
  },
  getGameEntrantsList: (data) => {
    return dispatch(tournamentActions.getGameEntrantsList(data));
  },
  getGameEntriesList: (data) => {
    return dispatch(tournamentActions.getGameEntriesList(data));
  },
  updateGameEntriesList: (data) => {
    return dispatch(tournamentActions.getGameEntriesListSuccess(data));
  },
  updateEntrants: (data) => {
    return dispatch(tournamentActions.gameEntrantsSuccess(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinContestSelectTeam);
