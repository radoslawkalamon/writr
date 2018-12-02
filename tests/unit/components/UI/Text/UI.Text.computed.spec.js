import { shallowMount } from '@vue/test-utils';
import UIText from '@/components/UI/Text/Text.vue';
import GLOBS from './UI.Text.globs';

describe('@/components/UI/Text#computed', () => {
  describe('mainElementClassNames', () => {
    it('should return classes: name', () => {
      const w = shallowMount(UIText, {
        propsData: {
          name: GLOBS.test.name,
        },
      });
      const a = [
        'base-text',
        `base-text--${GLOBS.test.name}`,
      ].join(' ');

      expect(w.vm.mainElementClassNames).toEqual(a);
    });
  });
});
