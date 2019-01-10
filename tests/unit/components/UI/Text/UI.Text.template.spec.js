import { mount } from '@vue/test-utils';
import UIText from '@/components/UI/Text/Text.vue';
import testClassesListOnDOMElement from '@/../tests/unit/helpers/testClassesListOnDOMElement';
import GLOBS from './UI.Text.globs';

describe('@/components/UI/Text#template', () => {
  let w;
  beforeAll(() => {
    w = mount(UIText, {
      context: {
        props: {
          name: GLOBS.test.name,
          text: GLOBS.test.text,
        },
      },
    });
  });

  it('should wrapper have proper classes', () => {
    const a = [
      'base-text',
      `base-text--${GLOBS.test.name}`,
    ];

    testClassesListOnDOMElement(a, w);
  });

  it('should wrapper have proper text', () => {
    expect(w.text()).toEqual(GLOBS.test.text);
  });
});
