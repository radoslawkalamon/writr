import { shallowMount } from '@vue/test-utils';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import GLOBS from './Sidebar.Button.globs';

describe('@Components/Sidebar/Button#template', () => {
  let w;
  let onClickMock;

  beforeAll(() => {
    // mock onClick function
    onClickMock = jest.spyOn(SidebarButton.methods, 'onClick');
    w = shallowMount(SidebarButton, {
      mocks: GLOBS.mocks,
      propsData: {
        name: GLOBS.test.name,
        icon: GLOBS.test.icon,
        alt: GLOBS.test.alt,
        toggle: true,
      },
    });

    // Force iconList mock
    w.setData({ iconList: GLOBS.mocks.iconList });
  });

  it('should wrapper have proper classes', () => {
    const a = w.vm.wrapperClassNames;

    expect(w.attributes('class')).toEqual(a);
  });

  it('should wrapper have TITLE attr equal to ALT prop', () => {
    const a = GLOBS.test.alt;

    expect(w.attributes('title')).toEqual(a);
  });

  it('should wrapper have <img> child with SRC attr from iconList', () => {
    const a = GLOBS.test.iconUrl;

    expect(w.find('img').attributes('src')).toEqual(a);
  });

  it('should wrapper have <img> child with ALT attr equal to ALT prop', () => {
    const a = GLOBS.test.alt;

    expect(w.find('img').attributes('alt')).toEqual(a);
  });

  it('should wrapper on @click trigger onClick function', () => {
    w.trigger('click');

    expect(onClickMock).toBeCalled();
  });
});
