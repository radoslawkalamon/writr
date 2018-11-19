import { shallowMount } from '@vue/test-utils';
import UISelect from '@/components/UI/Select/Select.vue';
import GLOBS from './UI.Select.globs';

describe('@/components/UI/Select#methods', () => {
  describe('onChange', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(UISelect, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });

      wrapper.vm.onChange();
    });

    it('should call $store.dispatch function exactly once', () => {
      const assertion = 1;

      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledTimes(assertion);
    });

    it('should call $store.dispatch with 2 arguments with data equal to assertion', () => {
      const assertion = [
        GLOBS.test.action,
        {
          item: GLOBS.test.item,
          value: GLOBS.test.storeValue,
        },
      ];

      expect(wrapper.vm.$store.dispatch).toBeCalledWith(...assertion);
    });
  });
});

