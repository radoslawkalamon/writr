import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseInput from '@/components/UI/Input/Input.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('@Components/UI/Input', () => {
  let store;
  let getters;
  let actions;
  const getValueValue = '12';

  const propsDataGenerator = (unitValue = 'px') => ({
    title: 'Title',
    errorTip: 'Error Tip',
    unit: unitValue,
    item: 'settings.option',
    action: 'changeState',
  });

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
    });
  });

  it('should wrapper have data-unit from props', () => {
    const propsData = propsDataGenerator();
    const wrapper = shallowMount(BaseInput, { store, localVue, propsData });

    expect(wrapper.find('.base-input__input-wrapper').attributes('data-unit')).toEqual('px');
  });

  it('shouldn\'t wrapper have "unit-class" if data-unit is empty', () => {
    const propsData = propsDataGenerator('');
    const wrapper = shallowMount(BaseInput, { store, localVue, propsData });

    expect(wrapper.find('.base-input__input-wrapper').classes('base-input__input-wrapper--unit')).toBeFalsy();
  });

  it('should wrapper have data-error from props', () => {
    const propsData = propsDataGenerator();
    const wrapper = shallowMount(BaseInput, { store, localVue, propsData });

    expect(wrapper.find('.base-input__input-wrapper').attributes('data-error')).toEqual('Error Tip');
  });

  it('should have value from store', () => {
    const propsData = propsDataGenerator();
    const wrapper = shallowMount(BaseInput, { store, localVue, propsData });
    expect(wrapper.vm.value).toEqual('12');
  });

  it('should dispatch action after change', () => {
    const propsData = propsDataGenerator();
    const wrapper = shallowMount(BaseInput, { store, localVue, propsData });
    wrapper.find('.base-input__input').trigger('change');
    expect(actions.changeState).toHaveBeenCalled();
  });

  it('should wrapper have "error-class" after setting error to true', () => {
    const propsData = propsDataGenerator();
    const wrapper = shallowMount(BaseInput, { store, localVue, propsData });
    wrapper.vm.error = true;

    expect(wrapper.find('.base-input__input-wrapper').classes('base-input__input-wrapper--error')).toBeTruthy();
  });

  it('should input have "error-class" after setting error to true', () => {
    const propsData = propsDataGenerator();
    const wrapper = shallowMount(BaseInput, { store, localVue, propsData });
    wrapper.vm.error = true;

    expect(wrapper.find('.base-input__input').classes('base-input__input--error')).toBeTruthy();
  });
});
