import { shallowMount } from '@vue/test-utils';
import UIInput from '@/components/UI/Input/Input.vue';
import GLOBS from './UI.Input.globs';

describe('@/components/UI/Input#computed', () => {
  describe('onChange', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });

      wrapper.vm.onChange();
    });

    it('should call $store.dispatch function exatcly once', () => {
      const assertion = 1;

      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledTimes(assertion);
    });

    it('should call $store.dispatch with 2 arguments with data equal to assertion', () => {
      const assertion = [
        GLOBS.test.action,
        {
          item: GLOBS.test.item,
          value: GLOBS.test.storeValue,
          componentObject: wrapper.vm,
          componentErrorProperty: 'error',
        },
      ];

      expect(wrapper.vm.$store.dispatch).toBeCalledWith(...assertion);
    });
  });
});
