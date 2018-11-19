import { shallowMount } from '@vue/test-utils';
import UIInput from '@/components/UI/Input/Input.vue';
import GLOBS from './UI.Input.globs';

describe('@/components/UI/Input#template', () => {
  let wrapper;
  let onChangeMock;

  beforeAll(() => {
    onChangeMock = jest.spyOn(UIInput.methods, 'onChange');
    wrapper = shallowMount(UIInput, {
      propsData: {
        ...GLOBS.propsData,
        title: GLOBS.test.title,
        unit: GLOBS.test.unit,
      },
      mocks: GLOBS.mocks,
    });
  });

  it('should .base-input__title have innerText equal to title prop', () => {
    const elementSelector = '.base-input__title';
    const assertion = GLOBS.test.title;

    expect(wrapper.find(elementSelector).text()).toEqual(assertion);
  });

  it('should .base-input__form-wrapper have classes equal to inputWrapperClassNames return', () => {
    const elementSelector = '.base-input__form-wrapper';
    const assertion = wrapper.vm.inputWrapperClassNames;

    expect(wrapper.find(elementSelector).attributes('class')).toEqual(assertion);
  });

  it('should .base-input__form-wrapper have data-unit attr equal to unit prop', () => {
    const elementSelector = '.base-input__form-wrapper';
    const assertion = GLOBS.test.unit;

    expect(wrapper.find(elementSelector).attributes('data-unit')).toEqual(assertion);
  });

  it('should .base-input__form-wrapper have data-error attr qual to errorTip prop', () => {
    const elementSelector = '.base-input__form-wrapper';
    const assertion = GLOBS.test.errorTip;

    expect(wrapper.find(elementSelector).attributes('data-error')).toEqual(assertion);
  });

  it('should .base-input__input have classes equal to inputClassNames return', () => {
    const elementSelector = '.base-input__input';
    const assertion = wrapper.vm.inputClassNames;

    expect(wrapper.find(elementSelector).attributes('class')).toEqual(assertion);
  });

  it('should .base-input__input have value equal to TEST_VALUE', () => {
    const elementSelector = '.base-input__input';
    const assertion = GLOBS.test.storeValue;
    const elementValue = parseInt(wrapper.find(elementSelector).element.value, 10);

    expect(elementValue).toEqual(assertion);
  });

  it('should .base-input__input on event change trigger onChange function exactly once', () => {
    const elementSelector = '.base-input__input';
    const assertion = 1;

    wrapper.find(elementSelector).trigger('change');

    expect(onChangeMock).toHaveBeenCalledTimes(assertion);
  });
});
