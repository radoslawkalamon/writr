import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('@Components/Sidebar/Button', () => {
  let store;
  let getters;
  const propsDataGenerator = (propsName = 'NAME', toggle = false) => ({
    name: propsName,
    icon: 'settings',
    alt: 'ALT_NAME',
    toggle,
  });

  beforeEach(() => {
    getters = {
      getValue: () => () => 'dark',
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('renders when props passed and get class with prop NAME', () => {
    const propName = 'NAME';
    const propsData = propsDataGenerator(propName, false);

    const wrapper = shallowMount(SidebarButton, { store, localVue, propsData });

    expect(wrapper.find('button').classes(`sidebar-button--${propName}`)).toBeTruthy();
  });

  it('emit event and payload when clicked', () => {
    const propName = 'NAME';
    const propsData = propsDataGenerator(propName, false);

    const wrapper = shallowMount(SidebarButton, { store, localVue, propsData });
    wrapper.find('button').trigger('click');

    expect(wrapper.emitted('action')[0]).toEqual([propName]);
  });

  it('when toggle set to true, after click have "toggle class"', () => {
    const propsData = propsDataGenerator(undefined, true);

    const wrapper = shallowMount(SidebarButton, { store, localVue, propsData });
    wrapper.find('button').trigger('click');

    expect(wrapper.find('button').classes('sidebar-button--active')).toBeTruthy();
  });
});
