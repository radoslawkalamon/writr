import { mount } from '@vue/test-utils';
import UILabeledValue from '@/components/UI/LabeledValue/LabeledValue.vue';
import GLOBS from './UI.LabeledValue.globs';

describe('@/components/UI/LabeledValue#template', () => {
  let w;

  beforeAll(() => {
    w = mount(UILabeledValue, {
      context: {
        props: {
          ...GLOBS.context,
        },
      },
    });
  });

  it('should wrapper have proper classes: name', () => {
    const a = `base-labeled-value--${GLOBS.test.name}`;

    expect(w.classes()).toContain(a);
  });

  it('should .base-labeled-value__value have innerText equal to VALUE prop', () => {
    const a = GLOBS.test.value;

    expect(w.find('.base-labeled-value__value').text()).toEqual(a);
  });

  it('should .base-labeled-value__label have innerText equal to LABEL prop', () => {
    const a = GLOBS.test.label;

    expect(w.find('.base-labeled-value__label').text()).toEqual(a);
  });
});
