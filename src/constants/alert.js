import {appObj} from '../App';
export class Alert {
  static dropDown;
  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }

  static showSuccess(message) {
    this.dropDown.alertWithType('success', '', `${message}`);
  }

  static showError(message) {
    this.dropDown.alertWithType('error', '', `${message}`);
  }

  static showNetworkError() {
    appObj.toggleNoNetworkPopup();
  }
}
