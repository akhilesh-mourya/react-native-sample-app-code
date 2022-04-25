import React from 'react';
import {Icon} from 'galio-framework';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';

import Splash from '../screens/splash';
import SignIn from '../screens/signin/signInContainer';
import SignUp from '../screens/signup/signUpComponent';
import FullNameScreen from '../screens/signup/fullNameScreen';
import UserNameScreen from '../screens/signup/userNameScreen';
import ChooseStateScreen from '../screens/signup/chooseState';
import DOBSelectorScreen from '../screens/signup/dobSelector';
import MakeDepositScreen from '../screens/makeDeposit/depositContainer';
import AppTutorial from '../screens/appTutorial/appTutorialContainer';
import HowToPlayScreen from '../screens/howToPlay/howToPlayContainer';
import SetPasswordScreen from '../screens/signup/setPassword';
import LocationScreen from '../screens/location/locationContainer';
import MyContest from '../screens/myContest/myContestContainer';
import Home from '../screens/home/homeContainer';
import TransactionHistory from '../screens/transactionHistory/transactionHistoryContainer';
import ForgotPassword from '../screens/forgotPassword/forgotPasswordContainer';
import Profile from '../screens/profile/profileContainer';
import ResultScreen from '../screens/results/resultContainer';
import SelectSportScreen from '../screens/selectSport/selectSportContainer';
import PayoutStructure from '../screens/payoutStructure/payoutContainer';
import WalletScreen from '../screens/wallet/walletContainer';
import SettingScreen from '../screens/settings/settingContainer';
import ContactUs from '../screens/contactUs/contactUs';
import ScoringRule from '../screens/scoringRules/scoringRule';
import DrawerScreen from '../screens/drawer/drawerScreenContainer';
import Notification from '../screens/notifications/notificationContainer';
import FilterNewScreen from '../screens/filterNew/filterScreenContainer';
import ChooseBonusContainer from '../screens/chooseBonus/chooseBonusContainer';
import styles, {TabIcon} from './style';
import materialTheme from '../constants/theme';
import ProfileDrawerScreen from '../screens/profileDrawer/profileDrawerContainer';
import NotificationIcon from '../components/molecules/notificationIcon';
import WithdrawFunds from '../screens/withdrawFunds/withdrawFundsContainer';
import AllowNotification from '../screens/allowNotification';
import ViewRoster from '../screens/viewRoster/viewRosterContainer';
import LiveLeaderboard from '../screens/liveLeaderboardMyEntriesDetails/index';
import WelcomeScreenComponent from '../screens/welcomeScreen/welcomeContainer';
import JoinContestSelectTeam from '../screens/joinContestSelectTeam';
import SelectIndividualTeam from '../screens/joinContestSelectTeam/enter/selectIndividualTeam';
import Rosters from '../screens/roster/rosters';
import SelectIndividualTeamBooster from '../screens/joinContestSelectTeam/enter/selectIndividualTeamBooster';
import EditEntries from '../screens/editEntries';
import MyContestDetails from '../screens/myContestDetails';
import MyResultsDetails from '../screens/myResultsDetails';
import MyResultGameDetails from '../screens/myResultGameDetails';
import {PLAY_ICON, PLAY_ICON_GREEN} from '../constants';

