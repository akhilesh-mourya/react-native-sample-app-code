import * as CONST from '../constants';
import Moment from 'moment';
import * as RNLocalize from 'react-native-localize';
import moment from 'moment-timezone';
import {theme} from 'galio-framework';
import materialTheme from './theme';
import {Platform, Alert} from 'react-native';
import queryString from 'query-string';
import {GetStoreData, KEYS, SetStoreData} from 'async_storage';
import GetLocation from 'react-native-get-location';
import NavigationService from '../constants/navigations';
import {environment} from '../environments/environment';
import {appObj} from '../App';
import {dark} from '../theme/colors';
import scale from '../constants/scale';
class Utility {
  static getTournamentIcon(type) {
    switch (type) {
      case 'NBA':
        return CONST.BALL;
      case 'MLB':
        return CONST.MLB;
      case 'NHL':
        return CONST.NHL;
      case 'NFL':
        return CONST.NFL;
      default:
        return CONST.NFL;
    }
  }

  static getId(id) {
    switch (id) {
      case '1':
        return 'NBA';
      case '2':
        return 'MLB';
      case '3':
        return 'NHL';
      case '4':
        return 'NFL';
      default:
        return 'ALL';
    }
  }

  static getFormattedTournamentDetail(item) {
    return `${item.short_name} Tournament ${Utility.generateTotalPrice(
      item.total_entrants_limit,
      item.entry,
    )}`;
  }

