import {Platform} from 'react-native';

class Validators {
  static validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  static validPassword(password) {
    if (password.length < 5) {
      return false;
    }
    return true;
  }

  static validPhoneNumber(number) {
    const re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
    if (!re.test(number)) {
      return false;
    }
    return true;
  }

  static validMobileNumber(number) {
    if (number.length != 10) {
      return true;
    }
    return false;
  }

  static isEmpty(name) {
    if (name && name.trim() != '') {
      return false;
    }
    return true;
  }

  static onlyAlphabets(value) {
    const flag = /^[a-zA-Z]*$/;
    return flag.test(value);
  }

  static isValidPassword(value) {
    // Password must contain at least one letter, at least one number, and in range of 8 - 20 char long.
    const flag = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d#$@!%&*?^_+.-]{8,20}$/;
    return flag.test(value);
  }

  static platform() {
    let platform;
    if (Platform.OS === 'ios') {
      platform = 'ios';
    } else {
      platform = 'android';
    }
    return platform;
  }

  static isDOBGreaterThanEighteen(_birthday, state = '') {
    let day = 18;
    switch (state) {
      case 'Nebraska':
        day = 19;
        break;
      case 'Massachusetts':
        day = 21;
        break;
      default:
        break;
    }

    var today = new Date();
    var birthDate = new Date(_birthday);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    // Validate Now
    return age >= day;
  }

  static hasWhiteSpace(str) {
    return /\s/g.test(str);
  }
}

export default Validators;
