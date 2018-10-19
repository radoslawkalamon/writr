import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseToggle from '@/components/UI/Toggle/Toggle.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('@Components/UI/Toggle', () => {
  let store;
  let getters;
  let actions;
  const getValueValue = false;

  const propsData = {
    title: 'Title',
    item: 'settings.option',
    action: 'changeState',
  };

  beforeEach(() => {
    getters = {
      getValue: () => () => getValueValue,
    };

    actions = {
      changeState: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
      state: {
        settings: {
          option: false,
        },
      },
    });
  });

  it('should wrapper have "active-class" when value is true', () => {
    const wrapper = shallowMount(BaseToggle, { store, localVue, propsData });
    wrapper.vm.$store.state.settings.option = true;
    expect(wrapper.find('.base-toggle__input-wrapper').classes('base-toggle__input-wrapper--active')).toBeTruthy();
  });

  it('should input have "active-class" when value is true', () => {
    const wrapper = shallowMount(BaseToggle, { store, localVue, propsData });
    wrapper.vm.$store.state.settings.option = true;
    expect(wrapper.find('.base-toggle__input').classes('base-toggle__input--active')).toBeTruthy();
  });

  it('should not input have "active-class" when value is false', () => {
    const wrapper = shallowMount(BaseToggle, { store, localVue, propsData });
    expect(wrapper.find('.base-toggle__input').classes('base-toggle__input--active')).toBeFalsy();
  });

  it('should not input have "active-class" when value is false', () => {
    const wrapper = shallowMount(BaseToggle, { store, localVue, propsData });
    expect(wrapper.find('.base-toggle__input-wrapper').classes('base-toggle__input-wrapper--active')).toBeFalsy();
  });

  it('should be action called after click', () => {
    const wrapper = shallowMount(BaseToggle, { store, localVue, propsData });
    wrapper.find('.base-toggle__input-wrapper').trigger('click');
    expect(actions.changeState).toHaveBeenCalled();
  });

  it('should be value equal to change', () => {
    const wrapper = shallowMount(BaseToggle, { store, localVue, propsData });
    wrapper.vm.$store.state.settings.option = true;
    expect(wrapper.vm.value).toEqual(true);
  });
});
