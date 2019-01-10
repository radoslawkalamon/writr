import actions from '@/store/actions';
import GLOBS from './store.globs';

jest.useFakeTimers();

describe('$store#actions', () => {
  describe('changeState', () => {
    const commitName = 'CHANGE_STATE';
    let context;
    beforeEach(() => {
      context = {
        commit: jest.fn(() => {}),
        getters: {
          getValidator: () => GLOBS.test.validator,
        },
      };
    });

    it('should commit if validator return TRUE', () => {
      const payload = {
        item: GLOBS.test.item,
        value: GLOBS.test.value,
      };
      const a = [
        commitName,
        payload,
      ];

      actions.changeState(context, payload);

      expect(context.commit).toHaveBeenCalledWith(...a);
    });

    it('shouldn\'t commit if validator return FALSE', () => {
      const payload = {
        item: GLOBS.test.item,
        value: GLOBS.test.valueWrong,
      };
      const a = 0;

      actions.changeState(context, payload);

      expect(context.commit).toHaveBeenCalledTimes(a);
    });

    it('shouldn\'t send error if componentObject is null', () => {
      const payload = {
        item: GLOBS.test.item,
        value: GLOBS.test.valueWrong,
        componentObject: null,
      };

      expect(actions.changeState(context, payload)).toBeUndefined();
    });

    it('should send error if componentObject is object', () => {
      const testProperty = 'thisIsTestProperty';
      const testPropertyValue = false;
      const payload = {
        item: GLOBS.test.item,
        value: GLOBS.test.valueWrong,
        componentObject: {
          [testProperty]: testPropertyValue,
        },
        componentErrorProperty: testProperty,
      };

      actions.changeState(context, payload);

      expect(payload.componentObject[testProperty]).toEqual(!testPropertyValue);
    });
  });

  describe('calculateStats', () => {
    const commitName = 'COMMIT_STATS';
    let context;
    beforeEach(() => {
      context = {
        commit: jest.fn(() => {}),
        state: {
          settings: {
            stats: {
              pageFormulaMainIngredient: 'characters',
              pageFormulaDivider: 100,
            },
          },
        },
      };
    });

    it('should throttle commit within 1 seconds', (done) => {
      const a = 2;

      actions.calculateStats(context, '');
      actions.calculateStats(context, '');
      actions.calculateStats(context, '');

      setTimeout(() => {
        actions.calculateStats(context, '');

        expect(context.commit).toHaveBeenCalledTimes(a);
        done();
      }, 3000);

      jest.runAllTimers();
    });

    it('should commit proper stats to store', () => {
      actions.calculateStats(context, GLOBS.test.statsText);

      const a = [
        commitName,
        GLOBS.test.statsTextNumbers,
      ];

      jest.runAllTimers();

      expect(context.commit).toHaveBeenCalledWith(...a);
    });
  });
});