const Tab1 = createStackNavigator(
  {
    SelectSportScreen: {
      screen: SelectSportScreen,
      navigationOptions: {headerShown: false},
    },
    HomeTournamentsScreen: {
      screen: Home,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'HomeTournamentsScreen',
    headerShown: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

const Tab2 = createStackNavigator(
  {
    Contest: {screen: MyContest, navigationOptions: {headerShown: false}},
  },
  {
    initialRouteName: 'Contest',
    headerShown: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

const Tab3 = createStackNavigator(
  {
    Contest: {screen: MyContest, navigationOptions: {headerShown: false}},
    ResultScreen: {
      screen: ResultScreen,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'ResultScreen',
    headerShown: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

const Tab4 = createStackNavigator(
  {
    ProfileScreen: {
      screen: SettingScreen,
      navigationOptions: {headerShown: false},
    },
    Profile: {
      screen: Profile,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'ProfileScreen',
    headerShown: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

const Tab5 = createStackNavigator(
  {
    NotificationScreen: {
      screen: Notification,
      navigationOptions: {headerShown: false},
    },
    Notification: {
      screen: Notification,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'NotificationScreen',
    headerShown: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: Tab1,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({focused}) => (
          <Icon
            family="Entypo"
            name="home"
            color={
              focused
                ? materialTheme.COLORS.GREEN
                : materialTheme.COLORS.SECONDARY_TEXT_COLOR
            }
            size={25}
          />
        ),
        tabBarOnPress: ({navigation}) => {
          navigation.popToTop();
          navigation.navigate(navigation.state.routeName);
        },
      },
    },

    ContestScreen: {
      screen: Tab2,
      navigationOptions: {
        title: 'My Contests',
        tabBarIcon: ({focused}) => (
          <Icon
            family="Entypo"
            name="trophy"
            color={
              focused
                ? materialTheme.COLORS.GREEN
                : materialTheme.COLORS.SECONDARY_TEXT_COLOR
            }
            size={25}
          />
        ),
        tabBarOnPress: ({navigation}) => {
          navigation.popToTop();
          navigation.navigate(navigation.state.routeName);
        },
      },
    },
    ResultScreen: {
      screen: Tab3,
      path: 'results',
      navigationOptions: {
        title: 'Results',
        tabBarIcon: ({focused}) => (
          <Icon
            family="Entypo"
            name="list"
            color={
              focused
                ? materialTheme.COLORS.GREEN
                : materialTheme.COLORS.SECONDARY_TEXT_COLOR
            }
            size={25}
          />
        ),
        tabBarOnPress: ({navigation}) => {
          navigation.popToTop();
          navigation.navigate(navigation.state.routeName);
        },
      },
    },
    NotificationScreen: {
      screen: Tab5,
      navigationOptions: {
        title: 'Notifications',
        tabBarIcon: ({focused}) => <NotificationIcon focused={focused} />,
        tabBarOnPress: ({navigation}) => {
          navigation.popToTop();
          navigation.navigate(navigation.state.routeName);
        },
      },
    },
    ProfileScreen: {
      screen: ProfileDrawerScreen,
      navigationOptions: {
        headerShown: false,
        title: 'How to play',
        tabBarIcon: ({focused}) => (
          <TabIcon
            source={focused ? PLAY_ICON_GREEN : PLAY_ICON}
            color={
              focused
                ? materialTheme.COLORS.GREEN
                : materialTheme.COLORS.SECONDARY_TEXT_COLOR
            }
          />
        ),
        tabBarOnPress: ({navigation}) => {
          navigation.popToTop();
          navigation.navigate(navigation.state.routeName);
          // navigation.toggleProfileDrawer();
        },
      },
    },
  },
  {
    tabBarOptions: {
      style: styles.tab,
      labelStyle: styles.label,
      activeTintColor: materialTheme.COLORS.GREEN,
      allowFontScaling: false,
    },
  },
);

const MainNavigationDrawer = createDrawerNavigator(
  {
    Home: TabNavigator,
  },
  {
    contentComponent: DrawerScreen,
    drawerWidth: '80%',
    drawerPosition: 'left',
    gestureEnabled: false,
    swipeEnabled: false,
    getCustomActionCreators: (route, stateKey) => ({
      toggleLeftDrawer: () => DrawerActions.toggleDrawer({key: stateKey}),
    }),
  },
);

const StackNavigator = createStackNavigator(
  {
    SplashScreen: {screen: Splash, navigationOptions: {headerShown: false}},
    WelcomeScreenComponent: {
      screen: WelcomeScreenComponent,
      navigationOptions: {headerShown: false},
    },
    SignInScreen: {screen: SignIn, navigationOptions: {headerShown: false}},
    SignUpScreen: {screen: SignUp, navigationOptions: {headerShown: false}},
    FullNameScreen: {
      screen: FullNameScreen,
      navigationOptions: {headerShown: false},
    },
    UserNameScreen: {
      screen: UserNameScreen,
      navigationOptions: {headerShown: false},
    },
    ChooseStateScreen: {
      screen: ChooseStateScreen,
      navigationOptions: {headerShown: false},
    },
    DOBSelectorScreen: {
      screen: DOBSelectorScreen,
      navigationOptions: {headerShown: false},
    },
    SetPasswordScreen: {
      screen: SetPasswordScreen,
      navigationOptions: {headerShown: false},
    },
    LocationScreen: {
      screen: LocationScreen,
      navigationOptions: {headerShown: false},
    },
    ForgotPasswordScreen: {
      screen: ForgotPassword,
      navigationOptions: {headerShown: false},
    },
    DashBoardScreen: {
      screen: MainNavigationDrawer,
      navigationOptions: {headerShown: false},
    },
    ProfileScreen: {
      screen: Profile,
      navigationOptions: {headerShown: false},
    },
    MakeDepositScreen: {
      screen: MakeDepositScreen,
      navigationOptions: {headerShown: false},
    },
    AppTutorialScreen: {
      screen: AppTutorial,
      navigationOptions: {headerShown: false},
    },
    HowToPlayScreen: {
      screen: HowToPlayScreen,
      navigationOptions: {headerShown: false},
    },
    FilterScreen: {
      screen: FilterNewScreen,
      navigationOptions: {headerShown: false},
    },
    PayoutScreen: {
      screen: PayoutStructure,
      navigationOptions: {headerShown: false},
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {headerShown: false},
    },
    WalletScreen: {
      screen: WalletScreen,
      navigationOptions: {headerShown: false},
    },
    ContactUsScreen: {
      screen: ContactUs,
      navigationOptions: {headerShown: false},
    },
    ScoringRuleScreen: {
      screen: ScoringRule,
      navigationOptions: {headerShown: false},
    },
    ChooseBonusScreen: {
      screen: ChooseBonusContainer,
      navigationOptions: {headerShown: false},
    },
    TransactionHistoryScreen: {
      screen: TransactionHistory,
      navigationOptions: {headerShown: false},
    },
    WithdrawFundsScreen: {
      screen: WithdrawFunds,
      navigationOptions: {headerShown: false},
    },
    AllowNotificationScreen: {
      screen: AllowNotification,
      navigationOptions: {headerShown: false},
    },
    ViewRosterScreen: {
      screen: ViewRoster,
      navigationOptions: {headerShown: false},
    },
    LiveLeaderboard: {
      screen: LiveLeaderboard,
      navigationOptions: {headerShown: false},
    },
    SelectIndividualTeamScreen: {
      screen: SelectIndividualTeam,
      navigationOptions: {headerShown: false},
    },
    SelectIndividualTeamBoosterScreen: {
      screen: SelectIndividualTeamBooster,
      navigationOptions: {headerShown: false},
    },
    JoinContestSelectTeamScreen: {
      screen: JoinContestSelectTeam,
      navigationOptions: {headerShown: false},
    },
    EditEntriesScreen: {
      screen: EditEntries,
      navigationOptions: {headerShown: false},
    },
    MyContestDetailsScreen: {
      screen: MyContestDetails,
      navigationOptions: {headerShown: false},
    },
    MyResultsDetailsScreen: {
      screen: MyResultsDetails,
      navigationOptions: {headerShown: false},
    },
    MyResultGameDetails: {
      screen: MyResultGameDetails,
      navigationOptions: {headerShown: false},
    },
    Rosters: {
      screen: Rosters,
      navigationOptions: {headerShown: false},
    },
    ProfileDrawerScreen: {
      screen: ProfileDrawerScreen,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerShown: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(StackNavigator);
