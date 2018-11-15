import { shallowMount } from '@vue/test-utils';
import SidebarPanel from '@/components/Sidebar/Panel/Panel.vue';
import GLOBS from './Sidebar.Panel.globs';

describe('@Components/Sidebar/Panel#computed', () => {
  it('should main <div> have class list with name provided', () => {
    const assertion = [
      'sidebar-panel',
      `sidebar-panel--${GLOBS.test.name}`,
    ].join(' ');

    const wrapper = shallowMount(SidebarPanel, {
      propsData: {
        name: GLOBS.test.name,
      },
    });

    expect(wrapper.attributes('class')).toEqual(assertion);
  });
});
