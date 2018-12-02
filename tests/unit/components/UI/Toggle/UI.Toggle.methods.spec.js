import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import GLOBS from './UI.Toggle.globs';

describe('@Components/UI/Toggle#methods', () => {
  describe('onClick', () => {
    let w;
    const testValue = false;

    beforeAll(() => {
      w = shallowMount(UIToggle, {
        mocks: {
          $store: {
            getters: {
              getValue: () => testValue,
            },
            dispatch: jest.fn(),
          },
        },
        propsData: {
          item: GLOBS.test.item,
          action: GLOBS.test.action,
        },
      });

      w.vm.onClick();
    });

    it('should call $store.dispatch function exactly once', () => {
      const a = 1;

      expect(w.vm.$store.dispatch).toBeCalledTimes(a);
    });

    it('should call $store.dispatch with 2 arguments: action name, data', () => {
      const a = [
        GLOBS.test.action,
        {
          item: GLOBS.test.item,
          value: !testValue,
        },
      ];

      expect(w.vm.$store.dispatch).toBeCalledWith(...a);
    });
  });
});
