import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import GLOBS from './UI.Toggle.globs';

describe('@Components/UI/Toggle#methods', () => {
  describe('onClick', () => {
    let wrapper;
    const testValue = false;

    beforeAll(() => {
      wrapper = shallowMount(UIToggle, {
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

      wrapper.vm.onClick();
    });

    it('should call $store.dispatch exatcly once', () => {
      const assertion = 1;
      expect(wrapper.vm.$store.dispatch).toBeCalledTimes(assertion);
    });

    it('should call $store.dispatch with two arguments with data equal to assertion', () => {
      const assertion = [
        GLOBS.test.action,
        {
          item: GLOBS.test.item,
          value: !testValue,
        },
      ];

      expect(wrapper.vm.$store.dispatch).toBeCalledWith(...assertion);
    });
  });
});
