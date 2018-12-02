import { shallowMount } from '@vue/test-utils';
import UISelect from '@/components/UI/Select/Select.vue';
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
      ].join(' ');

      expect(w.vm.mainElementClassNames).toEqual(a);
    });
  });
});
