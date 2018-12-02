import { shallowMount } from '@vue/test-utils';
import SidebarPanel from '@/components/Sidebar/Panel/Panel.vue';
import GLOBS from './Sidebar.Panel.globs';

describe('@Components/Sidebar/Panel#computed', () => {
  it('should wrapper have proper classes', () => {
    const w = shallowMount(SidebarPanel, {
      propsData: {
        name: GLOBS.test.name,
      },
    });
    const a = w.vm.wrapperClassNames;

    expect(w.attributes('class')).toEqual(a);
  });
});
