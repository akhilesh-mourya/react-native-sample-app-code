export const START_LEADERBOARD_UPDATES =
  'leaderboard/START_LEADERBOARD_UPDATES';
export const STOP_LEADERBOARD_UPDATES = 'leaderboard/STOP_LEADERBOARD_UPDATES';
export const SET_LEADERBOARD_DATA = 'leaderboard/SET_LEADERBOARD_DATA';

export const START_ENTRIES_UPDATES = 'leaderboard/START_ENTRIES_UPDATES';
export const STOP_ENTRIES_UPDATES = 'leaderboard/STOP_ENTRIES_UPDATES';
export const SET_ENTRIES_DATA = 'leaderboard/SET_ENTRIES_DATA';

export const START_MY_ENTRY_DETAILS_UPDATES =
  'leaderboard/START_MY_ENTRY_DETAILS_UPDATES';
export const STOP_MY_ENTRY_DETAILS_UPDATES =
  'leaderboard/STOP_MY_ENTRY_DETAILS_UPDATES';
export const SET_MY_ENTRY_DETAILS_DATA =
  'leaderboard/SET_MY_ENTRY_DETAILS_DATA';

export const START_OTHERS_ENTRY_DETAILS_UPDATES =
  'leaderboard/START_OTHERS_ENTRY_DETAILS_UPDATES';
export const STOP_OTHERS_ENTRY_DETAILS_UPDATES =
  'leaderboard/STOP_OTHERS_ENTRY_DETAILS_UPDATES';
export const SET_OTHERS_ENTRY_DETAILS_DATA =
  'leaderboard/SET_OTHERS_ENTRY_DETAILS_DATA';

export const UPDATE_LEADERBOARD_DATA = 'leaderboard/UPDATE_LEADERBOARD_DATA';

export const startLeaderboardUpdates = (tournamentId, length, dispatch) => ({
  type: START_LEADERBOARD_UPDATES,
  tournamentId,
  length,
  dispatch,
});

export const stopLeaderboardUpdates = (tournamentId) => ({
  type: STOP_LEADERBOARD_UPDATES,
  tournamentId,
});

export const setLeaderboardData = (tournamentId, data) => ({
  type: SET_LEADERBOARD_DATA,
  tournamentId,
  data,
});

export const startEntriesUpdates = (tournamentId, userName, dispatch) => ({
  type: START_ENTRIES_UPDATES,
  tournamentId,
  userName,
  dispatch,
});
export const stopEntriesUpdates = (tournamentId) => ({
  type: STOP_ENTRIES_UPDATES,
  tournamentId,
});

export const setEntriesData = (tournamentId, data) => ({
  type: SET_ENTRIES_DATA,
  tournamentId,
  data,
});

export const startMyEntryDetailsUpdates = (tournamentId, dispatch) => ({
  type: START_MY_ENTRY_DETAILS_UPDATES,
  tournamentId,
  dispatch,
});

export const stopMyEntryDetailsUpdates = (tournamentId) => ({
  type: STOP_MY_ENTRY_DETAILS_UPDATES,
  tournamentId,
});

export const setMyEntryDetails = (tournamentId, data) => ({
  type: SET_MY_ENTRY_DETAILS_DATA,
  tournamentId,
  data,
});
export const startOthersEntryDetailsUpdates = (tournamentId, dispatch) => ({
  type: START_OTHERS_ENTRY_DETAILS_UPDATES,
  tournamentId,
  dispatch,
});

export const stopOthersEntryDetailsUpdates = (tournamentId) => ({
  type: STOP_OTHERS_ENTRY_DETAILS_UPDATES,
  tournamentId,
});

export const setOthersEntryDetails = (tournamentId, data) => ({
  type: SET_OTHERS_ENTRY_DETAILS_DATA,
  tournamentId,
  data,
});

export const updateLeaderBoard = () => ({
  type: UPDATE_LEADERBOARD_DATA,
});
