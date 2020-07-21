import FRStep from '../fr-auth/fr-step';
import FRRecoveryCodes from './index';
import {
  displayRecoveryCodesResponse,
  expectedRecoveryCodes,
  otherResponse,
} from './script-text.mock.data';

describe('Class for managing the Display Recovery Codes node', () => {
  it('should return true if Display Recovery Codes step', () => {
    const step = new FRStep(displayRecoveryCodesResponse);
    const isDisplayStep = FRRecoveryCodes.isDisplayStep(step);
    expect(isDisplayStep).toBe(true);
  });

  it('should return false if not Display Recovery Codes step', () => {
    const step = new FRStep(otherResponse);
    const isDisplayStep = FRRecoveryCodes.isDisplayStep(step);
    expect(isDisplayStep).toBe(false);
  });

  it('should return the Recovery Codes as array of strings', () => {
    const step = new FRStep(displayRecoveryCodesResponse);
    const recoveryCodes = FRRecoveryCodes.getCodes(step);
    expect(recoveryCodes).toStrictEqual(expectedRecoveryCodes);
  });
});
