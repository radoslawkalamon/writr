import { shallowMount } from '@vue/test-utils';
import UISection from '@/components/UI/Section/Section.vue';
import GLOBS from './UI.Section.globs';

describe('@/components/UI/Section#template', () => {
  let w;

  beforeAll(() => {
    w = shallowMount(UISection, {
      slots: {
        default: GLOBS.test.text,
      },
      propsData: {
        title: GLOBS.test.title,
        name: GLOBS.test.name,
      },
    });
  });

  it('should wrapper have proper classes', () => {
    const a = w.vm.wrapperClassNames;

    expect(w.attributes('class')).toEqual(a);
  });

  it('should <h2> innerText be equal to GLOBS.test.title', () => {
    expect(w.find('h2').text()).toEqual(GLOBS.test.title);
  });

  it('should <div> innerText be equal to GLOBS.test.text', () => {
    expect(w.find('div').text()).toEqual(GLOBS.test.text);
  });
});
