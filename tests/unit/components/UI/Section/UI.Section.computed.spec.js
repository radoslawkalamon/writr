import { shallowMount } from '@vue/test-utils';
import UISection from '@/components/UI/Section/Section.vue';
import GLOBS from './UI.Section.globs';

describe('@/components/UI/Section#computed', () => {
  it('should return class list with name', () => {
    const assertion = [
      'base-section',
      `base-section--${GLOBS.test.name}`,
    ].join(' ');
    const wrapper = shallowMount(UISection, {
      propsData: {
        name: GLOBS.test.name,
        title: GLOBS.test.title,
      },
    });

    expect(wrapper.vm.wrapperClassNames).toEqual(assertion);
  });
});
