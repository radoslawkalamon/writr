import StatusbarItem from '@/components/Statusbar/Item/Item.vue';
import { mount } from '@vue/test-utils';
import GLOBS from './Statusbar.Item.globs';

describe('@Components/Statusbar/Item#template', () => {
  let w;
  beforeAll(() => {
    w = mount(StatusbarItem, {
      context: {
        props: {
          value: GLOBS.test.value,
          label: GLOBS.test.label,
          name: GLOBS.test.name,
        },
      },
    });
  });

  it('should wrapper have classes: name', () => {
    const a = `statusbar-item--${GLOBS.test.name}`;

    expect(w.classes()).toContain(a);
  });

  it('should .statusbar-item__label have innerText equal to LABEL prop', () => {
    const a = GLOBS.test.label;

    expect(w.find('.statusbar-item__label').text()).toEqual(a);
  });

  it('should .statusbar-item__value have innerText equal to VALUE prop', () => {
    const a = GLOBS.test.value;

    expect(w.find('.statusbar-item__value').text()).toEqual(a);
  });
});
