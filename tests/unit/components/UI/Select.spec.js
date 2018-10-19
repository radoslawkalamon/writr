import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseSelect from '@/components/UI/Select/Select.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('@Components/UI/Select', () => {
  let store;
  let getters;
  let actions;
  const getValueValue = 'pl';
  const getValidatorValue = "isEqualTo|'pl'|'en'";
  const getValidatorExtract = ['pl', 'en'];

  const propsData = {
    title: 'Title',
    labels: ['Label 1', 'Label 2'],
    item: 'settings.option',
    action: 'changeState',
  };

  beforeEach(() => {
    getters = {
      getValue: () => () => getValueValue,
      getValidator: () => () => getValidatorValue,
    };

    actions = {
      changeState: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
    });
  });

  it('should have "value" from the store', () => {
    const wrapper = shallowMount(BaseSelect, { store, localVue, propsData });
    expect(wrapper.vm.value).toEqual(getValueValue);
  });

  it('should have "validator" from the store', () => {
    const wrapper = shallowMount(BaseSelect, { store, localVue, propsData });
    expect(wrapper.vm.validator).toEqual(getValidatorValue);
  });

  it('should have "options" extracted from validator', () => {
    const wrapper = shallowMount(BaseSelect, { store, localVue, propsData });
    expect(wrapper.vm.options).toEqual(getValidatorExtract);
  });

  it('should trigger $store action onChange', () => {
    const wrapper = shallowMount(BaseSelect, { store, localVue, propsData });
    wrapper.findAll('option').at(1).setSelected();
    expect(actions.changeState).toHaveBeenCalled();
  });

  it('should change v-model on select option', () => {
    const wrapper = shallowMount(BaseSelect, { store, localVue, propsData });
    wrapper.findAll('option').at(1).setSelected();
    expect(wrapper.vm.value).toEqual(getValidatorExtract[1]);
  });
});
