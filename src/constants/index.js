import {Platform, StatusBar} from 'react-native';
import {theme} from 'galio-framework';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export const CURR_CODE_PUSH_VERSION = '1.0';

// Screen Constants
export const SCREEN_HEIGHT = 896;
export const SCREEN_WIDTH = 414;

// Responsive height width percentage height
export const wp = (val) => widthPercentageToDP(val);
export const hp = (val) => heightPercentageToDP(val);

// Responsive font-size
export const fontSize = (val) => RFValue(val, 812);

// Header Height
export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = theme.SIZES.BASE * 4 + StatusHeight;
export const iPhoneX = () =>
  Platform.OS === 'ios' && (height === 812 || width === 812);
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

// CONFIGURATIONS
export const API_TIMEOUT = 60000;

export const LIVE_TOURNAMENT_PER_PAGE = 10;

// API CALLING CONSTANTS
export const GET_API = 'GET';
export const POST_API = 'POST';
export const PUT_API = 'PUT';
export const DELETE_API = 'DELETE';
export const UPDATE_API = 'PUT';
export const PATCH_API = 'PATCH';

// Image Constants
export const LOGO = require('../../assets/images/logo/icon.png');
export const WELCOME = require('../../assets/images/welcome/welcome.png');
export const BACK = require('../../assets/images/back/back.png');
export const HOME = require('../../assets/images/dashboard/home.png');
export const CONTEST = require('../../assets/images/dashboard/contest.png');
export const USER = require('../../assets/images/dashboard/default.png');
export const PROFILE_USER = require('../../assets/images/common/drawer_profile.png');
export const RECTANGLE = require('../../assets/images/common/rectangle.png');
export const RECTANGLE_YELLOW = require('../../assets/images/common/rectangle_yellow.png');
export const RECTANGLE_GREEN = require('../../assets/images/common/rectangle_green.png');
export const PLAY_ICON = require('../../assets/images/common/play.png');
export const PLAY_ICON_GREEN = require('../../assets/images/common/play_green.png');
export const BALL = require('../../assets/images/dashboard/ball.png');
export const MENU = require('../../assets/images/dashboard/menu.png');
export const CALENDAR = require('../../assets/images/dashboard/calendar.png');
export const ACTIVE_BEDGE = require('../../assets/images/dashboard/active_badge.png');
export const INACTIVE_BEDGE = require('../../assets/images/dashboard/inactive_badge.png');
export const COMPLETE_ICON = require('../../assets/images/dashboard/competedIcon.png');
export const COMPLETED = require('../../assets/images/dashboard/check.png');
export const MAGNIFIER = require('../../assets/images/dashboard/magnifier.png');
export const CROSS = require('../../assets/images/signup/close/close.png');
export const MLB = require('../../assets/images/dashboard/mlb.png');
export const NHL = require('../../assets/images/dashboard/nhl.png');
export const NFL = require('../../assets/images/dashboard/nfl.png');
export const DPLOGO = require('../../assets/images/logo/dplogo.png');
export const WELCOMEBG = require('../../assets/images/welcome/welcomebg1.jpg');
export const IC_GROUP = require('../../assets/images/welcome/Ic_group.png');
export const IC_LEFT_ARROW = require('../../assets/images/welcome/left_arrow.png');
export const DPLINEBG = require('../../assets/images/signup/dpLine.png');
export const WALLETICON = require('../../assets/images/signup/wallet.png');
export const ADDPLUS = require('../../assets/images/dashboard/plus.png');
export const FINALICON = require('../../assets/images/dashboard/final.png');
export const CONTACTS = require('../../assets/images/dashboard/contacts.png');
export const LOGOUTICON = require('../../assets/images/dashboard/logout.png');
export const NOTIFICATION = require('../../assets/images/dashboard/notification.png');
export const EDITBUTTON = require('../../assets/images/dashboard/edit_button.png');
export const BONUS_IMAGE = require('../../assets/images/signup/signupBonus.png');
export const INSTANT_DEPOSITE_IMAGE = require('../../assets/images/signup/instantDeposite.png');
export const LIMITED_TIME_IMAGE = require('../../assets/images/signup/limitedTime.png');
export const LIMITED_TIME_IMAGE_BG = require('../../assets/images/signup/limitedOfferBg.png');

