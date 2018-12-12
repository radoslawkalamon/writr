import { mount } from '@vue/test-utils';
import UIText from '@/components/UI/Text/Text.vue';
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
    const a = `base-text base-text--${GLOBS.test.name}`;

    expect(w.attributes('class')).toEqual(a);
  });

  it('should wrapper have proper text', () => {
    expect(w.text()).toEqual(GLOBS.test.text);
  });
});
