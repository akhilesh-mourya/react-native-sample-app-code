import {TUTORIAL_STEPS} from '../actions/tutorialActions';

export const shouldShowStep = (tutorialType, currentStep, step) => {
  const stepsArray = TUTORIAL_STEPS[tutorialType];
  // For the first step, currentStep will be undefined and index of current step will be -1.
  // So WALLET_STEPS.indexOf(currentStep) + 1 will be equal to 0: just what we need.
  return stepsArray.indexOf(step) === stepsArray.indexOf(currentStep) + 1;
};

export const isStepCompleted = (tutorialType, currentStep, step) => {
  const stepsArray = TUTORIAL_STEPS[tutorialType];
  return stepsArray.indexOf(step) <= stepsArray.indexOf(currentStep);
};

export const isTypeCompleted = (type, step) => {
  const allSteps = TUTORIAL_STEPS[type];
  return allSteps[allSteps.length - 1] === step;
};
