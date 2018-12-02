import { shallowMount } from '@vue/test-utils';
import UIInput from '@/components/UI/Input/Input.vue';
import GLOBS from './UI.Input.globs';

describe('@/components/UI/Input#computed', () => {
  describe('onChange', () => {
    let w;

    beforeAll(() => {
      w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });

      w.vm.onChange();
    });

    it('should call $store.dispatch function exactly once', () => {
      const a = 1;

      expect(w.vm.$store.dispatch).toHaveBeenCalledTimes(a);
    });

    it('should call $store.dispatch with 2 arguments: action name, data', () => {
      const a = [
        GLOBS.test.action,
        {
          item: GLOBS.test.item,
          value: GLOBS.test.storeValue,
          componentObject: w.vm,
          componentErrorProperty: 'error',
        },
      ];

      expect(w.vm.$store.dispatch).toBeCalledWith(...a);
    });
  });
});
