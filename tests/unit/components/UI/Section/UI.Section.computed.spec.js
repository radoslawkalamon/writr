import { shallowMount } from '@vue/test-utils';
import UISection from '@/components/UI/Section/Section.vue';
import GLOBS from './UI.Section.globs';

describe('@/components/UI/Section#computed', () => {
  it('should return classes: name', () => {
    const w = shallowMount(UISection, {
      propsData: {
        name: GLOBS.test.name,
        title: GLOBS.test.title,
      },
    });
    const a = [
      'base-section',
      `base-section--${GLOBS.test.name}`,
    ].join(' ');

    expect(w.vm.wrapperClassNames).toEqual(a);
  });
});
