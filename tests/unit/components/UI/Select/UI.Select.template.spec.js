import { shallowMount } from '@vue/test-utils';
import UISelect from '@/components/UI/Select/Select.vue';
import GLOBS from './UI.Select.globs';

describe('@/components/UI/Select#template', () => {
  let w;
  let onChangeMock;

  beforeAll(() => {
    onChangeMock = jest.spyOn(UISelect.methods, 'onChange');
    w = shallowMount(UISelect, {
      propsData: {
        ...GLOBS.propsData,
        title: GLOBS.test.title,
      },
      mocks: GLOBS.mocks,
    });
  });

  it('should .base-select__label-wrapper\'s innerText be equal to TITLE prop', () => {
    const a = GLOBS.test.title;

    expect(w.find('.base-select__label-wrapper').text()).toEqual(a);
  });

  it('should .base-select__input\'s value be equal to GLOBS.test.storeValue', () => {
    const a = GLOBS.test.storeValue;

    expect(w.find('.base-select__input').element.value).toEqual(a);
  });

  it('should .base-select__input contains exactly 2 children', () => {
    const a = 2;

    expect(w.findAll('.base-select__input > *').length).toEqual(a);
  });

  it('should .base-select__input option:nth-of-type(1)\'s value be equal to GLOBS.test.storeValidatorArray[0]', () => {
    const a = GLOBS.test.storeValidatorArray[0];

    expect(w.find('.base-select__input option:nth-of-type(1)').element.value).toEqual(a);
  });

  it('should .base-select__input option:nth-of-type(1)\'s innerText be equal to GLOBS.test.labels[0]', () => {
    const a = GLOBS.test.labels[0];

    expect(w.find('.base-select__input option:nth-of-type(1)').text()).toEqual(a);
  });

  it('should .base-select__input option:nth-of-type(2)\'s value be equal to GLOBS.test.storeValidatorArray[1]', () => {
    const a = GLOBS.test.storeValidatorArray[1];

    expect(w.find('.base-select__input option:nth-of-type(2)').element.value).toEqual(a);
  });

  it('should .base-select__input option:nth-of-type(2)\'s innerText be equal to GLOBS.test.labels[1]', () => {
    const a = GLOBS.test.labels[1];

    expect(w.find('.base-select__input option:nth-of-type(2)').text()).toEqual(a);
  });

  it('should .base-select__input on @change trigger onChange function exactly once', () => {
    const a = 1;

    w.find('.base-select__input').trigger('change');

    expect(onChangeMock).toHaveBeenCalledTimes(a);
  });
});