export const NFL_SPORT = require('../../assets/images/dashboard/NFL_SPORT.png');
export const NHL_SPORT = require('../../assets/images/dashboard/NHL_SPORT.png');
export const MLB_SPORT = require('../../assets/images/dashboard/MLB_SPORT.png');
export const NBA_SPORT = require('../../assets/images/dashboard/NBA_SPORT.png');
export const ALL_SPORTS = require('../../assets/images/tournament/allSports.png');
export const NFL_BG = require('../../assets/images/dashboard/NFL_BG.png');
export const NHL_BG = require('../../assets/images/dashboard/NHL_BG.png');
export const MLB_BG = require('../../assets/images/dashboard/MLB_BG.png');
export const NBA_BG = require('../../assets/images/dashboard/NBA_BG.png');
export const RIGHT_ARROW = require('../../assets/images/dashboard/right-arrow.png');
export const RED_CROSS = require('../../assets/images/dashboard/red-cross.png');

export const NFLDASH = require('../../assets/images/dashboard/nfldash.png');
export const NHLDASH = require('../../assets/images/dashboard/nhl.png');
export const LOGINBG = require('../../assets/images/signup/backk.png');

export const NBASVG = require('../../assets/images/dashboard/nba.svg');
export const MLBSVG = require('../../assets/images/dashboard/mlb.svg');
export const NHLSVG = require('../../assets/images/dashboard/nhl.svg');
export const NFLSVG = require('../../assets/images/dashboard/nfl.svg');
export const DEFAULT = require('../../assets/images/dashboard/profile.png');
export const WALLET = require('../../assets/images/dashboard/wallet.png');
export const PLAYER = require('../../assets/images/dashboard/player.png');
export const SIDE_MENU = require('../../assets/images/common/menuIcon.png');
export const FILTER = require('../../assets/images/dashboard/filter.png');
export const REDCROSS = require('../../assets/images/dashboard/redCross.png');
export const RED_WHITE_CROSS = require('../../assets/images/dashboard/redAndWhite.png');
export const REFUND = require('../../assets/images/dashboard/refund.png');
export const INFORMATION = require('../../assets/images/dashboard/list.png');
export const LIST = require('../../assets/images/dashboard/entrantList.png');
export const PAYOUT = require('../../assets/images/dashboard/payout.png');
export const SCORING = require('../../assets/images/dashboard/info.png');
export const GREENARROW = require('../../assets/images/dashboard/greenArrow.png');
export const REFRESHICON = require('../../assets/images/dashboard/refresh.png');
export const EMAIL_LOGO = require('../../assets/images/signup/emailLogo.png');
export const LOCK_LOGO = require('../../assets/images/signup/lockLogo.png');
export const GREYCROSS = require('../../assets/images/dashboard/greyCross.png');
export const DOLLAR_ICON_WHITE = require('../../assets/images/common/dollarWhite.png');

export const EMAIL_HEADER = require('../../assets/images/signup/email_header.png');
export const LOCATION = require('../../assets/images/signup/globe_header.png');
export const DOB = require('../../assets/images/signup/calender_header.png');
export const CONTACTSS = require('../../assets/images/signup/contact_header.png');
export const DEPOSIT = require('../../assets/images/signup/deposit.png');
export const GEOGRAPHY = require('../../assets/images/signup/geography.png');
export const NOTIFICATION_PERMISSION = require('../../assets/images/signup/notificationPermission.png');

// App Tutorial icon
export const TROPHY = require('../../assets/images/appTutorial/trophy.png');

// Drawer icon
export const GAME = require('../../assets/images/signup/game.png');
export const TERM = require('../../assets/images/signup/term.png');
export const ACCOUNT = require('../../assets/images/signup/account.png');
export const CUP = require('../../assets/images/signup/cup.png');
export const CALL = require('../../assets/images/signup/call.png');
export const FAQ = require('../../assets/images/signup/faq.png');
export const LOGOUTBG = require('../../assets/images/signup/logout.png');
export const PRIVACY = require('../../assets/images/signup/privacy.png');
export const TEAM = require('../../assets/images/confidenceModal/team.png');
export const BONUS = require('../../assets/images/confidenceModal/bonus.png');
export const ESTIMATE = require('../../assets/images/confidenceModal/estimate.png');
export const GOAL = require('../../assets/images/confidenceModal/goal.png');
export const CLOSE = require('../../assets/images/dashboard/close.png');
export const TOPINFO = require('../../assets/images/dashboard/infoi.png');
export const ARROW_DOWN_BLUE = require('../../assets/images/common/downArrowBlue.png');
export const ARROW_UP_BLUE = require('../../assets/images/common/upArrowBlue.png');
export const FILTERBTN = require('../../assets/images/dashboard/filterbtn.png');
export const PROFILE_BELL = require('../../assets/images/dashboard/profileBell.png');
export const WORLD = require('../../assets/images/dashboard/world.png');
export const ADD_FUNDS = require('../../assets/images/common/addFunds.png');
export const WITHDRAW_FUNDS = require('../../assets/images/common/withdrawFunds.png');
export const TRANSACTION_HISTORY = require('../../assets/images/common/transaction_history.png');
export const IC_LEFT = require('../../assets/images/back/left.png');
export const PLUS_IC = require('../../assets/images/common/plus_ic.png');

