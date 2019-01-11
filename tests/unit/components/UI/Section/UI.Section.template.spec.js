import { mount } from '@vue/test-utils';
import UISection from '@/components/UI/Section/Section.vue';
import GLOBS from './UI.Section.globs';

describe('@/components/UI/Section#template', () => {
  let w;

  beforeAll(() => {
    w = mount(UISection, {
      context: {
        props: {
          title: GLOBS.test.title,
          name: GLOBS.test.name,
        },
      },
    });
  });

  it('should wrapper have proper classes', () => {
    const a = `base-section base-section--${GLOBS.test.name}`;

    expect(w.attributes('class')).toEqual(a);
  });

  it('should <h2> innerText be equal to GLOBS.test.title', () => {
    expect(w.find('h2').text()).toEqual(GLOBS.test.title);
  });
});