  static ordinalSuffixOf(i) {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + 'st';
    }
    if (j === 2 && k !== 12) {
      return i + 'nd';
    }
    if (j === 3 && k !== 13) {
      return i + 'rd';
    }
    return i + 'th';
  }

  static getBeforeTime(time) {
    var time = Moment(time, 'hh:mm A')
      .subtract(15, 'minutes')
      .format('hh:mm A');
    return `${time}`;
  }

  static getAfterTime(time) {
    var time = Moment().add(time, 'minutes').format('hh:mm A'); // it will add 11 mins in the current time and will give time in 03:35 PM format; can use m or minutes
    return `${time}`;
  }

  static numFormatter(num) {
    num = '' + num;
    num = num.replace('$', '');
    num = num.replace(',', '');
    num = num.replace('K', '');
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  static generateTotalPrice(totalEntrantsLimit, entryFees) {
    totalEntrantsLimit = '' + totalEntrantsLimit;
    totalEntrantsLimit = totalEntrantsLimit.replace('$', '');
    totalEntrantsLimit = totalEntrantsLimit.replace(',', '');
    totalEntrantsLimit = totalEntrantsLimit.replace('K', '');
    entryFees = '' + entryFees;
    entryFees = entryFees.replace('$', '');
    entryFees = entryFees.replace(',', '');
    entryFees = entryFees.replace('K', '');
    let totalPrice = totalEntrantsLimit * entryFees;
    return Utility.PricePostFix(totalPrice - (10 * totalPrice) / 100);
  }

  static getCountDownSeconds(serverTime) {
    // get device timezone eg. -> "Asia/Shanghai"
    const deviceTimeZone = RNLocalize.getTimeZone();
    var servertime = moment(serverTime);

    // Make moment of right now, using the device timezone
    const serverLocalTime = servertime.tz(deviceTimeZone).valueOf();

    let counter = serverLocalTime - new Date().getTime();
    counter = Math.floor(counter / 1000);
    return counter;
  }

  static getFormattedDate(serverTime, dateFormatter) {
    // get device timezone eg. -> "Asia/Shanghai"
    const deviceTimeZone = RNLocalize.getTimeZone();
    // Updated date formates according to device time formate (24 Hours / 12 Hours)
    const uses24HourClock = RNLocalize.uses24HourClock();
    if (!dateFormatter) {
      dateFormatter = uses24HourClock ? 'ddd HH:mm z' : 'ddd hh:mm A z';
    }
    var servertime = moment(serverTime);

    // Make moment of right now, using the device timezone
    const dateString = servertime.tz(deviceTimeZone).format(dateFormatter);

    return dateString;
  }

  static getLocalTime(date) {
    return Moment(date || new Date())
      .tz(RNLocalize.getTimeZone())
      .format('hh:mm A z');
  }

  static formatNumberCommas(totalEntrantsLimit, entryFees) {
    totalEntrantsLimit = '' + totalEntrantsLimit;
    totalEntrantsLimit = totalEntrantsLimit.replace('$', '');
    totalEntrantsLimit = totalEntrantsLimit.replace(',', '');
    totalEntrantsLimit = totalEntrantsLimit.replace('K', '');
    entryFees = '' + entryFees;
    entryFees = entryFees.replace('$', '');
    entryFees = entryFees.replace(',', '');
    entryFees = entryFees.replace('K', '');
    let totalPrice = totalEntrantsLimit * entryFees;
    let price = totalPrice - (10 * totalPrice) / 100;
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  static getCommaSeparatedAmount(amount) {
    amount = '' + amount;
    amount = amount.replace('$', '');
    amount = amount.replace(',', '');
    amount = amount.replace('K', '');
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  static PricePostFix(n) {
    n = '' + n;
    n = n.replace('$', '');
    n = n.replace(',', '');
    n = n.replace('K', '');
    if (n < 1e3) {
      return n;
    }
    if (n >= 1e3 && n < 1e6) {
      return +(n / 1e3).toFixed(1) + 'K';
    }
    if (n >= 1e6 && n < 1e9) {
      return +(n / 1e6).toFixed(1) + 'M';
    }
    if (n >= 1e9 && n < 1e12) {
      return +(n / 1e9).toFixed(1) + 'B';
    }
    if (n >= 1e12) {
      return +(n / 1e12).toFixed(1) + 'T';
    }
  }

  static toTitleCase(str) {
    return str.replace(/(^|\s)\S/g, function (t) {
      return t.toUpperCase();
    });
  }

  static getFirstPrizeAmount(totalPrize) {
    totalPrize = '' + totalPrize;
    totalPrize = totalPrize.replace('$', '');
    totalPrize = totalPrize.replace(',', '');
    totalPrize = totalPrize.replace('K', '');
    let price = (20 * totalPrize) / 100;
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  static debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
      const context = this;
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, delay);
    };
  };
  static getQueryString = (queries) => {
    return Object.keys(queries)
      .reduce((result, key) => {
        return [
          ...result,
          `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`,
        ];
      }, [])
      .join('&');
  };

  static changeStringStyle(string, textType) {
    switch (textType) {
      case 'fullCapital':
        string = string.toUpperCase();
        break;
      case 'firstCapital':
        string =
          string.toLowerCase().charAt(0).toUpperCase() +
          string.slice(1).toLowerCase();
        break;
      case 'pascalCapital':
        string = string
          .toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
        break;
      case 'smallCase':
        string = string.toLowerCase();
        break;
      case 'defaultCase':
        string = string;
        break;
      default:
        break;
    }
    return string;
  }

  static changeColorLable(type) {
    let size = theme.SIZES.FONT;
    let color = theme.COLORS.WHITE;
    switch (type) {
      case 'danger':
        size = theme.SIZES.FONT * 0.75;
        color = materialTheme.COLORS.ERROR;
        break;
      case 'small':
      case 'smallBold':
        size = theme.SIZES.FONT * 0.82;
        break;
      case 'verySmall':
        size = theme.SIZES.FONT * 0.62;
        break;
      case 'tooSmall':
        size = theme.SIZES.FONT * 0.7;
        break;
      case 'smallest':
        size = theme.SIZES.FONT * 0.72;
        break;
      case 'smallSecondary':
        color = materialTheme.COLORS.SECONDARY_TEXT_COLOR;
        size = theme.SIZES.FONT * 0.75;
        break;
      case 'mediumSecondary':
        color = materialTheme.COLORS.SECONDARY_TEXT_COLOR;
        break;
      case 'medium':
        size = theme.SIZES.FONT * 1.75;
        break;
      case 'regular':
      case 'regularBold':
        size = theme.SIZES.FONT * 0.95;
        break;
      case 'secondaryGreen':
        color = materialTheme.COLORS.GREEN;
        size = theme.SIZES.FONT * 1.1;
        break;
      case 'secondary':
        size = theme.SIZES.FONT * 1.1;
        break;
      case 'large':
        size = theme.SIZES.FONT * 2.075;
        break;
      case 'custom':
        size = theme.SIZES.FONT * 1.35;
        break;
      case 'customWhite':
        size = theme.SIZES.FONT * 1.5;
        break;
      case 'customGreen':
        color = materialTheme.COLORS.GREEN;
        size = theme.SIZES.FONT * 1.35;
        break;
      case 'bigGreen':
        color = materialTheme.COLORS.GREEN;
        size = theme.SIZES.FONT * 1.75;
        break;
      case 'customOrange':
        color = materialTheme.COLORS.ORANGE;
        size = theme.SIZES.FONT * 1.75;
        break;
      case 'primary':
      case 'primaryBold':
        color = materialTheme.COLORS.GREEN;
        break;
      case 'secondaryWhite':
        color = materialTheme.COLORS.WHITE;
        size = theme.SIZES.FONT * 1.3;
        break;
      case 'primaryWhite':
        color = materialTheme.COLORS.WHITE;
        size = theme.SIZES.FONT * 1.2;
        break;
      case 'greenBold':
        color = materialTheme.COLORS.GREEN;
        size = theme.SIZES.FONT * 1.1;
        break;
      case 'tertiaryBold':
        color = materialTheme.COLORS.CARDYELLOW;
        break;
      case 'tertiarySmall':
        color = materialTheme.COLORS.CARDYELLOW;
        size = theme.SIZES.FONT * 0.75;
        break;
      case 'tertiaryBig':
        color = materialTheme.COLORS.CARDYELLOW;
        size = theme.SIZES.FONT * 0.88;
        break;
      case 'secondaryBold':
        color = materialTheme.COLORS.GREEN;
        size = theme.SIZES.FONT * 0.75;
        break;
      case 'primaryGreen':
        color = materialTheme.COLORS.FOR_MY_ENTRIES_COLOR;
        size = theme.SIZES.FONT * 0.75;
        break;
      case 'secondaryOrange':
        color = materialTheme.COLORS.ORANGE;
        size = theme.SIZES.FONT * 0.75;
        break;
      case 'buttonPrimary':
        color = materialTheme.COLORS.ORANGE;
        size = theme.SIZES.FONT * 1.35;
        break;
      case 'smallBlack':
        color = materialTheme.COLORS.BLACK;
        break;
      case 'primaryBlue':
        size = theme.SIZES.FONT * 1.2;
        color = materialTheme.COLORS.DARK_BLUE;
        break;
      case 'secondaryBlue':
        size = theme.SIZES.FONT * 0.95;
        color = materialTheme.COLORS.DARK_BLUE;
        break;
      case 'primaryRed':
        color = materialTheme.COLORS.LIGHT_RED;
        size = theme.SIZES.FONT * 0.95;
        break;
      case 'biggerRed':
        color = materialTheme.COLORS.LIGHTxp_RED;
        size = theme.SIZES.FONT * 1.1;
        break;
      case 'smallRed':
        color = materialTheme.COLORS.LIGHT_RED;
        size = theme.SIZES.FONT * 0.72;
        break;
      case 'buttonTransparent':
        color = 'transparent';
        size = theme.SIZES.FONT * 1.35;
        break;
      case 'cross':
        color = dark.buttonBlack;
        size = scale(22);
        break;
      default:
        break;
    }
    let obj = {
      size,
      color,
    };
    return obj;
  }

  static getInitials(string) {
    const fullName = string;
    const idx = fullName.lastIndexOf(' ');
    const firstName = idx !== -1 ? fullName.substring(0, idx) : fullName;
    const lastName = idx !== -1 ? fullName.substring(idx + 1) : '';
    var matches = firstName.match(/\b(\w)/g);
    var name = `${matches.join('')}. ${lastName}`;
    return name;
  }

  static getEstTime(date) {
    if (date != undefined || date != null || date != '') {
      return `${Moment(date).tz('EST').format('hh:mm A')} EST`;
    } else {
      return `${Moment(new Date()).tz('EST').format('hh:mm A')} EST`;
    }
  }

  static getThreshold(ep, bonus) {
    return Number(ep + (bonus - 50) * 0.5).toFixed(2);
  }

  static getIncrementThreshold(threshold) {
    return Number(threshold) + 10;
  }

  static getSubstractedThreshold(threshold) {
    return Number(threshold) - 10;
  }

  static getDiffThreshold(t1, t2) {
    return Number(t1) - Number(t2);
  }

  static getDeepLink = (path = '') => {
    const uri_scheme =
      Platform.OS === 'ios'
        ? `${CONST.URI_SCHEME.iOS}`
        : `${CONST.URI_SCHEME.android}`;
    return uri_scheme + path;
  };

  static getFundsWebUrl = (
    action,
    sessionToken,
    uriScheme,
    deviceLocation,
    transactionId = null,
  ) => {
    let fundsWebUrl;
    if (transactionId) {
      fundsWebUrl = `${
        environment.api
      }v1/users/${action}?auth_token=${sessionToken}&r=${uriScheme}&${queryString.stringify(
        deviceLocation,
      )}&transactionId=${transactionId}`;
    } else {
      fundsWebUrl = `${
        environment.api
      }v1/users/${action}?auth_token=${sessionToken}&r=${uriScheme}&${queryString.stringify(
        deviceLocation,
      )}`;
    }
    return fundsWebUrl;
  };

  static showDefaultAlert = (
    title,
    msg,
    okButtonText,
    okCallBack,
    cancelButtonText,
    cancelCallBack,
  ) => {
    Alert.alert(
      title ? title : 'ALERT',
      msg ? msg : '',
      [
        {
          text: okButtonText ? okButtonText : 'Ok',
          onPress: () => (okCallBack ? okCallBack() : {}),
        },
        {
          text: cancelButtonText ? cancelButtonText : 'Cancel',
          onPress: () => (cancelCallBack ? cancelCallBack() : {}),
        },
      ],
      {cancelable: false},
    );
  };

  /**
   * ### Error Alert
   */
  static showAlert = (
    message,
    title,
    onPress = () => {},
    okButtonText = 'Ok',
  ) => {
    Alert.alert(title || 'Alert', message, [
      {
        text: okButtonText,
        onPress: onPress,
      },
    ]);
  };

  static getFileExtFromPath(path) {
    const indexOfDot = path.lastIndexOf('.');
    return indexOfDot < 0 ? '' : path.substring(indexOfDot + 1);
  }

  static handleWebViewNavigationStateChange = (newNavState) => {
    const {url} = newNavState;
    if (url.startsWith('dreampick://')) {
      let regex = /[?&]([^=#]+)=([^&#]*)/g;
      let params = {},
        match;
      while ((match = regex.exec(url))) {
        params[match[1]] = decodeURIComponent(match[2]);
      }
      appObj.showCustomActionPopup('Status', params.message);
      var pathRegex = /\/\/(.*?)\?/;
      var matched = pathRegex.exec(url)[1];
      const matchString =
        Platform.OS === 'ios'
          ? 'AppTutorialScreen'
          : 'callbackAppTutorialScreen';
      if (
        matched === matchString &&
        (params.error === 'false' || !params.error)
      ) {
        NavigationService.resetRoute('AppTutorialScreen');
      } else {
        NavigationService.goBack();
      }
    }
  };

  static onFundsAction = async (
    action,
    transactionId,
    title,
    nextPath = '',
  ) => {
    try {
      const userInfo = await GetStoreData(KEYS.USER_INFO, false);
      const sessionToken = userInfo.user.tokens.access.token;
      const uriScheme = Utility.getDeepLink(nextPath);
      const deviceLocation = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      const url = Utility.getFundsWebUrl(
        action,
        sessionToken,
        uriScheme,
        deviceLocation,
        transactionId,
      );
      NavigationService.navigate('ContactUsScreen', {
        title: title,
        uri: url,
        navigationStateChange: Utility.handleWebViewNavigationStateChange,
        isFundsAction: true,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  static onFundUrlAction = async (event) => {
    let regex = /[?&]([^=#]+)=([^&#]*)/g;
    let params = {},
      match;
    while ((match = regex.exec(event.url))) {
      params[match[1]] = decodeURIComponent(match[2]);
    }

    if (params.error === true) {
      Alert.alert('Error', params.message);
    } else {
      Alert.alert('Status', params.message);
    }
  };

  static isPushPermissionAsked = async () => {
    const storedStatus = await GetStoreData(KEYS.PUSH_PERMISSION_STATUS, false);
    return storedStatus !== null;
  };

  static setUserNotificationOpenTime = async (userId) => {
    let allUsersTime = await GetStoreData(KEYS.NOTIFICATION_OPEN_TIME, false);
    allUsersTime = {
      ...allUsersTime,
      [userId]: new Date(),
    };
    await SetStoreData(KEYS.NOTIFICATION_OPEN_TIME, allUsersTime);
  };

  static getUserNotificationOpenTime = async (userId) => {
    const allUsersTime = await GetStoreData(KEYS.NOTIFICATION_OPEN_TIME, false);
    if (allUsersTime) {
      return allUsersTime[userId] || null;
    }
    return null;
  };

  static getSubFilterValue = (id, dataIndex, dataItem) => {
    // Index === 3 or id === CONST.FILTER_OPTION_ID.GUARANTEED_STATUS for Complete Guaranteed Filter, We are handling 2 different states for it i.e. 1. All 2. Guaranteed 3. Not Guaranteed
    // So dataIndex representing Guaranteed & Non_Guaranteed
    const filterVal =
      id === CONST.FILTER_OPTION_ID.GUARANTEED_STATUS && dataIndex === 1
        ? true
        : id === CONST.FILTER_OPTION_ID.GUARANTEED_STATUS && dataIndex === 2
        ? false
        : dataItem.value;
    return filterVal;
  };

  static getFilterData = async (filterInfo) => {
    let queryStringArray = [];
    filterInfo.forEach((item) => {
      if (item.selected) {
        if (item.id === CONST.FILTER_OPTION_ID.MULTI_ENTRY_LIMIT) {
          item.data.forEach((dataItem) => {
            if (dataItem.isSelected) {
              queryStringArray.push(
                `${item.filterMinKey}=${dataItem.minValue}`,
              );
              queryStringArray.push(
                `${item.filterMaxKey}=${dataItem.maxValue}`,
              );
            }
          });
        } else {
          let value = '';
          item.data.forEach((dataItem, dataIndex) => {
            if (dataItem.isSelected) {
              value = Utility.getSubFilterValue(item.id, dataIndex, dataItem);
              if (
                value ||
                item.id === CONST.FILTER_OPTION_ID.GUARANTEED_STATUS
              ) {
                queryStringArray.push(`${item.filterKey}=${value}`);
              }
            }
          });
        }
      }
    });
    return queryStringArray.join('&');
  };

  static getSliderBoosterValues = (maxValue, minValue, currSliderVal) => {
    return ((currSliderVal - minValue) * 100) / (maxValue - minValue);
  };

  static getSliderValues = (maxValue, minValue, booster) => {
    return Number((booster * (maxValue - minValue)) / 100 + minValue).toFixed(
      2,
    );
  };

  static getSliderLabels = (fantasyVal) => {
    return [
      {
        label: 'Min',
        value: fantasyVal - 24.5,
      },
      {
        label: '-20',
        value: fantasyVal - 20,
      },
      {
        label: '-15',
        value: fantasyVal - 15,
      },
      {
        label: '-10',
        value: fantasyVal - 10,
      },
      {
        label: '',
        value: fantasyVal,
      },
      {
        label: Number(fantasyVal).toFixed(2),
        value: fantasyVal,
      },
      {
        label: '',
        value: fantasyVal,
      },
      {
        label: '+10',
        value: fantasyVal + 10,
      },
      {
        label: '+15',
        value: fantasyVal + 15,
      },
      {
        label: '+20',
        value: fantasyVal + 20,
      },
      {
        label: 'Max',
        value: fantasyVal + 25,
      },
    ];
  };

  static currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  static driveSelectedMatches = (matches = [], selectedContest = []) => {
    const filteredContests = [];
    matches.forEach((item) => {
      selectedContest.forEach((contestData) => {
        if (
          item.GlobalHomeTeamID === contestData.GlobalTeamID ||
          item.GlobalAwayTeamID === contestData.GlobalTeamID
        ) {
          const fantasyPoints =
            item.GlobalHomeTeamID === contestData.GlobalTeamID
              ? item.HomeTeamFantasyPoints
              : item.AwayTeamFantasyPoints;
          const maxValue = fantasyPoints + 25;
          const minValue = fantasyPoints - 25;
          const confidenceVal = Utility.getSliderValues(
            maxValue,
            minValue,
            contestData.booster,
          );
          item = {
            ...item,
            isSelected: true,
            selectedFantasyPoints: confidenceVal,
            isHomeTeamSelected:
              item.GlobalHomeTeamID === contestData.GlobalTeamID,
            selectedBonus: contestData.booster,
          };
          filteredContests.push(item);
        }
      });
    });

    return filteredContests;
  };

  static getSufix = (value) => {
    let returnValue = '';
    if (value === 1) {
      returnValue = 'st';
    } else if (value === 2) {
      returnValue = 'nd';
    } else if (value === 3) {
      returnValue = 'rd';
    } else {
      returnValue = 'th';
    }
    return returnValue;
  };
}

export default Utility;