// Common Icons
export const ARROW_UP = require('../../assets/images/common/arrowUp.png');
export const ARROW_DOWN = require('../../assets/images/common/arrowDown.png');
export const SELECTED_RADIO = require('../../assets/images/common/selectRadio.png');
export const UNSELECTED_RADIO = require('../../assets/images/common/unselectRadio.png');
export const DIVIDER_IMAGE = require('../../assets/images/common/deviderImage.png');
export const ADD_BLACK_IMAGE = require('../../assets/images/common/addIconBlack.png');
export const MINUS_BLACK_IMAGE = require('../../assets/images/common/minusIconBlack.png');
export const SNOWICON = require('../../assets/images/common/snow.png');
export const FLAMEICON = require('../../assets/images/common/flame.png');
export const TICKICON = require('../../assets/images/common/dtick.png');
export const RESERVEICON = require('../../assets/images/common/reserve.png');
export const CUP_WHITE = require('../../assets/images/common/trophyWhite.png');
export const NETWORK_LOGO_GREEN = require('../../assets/images/common/netwoekGreen.png');
export const PENCIL_CHECK_ICON = require('../../assets/images/common/checkPencil.png');
export const SETTING_LOGO = require('../../assets/images/logo/iOS_Setting.png');
export const TAP_LOCATION_LOGO = require('../../assets/images/logo/tapLocationLogo.png');
export const DREAMPICK_LOGO = require('../../assets/images/logo/DreamPickLogo.png');
export const LOCATION_CHECK_LOGO = require('../../assets/images/logo/location_check.png');
export const ANDROID_OPEN_SETTINGS = require('../../assets/images/logo/androidSettings.png');
export const ANDROID_TAP_PERMISSIONS = require('../../assets/images/logo/androidPermissions.png');
export const ANDROID_ENABLE_LOCATION = require('../../assets/images/logo/androidEnableLocation.png');
export const SELECTED_TEAM = require('../../assets/images/common/teamCheck.png');
export const GUARANTEED_ICON = require('../../assets/images/common/guranteedIcon.png');
export const AVAILABLE_STATES = require('../../assets/images/statePopup/Group.png');

export const LIVE_TOURNAMENT_ICON = require('../../assets/images/common/liveTourIcon.png');
export const LIVE_ICON = require('../../assets/images/tournament/live_icon.png');
export const LIVE_BACKGROUND = require('../../assets/images/common/liveBackground.png');
export const SHOW_EYE = require('../../assets/images/signup/eye-show.png');
export const LEFT_ARROW_BLUE = require('../../assets/images/back/left_arrow_blue.png');

// Action Constants
export const START_SPINNER = 'START_SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';

export const GET_LOCATION = 'GET_LOCATION';

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const STATES = 'STATES';
export const STATES_SUCCESS = 'STATES_SUCCESS';
export const STATES_FAILURE = 'STATES_FAILURE';

export const USER_EXIST = 'USER_EXIST';
export const USER_EXIST_SUCCESS = 'USER_EXIST_SUCCESS';
export const USER_EXIST_FAILURE = 'USER_EXIST_FAILURE';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

export const UPDATE_SIGNUP_USER_INFO = 'UPDATE_SIGNUP_USER_INFO';
export const UPDATE_FILTER_INFO = 'UPDATE_FILTER_INFO';
export const SORT_TOURNAMENT_LIST = 'SORT_TOURNAMENT_LIST';
export const FILTER_ENABLED = 'FILTER_ENABLED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const SAVE_SELECTIONS = 'SAVE_SELECTIONS';
export const SAVE_MATCHES = 'SAVE_MATCHES';
export const ADD_NAME = 'ADD_NAME';
export const GAME_KEY = 'GAME_KEY';

export const FORGET_PASSWORD = 'FORGET_PASSWORD';
export const FORGET_PASSWORD_SUCCESS = 'FORGET_PASSWORD_SUCCESS';
export const FORGET_PASSWORD_FAILURE = 'FORGET_PASSWORD_FAILURE';

