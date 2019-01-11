import { shallowMount } from '@vue/test-utils';
import UISelect from '@/components/UI/Select/Select.vue';
import testClassesListOnArray from '@/../tests/unit/helpers/testClassesListOnArray';
import GLOBS from './UI.Select.globs';

describe('@/components/UI/Select#computed', () => {
  describe('mainElementClassNames', () => {
    it('should return classes: name', () => {
      const w = shallowMount(UISelect, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-select',
        `base-select--${GLOBS.test.name}`,
      ];

      testClassesListOnArray(w.vm.mainElementClassNames, a);
    });
  });
});
