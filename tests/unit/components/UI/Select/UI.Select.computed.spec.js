import { shallowMount } from '@vue/test-utils';
import UISelect from '@/components/UI/Select/Select.vue';
import GLOBS from './UI.Select.globs';

describe('@/components/UI/Select#computed', () => {
  describe('mainElementClassNames', () => {
    it('should return class list with name from props', () => {
      const wrapper = shallowMount(UISelect, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-select',
        `base-select--${GLOBS.test.name}`,
      ].join(' ');

      expect(wrapper.vm.mainElementClassNames).toEqual(assertion);
    });
  });
});