export const GET_PAYOUT = 'GET_PAYOUT';
export const GET_PAYOUT_SUCCESS = 'GET_PAYOUT_SUCCESS';
export const GET_PAYOUT_FAILURE = 'GET_PAYOUT_FAILURE';

export const GET_CONTEST_TYPE = 'GET_CONTEST_TYPE';
export const GET_CONTEST_TYPE_SUCCESS = 'GET_CONTEST_TYPE_SUCCESS';
export const GET_CONTEST_TYPE_FAILURE = 'GET_CONTEST_TYPE_FAILURE';

export const TOURNAMENT = 'TOURNAMENT';
export const TOURNAMENT_SUCCESS = 'TOURNAMENT_SUCCESS';
export const TOURNAMENT_FAILURE = 'TOURNAMENT_FAILURE';
export const TOURNAMENT_REMOVE = 'TOURNAMENT_REMOVE';

export const MYCONTEST = 'MYCONTEST';
export const MYCONTEST_SUCCESS = 'MYCONTEST_SUCCESS';
export const MYCONTEST_FAILURE = 'MYCONTEST_FAILURE';
export const REMOVEMYCONTEST = 'REMOVEMYCONTEST';

export const GET_GAME_ENTRANTS = 'GET_GAME_ENTRANTS';
export const GET_GAME_ENTRANTS_SUCCESS = 'GET_GAME_ENTRANTS_SUCCESS';
export const GET_GAME_ENTRANTS_FAILURE = 'GET_GAME_ENTRANTS_FAILURE';

export const GET_OTHER_SELECTIONS = 'GET_OTHER_SELECTIONS';
export const GET_OTHER_SELECTIONS_SUCCESS = 'GET_OTHER_SELECTIONS_SUCCESS';
export const GET_OTHER_SELECTIONS_FAILURE = 'GET_OTHER_SELECTIONS_FAILURE';

export const SEARCH_TOURNAMENT_SUCCESS = 'SEARCH_TOURNAMENT_SUCCESS';
export const SEARCH_TOURNAMENT_FAILURE = 'SEARCH_TOURNAMENT_FAILURE';

export const GET_GAME_ENTRIES = 'GET_GAME_ENTRIES';
export const GET_GAME_ENTRIES_SUCCESS = 'GET_GAME_ENTRIES_SUCCESS';
export const GET_GAME_ENTRIES_FAILURE = 'GET_GAME_ENTRIES_FAILURE';

export const MYRESULT = 'MYRESULT';
export const MYRESULT_SUCCESS = 'MYRESULT_SUCCESS';
export const MYRESULT_FAILURE = 'MYRESULT_FAILURE';

export const MATCHES = 'MATCHES';
export const MATCHES_SUCCESS = 'MATCHES_SUCCESS';
export const MATCHES_FAILURE = 'MATCHES_FAILURE';
export const REMOVE_MATCHES = 'REMOVE_MATCHES';

export const SUBMIT_SUMMARY = 'SUBMIT_SUMMARY';
export const SUBMIT_SUMMARY_SUCCESS = 'SUBMIT_SUMMARY_SUCCESS';
export const SUBMIT_SUMMARY_FAILURE = 'SUBMIT_SUMMARY_FAILURE';
export const ADD_SELECTEC_TEAM_SUCCESS = 'ADD_SELECTEC_TEAM_SUCCESS';
export const SUBMIT = 'SUBMIT';

export const TEAM_SUMMARY = 'TEAM_SUMMARY';
export const TEAM_SUMMARY_SUCCESS = 'TEAM_SUMMARY_SUCCESS';
export const TEAM_SUMMARY_FAILURE = 'TEAM_SUMMARY_FAILURE';

export const GET_PLAYER = 'GET_PLAYER';
export const GET_PLAYER_SUCCESS = 'GET_PLAYER_SUCCESS';
export const GET_PLAYER_FAILURE = 'GET_PLAYER_FAILURE';

export const TEAM_PLAYER = 'TEAM_PLAYER';
export const TEAM_PLAYER_SUCCESS = 'TEAM_PLAYER_SUCCESS';
export const TEAM_PLAYER_FAILURE = 'TEAM_PLAYER_FAILURE';

export const GET_ALL_PLAYER = 'GET_ALL_PLAYER';
export const GET_ALL_PLAYER_SUCCESS = 'GET_ALL_PLAYER_SUCCESS';
export const GET_ALL_PLAYER_FAILURE = 'GET_ALL_PLAYER_FAILURE';

