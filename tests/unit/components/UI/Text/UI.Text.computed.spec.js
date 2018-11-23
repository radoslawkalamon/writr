import { shallowMount } from '@vue/test-utils';
import UIText from '@/components/UI/Text/Text.vue';
import GLOBS from './UI.Text.globs';

describe('@/components/UI/Text#computed', () => {
  describe('mainElementClassNames', () => {
    it('should return class list with name from props', () => {
      const wrapper = shallowMount(UIText, {
        propsData: {
          ...GLOBS.propsData,
        },
      });
      const assertion = [
        'base-text',
        `base-text--${GLOBS.test.name}`,
      ].join(' ');

      expect(wrapper.vm.mainElementClassNames).toEqual(assertion);
    });
  });
});
