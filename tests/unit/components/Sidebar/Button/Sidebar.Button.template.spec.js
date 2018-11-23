import { shallowMount } from '@vue/test-utils';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import GLOBS from './Sidebar.Button.globs';

describe('@Components/Sidebar/Button#template', () => {
  let wrapper;
  let onClickMock;
  beforeAll(() => {
    // mock onClick function
    onClickMock = jest.spyOn(SidebarButton.methods, 'onClick');

    wrapper = shallowMount(SidebarButton, {
      mocks: GLOBS.mocks,
      propsData: {
        name: GLOBS.test.name,
        icon: GLOBS.test.icon,
        alt: GLOBS.test.alt,
        toggle: true,
      },
    });

    // Force iconList mock
    wrapper.setData({ iconList: GLOBS.mocks.iconList });
  });

  it('should render button with appropriate class list', () => {
    const assertion = wrapper.vm.wrapperClassNames;
    expect(wrapper.attributes('class')).toEqual(assertion);
  });

  it('should render button with title equal to alt prop', () => {
    const assertion = GLOBS.test.alt;
    expect(wrapper.attributes('title')).toEqual(assertion);
  });

  it('should button have <img> with src from store', () => {
    const assertion = GLOBS.test.iconUrl;
    expect(wrapper.find('img').attributes('src')).toEqual(assertion);
  });

  it('should button have <img> with alt equal to alt prop', () => {
    const assertion = GLOBS.test.alt;
    expect(wrapper.find('img').attributes('alt')).toEqual(assertion);
  });

  it('should trigger onClick function after click', () => {
    wrapper.trigger('click');
    expect(onClickMock).toBeCalled();
  });
});
