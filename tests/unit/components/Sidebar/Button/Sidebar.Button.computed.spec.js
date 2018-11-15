import { shallowMount } from '@vue/test-utils';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import GLOBS from './Sidebar.Button.globs';

describe('@Components/Sidebar/Button#computed', () => {
  describe('wrapperClassNames', () => {
    it('should create class list [w/ name, w/o active]', () => {
      const assertion = [
        'sidebar-button',
        `sidebar-button--${GLOBS.test.name}`,
        '',
      ].join(' ');
      const wrapper = shallowMount(SidebarButton, {
        mocks: GLOBS.mocks,
        propsData: {
          name: GLOBS.test.name,
          icon: GLOBS.test.icon,
        },
      });

      expect(wrapper.vm.wrapperClassNames).toEqual(assertion);
    });

    it('should create class list [w/ name, w/ active]', () => {
      const assertion = [
        'sidebar-button',
        `sidebar-button--${GLOBS.test.name}`,
        'sidebar-button--active',
      ].join(' ');

      const wrapper = shallowMount(SidebarButton, {
        mocks: GLOBS.mocks,
        propsData: {
          name: GLOBS.test.name,
          icon: GLOBS.test.icon,
        },
      });

      wrapper.setData({ toggled: true });

      expect(wrapper.vm.wrapperClassNames).toEqual(assertion);
    });
  });

  describe('resolveIcon', () => {
    it.only('should return icon url', () => {
      const assertion = GLOBS.test.iconUrl;
      const wrapper = shallowMount(SidebarButton, {
        mocks: GLOBS.mocks,
        propsData: {
          icon: GLOBS.test.icon,
        },
      });

      // Force iconList mock
      wrapper.setData({ iconList: GLOBS.mocks.iconList });

      expect(wrapper.vm.resolveIcon).toEqual(assertion);
    });
  });
});

