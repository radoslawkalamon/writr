import getters from '@/store/getters';
import GLOBS from './store.globs';

describe('$store#getters', () => {
  describe('getValue', () => {
    it('should return TEST_NOT_CHANGE_VALUE', () => {
      const { item } = GLOBS.test;
      const { state } = GLOBS;
      const assertion = GLOBS.test.notChangedValue;

      expect(getters.getValue(state)(item)).toEqual(assertion);
    });
  });

  describe('getValidator', () => {
    it('should return TEST_VALIDATOR', () => {
      const { item } = GLOBS.test;
      const { state } = GLOBS;
      const assertion = GLOBS.test.validator;

      expect(getters.getValidator(state)(item)).toEqual(assertion);
    });
  });
});
