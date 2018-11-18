import mutations from '@/store/mutations';
import GLOBS from './store.globs';

describe('$store#mutations', () => {
  describe('CHANGE_STATE', () => {
    it('should change test state if state exists', () => {
      const { state } = GLOBS;
      const payload = {
        item: GLOBS.test.item,
        value: GLOBS.test.value,
      };
      const assertion = GLOBS.test.value;

      mutations.CHANGE_STATE(state, payload);

      expect(state.test.item.store).toEqual(assertion);
    });

    it('should throw error if state not exists', () => {
      const { state } = GLOBS;
      const payload = {
        item: GLOBS.test.itemWrong,
        value: GLOBS.test.value,
      };

      expect(() => {
        mutations.CHANGE_STATE(state, payload);
      }).toThrowError();
    });
  });
});
