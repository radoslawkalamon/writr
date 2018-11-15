import { shallowMount } from '@vue/test-utils';
import UISection from '@/components/UI/Section/Section.vue';
import GLOBS from './UI.Section.globs';

describe('@/components/UI/Section#template', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(UISection, {
      slots: {
        default: GLOBS.test.text,
      },
      propsData: {
        title: GLOBS.test.title,
        name: GLOBS.test.name,
      },
    });
  });

  it('should main element have classes with name', () => {
    const assertion = [
      'base-section',
      `base-section--${GLOBS.test.name}`,
    ].join(' ');

    expect(wrapper.attributes('class')).toEqual(assertion);
  });

  it('should header element have text from title prop', () => {
    expect(wrapper.find('h2').text()).toEqual(GLOBS.test.title);
  });

  it('should div element have test text in it', () => {
    expect(wrapper.find('div').text()).toEqual(GLOBS.test.text);
  });
});
