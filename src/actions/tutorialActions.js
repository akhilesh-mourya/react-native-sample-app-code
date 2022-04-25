import * as CONST from '../constants';

export const SET_TUTORIAL_STEP_COMPLETED =
  'tutorial/set-tutorial-step-completed';
export const SET_ACTIVE_TYPE = 'tutorial/set-active';

export const TYPE_WALLET = 'WALLET';
export const TYPE_CONTEST = 'CONTEST';

// Wallet tutorial steps
export const WALLET_STEP_GOT_IT = 'wallet/got-it';
export const WALLET_STEP_PRESSED = 'wallet/pressed';

// Contest tutorial steps
export const CONTEST_STEP_GOT_IT = 'contest/got-it';
export const CONTEST_STEP_CHOOSE = 'contest/choose';
export const CONTEST_STEP_TYPE_GOT_IT = 'contest/type-got-it';
export const CONTEST_STEP_TYPE_CHOOSE = 'contest/type-choose';
export const CONTEST_STEP_TOURNAMENT_JOIN_GOT_IT =
  'contest/tournament-join-got-it';
export const CONTEST_STEP_TOURNAMENT_JOIN_PRESSED =
  'contest/tournament-join-pressed';
export const CONTEST_STEP_TEAM_GOT_IT = 'contest/team-got-it';
export const CONTEST_STEP_TEAM_CHOOSE = 'contest/team-choose';
export const CONTEST_STEP_TEAM_ADD_GOT_IT = 'contest/team-add-got-it';
export const CONTEST_STEP_TEAM_ADD_PRESSED = 'contest/team-add-pressed';
export const CONTEST_STEP_CONFIDENCE_GOT_IT = 'contest/confidence-got-it';
export const CONTEST_STEP_CONFIDENCE_SELECTED = 'contest/confidence-selected';

const WALLET_STEPS = [WALLET_STEP_GOT_IT, WALLET_STEP_PRESSED];

const CONTEST_STEPS = [
  CONTEST_STEP_GOT_IT,
  CONTEST_STEP_CHOOSE,
  CONTEST_STEP_TYPE_GOT_IT,
  CONTEST_STEP_TYPE_CHOOSE,
  CONTEST_STEP_TEAM_GOT_IT,
  CONTEST_STEP_TEAM_CHOOSE,
  CONTEST_STEP_TEAM_ADD_GOT_IT,
  CONTEST_STEP_TEAM_ADD_PRESSED,
  CONTEST_STEP_CONFIDENCE_GOT_IT,
  CONTEST_STEP_CONFIDENCE_SELECTED,
];

export const TUTORIAL_STEPS = {
  [TYPE_WALLET]: WALLET_STEPS,
  [TYPE_CONTEST]: CONTEST_STEPS,
};

export const setActiveTutorialType = (type) => ({
  type: SET_ACTIVE_TYPE,
  activeType: type,
});
export const setTutorialStepCompleted = (tutorialType, step) => ({
  type: SET_TUTORIAL_STEP_COMPLETED,
  tutorialType,
  step,
});

export function tutorialDataSuccess(data) {
  return {
    type: CONST.GET_TUTORIAL_DATA_SUCCESS,
    data,
  };
}

export function tutorialDataFaliure(data) {
  return {
    type: CONST.GET_TUTORIAL_DATA_FAILURE,
    data,
  };
}