export const ALL_TEAM_PLAYER = 'ALL_TEAM_PLAYER';
export const ALL_TEAM_PLAYER_SUCCESS = 'ALL_TEAM_PLAYER_SUCCESS';
export const ALL_TEAM_PLAYER_FAILURE = 'ALL_TEAM_PLAYER_FAILURE';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const GET_TUTORIAL_DATA_SUCCESS = 'GET_TUTORIAL_DATA_SUCCESS';
export const GET_TUTORIAL_DATA_FAILURE = 'GET_TUTORIAL_DATA_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const GET_USER_ACCOUNT_BALANCE = 'GET_USER_ACCOUNT_BALANCE';
export const GET_USER_ACCOUNT_BALANCE_SUCCESS =
  'GET_USER_ACCOUNT_BALANCE_SUCCESS';
export const GET_USER_ACCOUNT_BALANCE_FAILURE =
  'GET_USER_ACCOUNT_BALANCE_FAILURE';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const GET_SEARCH_TRANSACTIONS_SUCCESS =
  'GET_SEARCH_TRANSACTIONS_SUCCESS';
export const GET_TRANSACTIONS_FAILURE = 'GET_TRANSACTIONS_FAILURE';

export const GET_SPORTS = 'GET_SPORTS';
export const GET_SPORTS_SUCCESS = 'GET_SPORTS_SUCCESS';
export const GET_SPORTS_FAILURE = 'GET_SPORTS_FAILURE';

export const CLEAR_CONTEST_SEARCH = 'CLEAR_CONTEST_SEARCH';

export const NOTIFICATION_COUNT = 'NOTIFICATION_COUNT';
export const NOTIFICATION_COUNT_SUCCESS = 'NOTIFICATION_COUNT_SUCCESS';
export const NOTIFICATION_COUNT_FAILURE = 'NOTIFICATION_COUNT_FAILURE';
export const RESET_NOTIFICATION_COUNT = 'RESET_NOTIFICATION_COUNT';

export const MY_NOTIFICATIONS = 'MY_NOTIFICATIONS';
export const MY_NOTIFICATIONS_SUCCESS = 'MY_NOTIFICATIONS_SUCCESS';
export const MY_NOTIFICATIONS_FAILURE = 'NOTIFICATION_COUNT_FAILURE';

// WihDrawls
export const GET_WITHDRAWALS_REQUEST = 'GET_WITHDRAWALS_REQUEST';
export const GET_WITHDRAWALS_SUCCESS = 'GET_WITHDRAWALS_SUCCESS';
export const GET_WITHDRAWALS_FAILURE = 'GET_WITHDRAWALS_FAILURE';

export const SEND_WITHDRAWALS_REQUEST = 'SEND_WITHDRAWALS_REQUEST';
export const SEND_WITHDRAWALS_SUCCESS = 'SEND_WITHDRAWALS_SUCCESS';
export const SEND_WITHDRAWALS_FAILURE = 'SEND_WITHDRAWALS_FAILURE';

// Signup

export const EMAIL_ADDRESS = 'Email Address';
export const NEXT = 'Next';
export const CREATE_USER_NAME = 'Create a Username';
export const USERNAME = 'Username';
export const USERNAME_INPUT_DES =
  'It must be 4-20 characters long with no spaces.';

export const BONUS_TAG = 'Bonus : ';
export const PENALTY_TAG = 'Penalty : ';

//Welcome Screen

export const SLOGAN = 'WIN BIG WITH TEAM BASED FANTASY SPORTS';
export const NO_PLAYERS = 'No Players to Draft';
export const NO_SALARY = 'No Salary Caps';
export const PICK_TEAM =
  'Pick your teams, set their fantasy points and win real cash';
export const SIGN_UP = 'SIGN UP';
export const SIGN_IN = 'SIGN IN';
export const ALREADY_HAVE_AC = 'Already have an account?';

//Rules Screen

