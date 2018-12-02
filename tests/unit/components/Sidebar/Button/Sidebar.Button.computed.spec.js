import { shallowMount } from '@vue/test-utils';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import GLOBS from './Sidebar.Button.globs';

describe('@Components/Sidebar/Button#computed', () => {
  describe('wrapperClassNames', () => {
    it('should return classes: name, !active', () => {
      const w = shallowMount(SidebarButton, {
        mocks: GLOBS.mocks,
        propsData: {
          name: GLOBS.test.name,
          icon: GLOBS.test.icon,
        },
      });
      const a = [
        'sidebar-button',
        `sidebar-button--${GLOBS.test.name}`,
        '',
      ].join(' ');

      expect(w.vm.wrapperClassNames).toEqual(a);
    });

    it('should return classes: name, active', () => {
      const w = shallowMount(SidebarButton, {
        mocks: GLOBS.mocks,
        propsData: {
          name: GLOBS.test.name,
          icon: GLOBS.test.icon,
        },
      });
      const a = [
        'sidebar-button',
        `sidebar-button--${GLOBS.test.name}`,
        'sidebar-button--active',
      ].join(' ');

      w.setData({ toggled: true });

      expect(w.vm.wrapperClassNames).toEqual(a);
    });
  });

  describe('resolveIcon', () => {
    it('should return icon URL', () => {
      const w = shallowMount(SidebarButton, {
        mocks: GLOBS.mocks,
        propsData: {
          icon: GLOBS.test.icon,
        },
      });
      const a = GLOBS.test.iconUrl;

      // Force iconList mock
      w.setData({ iconList: GLOBS.mocks.iconList });

      expect(w.vm.resolveIcon).toEqual(a);
    });
  });
});
