import { shallowMount } from '@vue/test-utils';
import UISelect from '@/components/UI/Select/Select.vue';
import GLOBS from './UI.Select.globs';

describe('@/components/UI/Select#template', () => {
  let wrapper;
  let onChangeMock;

  beforeAll(() => {
    onChangeMock = jest.spyOn(UISelect.methods, 'onChange');
    wrapper = shallowMount(UISelect, {
      propsData: {
        ...GLOBS.propsData,
        title: GLOBS.test.title,
      },
      mocks: GLOBS.mocks,
    });
  });

  it('should .base-select__label-wrapper have innerText equal to title prop', () => {
    const elementSelector = '.base-select__label-wrapper';
    const assertion = GLOBS.test.title;

    expect(wrapper.find(elementSelector).text()).toEqual(assertion);
  });

  it('should .base-select__input have value equal to TEST_VALUE', () => {
    const elementSelector = '.base-select__input';
    const assertion = GLOBS.test.storeValue;

    expect(wrapper.find(elementSelector).element.value).toEqual(assertion);
  });

  it('should .base-select__input contains exactly 2 <option> children', () => {
    const elementSelector = '.base-select__input > *';
    const assertion = 2;

    expect(wrapper.findAll(elementSelector).length).toEqual(assertion);
  });

  it('should .base-select__input option:nth-of-type(1) have value equal to TEST_STORE_VALIDATOR_ARRAY[0]', () => {
    const elementSelector = '.base-select__input option:nth-of-type(1)';
    const assertion = GLOBS.test.storeValidatorArray[0];

    expect(wrapper.find(elementSelector).element.value).toEqual(assertion);
  });

  it('should .base-select__input option:nth-of-type(1) have innerText equal to TEST_LABEL[0]', () => {
    const elementSelector = '.base-select__input option:nth-of-type(1)';
    const assertion = GLOBS.test.labels[0];

    expect(wrapper.find(elementSelector).text()).toEqual(assertion);
  });

  it('should .base-select__input option:nth-of-type(2) have value equal to TEST_STORE_VALIDATOR_ARRAY[1]', () => {
    const elementSelector = '.base-select__input option:nth-of-type(2)';
    const assertion = GLOBS.test.storeValidatorArray[1];

    expect(wrapper.find(elementSelector).element.value).toEqual(assertion);
  });

  it('should .base-select__input option:nth-of-type(2) have innerText equal to TEST_LABEL[1]', () => {
    const elementSelector = '.base-select__input option:nth-of-type(2)';
    const assertion = GLOBS.test.labels[1];

    expect(wrapper.find(elementSelector).text()).toEqual(assertion);
  });

  it('should .base-select__input on event change trigger onChange function exactly once', () => {
    const elementSelector = '.base-select__input';
    const assertion = 1;

    wrapper.find(elementSelector).trigger('change');

    expect(onChangeMock).toHaveBeenCalledTimes(assertion);
  });
});

/* <template>
  <div class='base-select'>
    <span class='base-section__label-wrapper base-select__label-wrapper' v-text='this.title'></span>
    <div class='base-section__form-wrapper base-select__form-wrapper'>
      <select class='base-select__input' @change='onChange' v-model='value'>
        <option v-for='(item, index) in options' :key='`option_${index}`' :value='item' v-text='labels[index]'></option>
      </select>
    </div>
  </div>
</template> */