export const SCORING_STR = 'SCORING';
export const PLAYER_SCORING = 'PLAYER SCORING';
export const GOALIE_SCORING = 'GOALIE SCORING';
export const PITCHER_SCORING = 'PITCHER SCORING';
export const HITTER_SCORING = 'HITTER SCORING';
export const POINTS = 'POINTS';
export const PASSING_YARDS = 'Passing Yards';
export const THREE_HANDRED_PASSING_YARDS = '300+ Passing Yards';
export const PASSING_TD = 'Passing TD';
export const INTERCEPTIONS = 'Interceptions';
export const RUSHING_YARD = 'Rushing Yards';
export const ONE_HANDRED_PASSING_YARD = '100+ Passing Yards';
export const RUSHING_TD = 'Rushing TD';
export const RECEVING_YARDS = 'Receiving Yards';
export const ONE_HANDRED_RECEVING_YARDS = '100+ Receiving Yards';
export const RECEPTION = 'Reception';
export const RECEVING_TD = 'Receiving TD';
export const FUMBLE_LOST = 'Fumble Lost';
export const TWO_PT_CONVERSION = '2pt Conversion (pass/run/catch)';
export const OFFENSIVE_FUMBLE = 'Offensive Fumble Recovery TD';

export const PT_FOR_TWENTYFIVE = 'Pt for every 25 yards';
export const PTS_BONUS = 'Pts Bonus';
export const PTS = 'Pts';
export const PT = 'Pt';
export const PT_FOR_TEN = '1 Pt for every 10 yards';
export const ADD_ANOTHER_ENTRY = 'ADD ANOTHER ENTRY';
export const ADD_ENTRY = 'ADD ENTRY';

export const FILTER_OPTION_ID = {
  SORTED_BY: 1,
  CONTEST_TYPE: 2,
  MULTI_ENTRY_LIMIT: 3,
  GUARANTEED_STATUS: 4,
};

export const SELECTION_TYPE = {
  SINGLE: 1,
  MULTIPLE: 2,
  SWITCH: 3,
  INPUT: 4,
};

export const SORTED_BY = {
  RECOMMENDED: 0,
  ENTRY_FEE_HIGH_TO_LOW: 1,
  ENTRY_FEE_LOW_TO_HIGH: 2,
  ENTRIES_HIGH_TO_LOW: 3,
  ENTRIES_LOW_TO_HIGH: 4,
  TOTAL_PRIZES_HIGH_TO_LOW: 5,
  TOTAL_PRIZES_LOW_TO_HIGH: 6,
  CONTEST_NAME_Z_TO_A: 7,
  CONTEST_NAME_A_TO_Z: 8,
};

export const URI_SCHEME = {
  iOS: 'dreampick://',
  android: 'dreampick://callback',
};

export const SPORTS_ICON_LIST = {
  ALL: ALL_SPORTS,
  NBA: NBA_SPORT,
  MLB: MLB_SPORT,
  NHL: NHL_SPORT,
  NFL: NFL_SPORT,
};

// Select team images
export function selectTeamImage(sport, index) {
  let imageSource = require('../../assets/images/tournament/NFLSelectTeamOne.png');
  switch (sport) {
    case 'NFL':
      switch (index) {
        case 0:
          imageSource = require('../../assets/images/tournament/NFLSelectTeamOne.png');
          break;
        case 1:
          imageSource = require('../../assets/images/tournament/NFLSelectTeamTwo.png');
          break;
        case 2:
          imageSource = require('../../assets/images/tournament/NFLSelectTeamThree.png');
          break;
      }
      break;
    case 'NBA':
      switch (index) {
        case 0:
          imageSource = require('../../assets/images/tournament/NBASelectTeamOne.png');
          break;
        case 1:
          imageSource = require('../../assets/images/tournament/NBASelectTeamTwo.png');
          break;
        case 2:
          imageSource = require('../../assets/images/tournament/NBASelectTeamThree.png');
          break;
      }
      break;
    case 'MLB':
      switch (index) {
        case 0:
          imageSource = require('../../assets/images/tournament/MLBSelectTeamOne.png');
          break;
        case 1:
          imageSource = require('../../assets/images/tournament/MLBSelectTeamTwo.png');
          break;
        case 2:
          imageSource = require('../../assets/images/tournament/MLBSelectTeamThree.png');
          break;
      }
      break;
    case 'NHL':
      switch (index) {
        case 0:
          imageSource = require('../../assets/images/tournament/NHLSelectTeamOne.png');
          break;
        case 1:
          imageSource = require('../../assets/images/tournament/NHLSelectTeamTwo.png');
          break;
        case 2:
          imageSource = require('../../assets/images/tournament/NHLSelectTeamThree.png');
          break;
      }
      break;
    default:
      break;
  }
  return imageSource;
}

export const RIGHT_SHEVERON = require('../../assets/images/tournament/rightSheveron.png');
export const PLUS = require('../../assets/images/tournament/plus.png');
