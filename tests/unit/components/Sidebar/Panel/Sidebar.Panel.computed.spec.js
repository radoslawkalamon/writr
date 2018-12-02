import { shallowMount } from '@vue/test-utils';
import SidebarPanel from '@/components/Sidebar/Panel/Panel.vue';
import GLOBS from './Sidebar.Panel.globs';

describe('@Components/Sidebar/Panel#computed', () => {
  describe('wrapperClassNames', () => {
    it('should return classes: name', () => {
      const w = shallowMount(SidebarPanel, {
        propsData: {
          name: GLOBS.test.name,
        },
      });
      const a = [
        'sidebar-panel',
        `sidebar-panel--${GLOBS.test.name}`,
      ].join(' ');

      expect(w.vm.wrapperClassNames).toEqual(a);
    });
  });
});
