import { shallowMount } from '@vue/test-utils';
import UIInput from '@/components/UI/Input/Input.vue';
import GLOBS from './UI.Input.globs';

describe('@/components/UI/Input#computed', () => {
  describe('mainElementClassNames', () => {
    it('should return class list with name from props', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-input',
        `base-input--${GLOBS.test.name}`,
      ].join(' ');

      expect(wrapper.vm.mainElementClassNames).toEqual(assertion);
    });
  });
  describe('inputWrapperClassNames', () => {
    it('should return class list without unit and error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        '',
        '',
      ].join(' ');

      expect(wrapper.vm.inputWrapperClassNames).toEqual(assertion);
    });

    it('should return class list with unit and without error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        'base-input__form-wrapper--unit',
        '',
      ].join(' ');

      expect(wrapper.vm.inputWrapperClassNames).toEqual(assertion);
    });


    it('should return class list without unit and with error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        '',
        'base-input__form-wrapper--error',
      ].join(' ');

      wrapper.setData({ error: true });

      expect(wrapper.vm.inputWrapperClassNames).toEqual(assertion);
    });

    it('should return class list with unit and error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        'base-input__form-wrapper--unit',
        'base-input__form-wrapper--error',
      ].join(' ');

      wrapper.setData({ error: true });

      expect(wrapper.vm.inputWrapperClassNames).toEqual(assertion);
    });
  });

  describe('inputClassNames', () => {
    it('should return class list without unit and error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-input__input',
        '',
        '',
      ].join(' ');

      expect(wrapper.vm.inputClassNames).toEqual(assertion);
    });

    it('should return class list with unit and without error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-input__input',
        'base-input__input--unit',
        '',
      ].join(' ');

      expect(wrapper.vm.inputClassNames).toEqual(assertion);
    });


    it('should return class list without unit and with error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-input__input',
        '',
        'base-input__input--error',
      ].join(' ');

      wrapper.setData({ error: true });

      expect(wrapper.vm.inputClassNames).toEqual(assertion);
    });

    it('should return class list with unit and error classes', () => {
      const wrapper = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const assertion = [
        'base-input__input',
        'base-input__input--unit',
        'base-input__input--error',
      ].join(' ');

      wrapper.setData({ error: true });

      expect(wrapper.vm.inputClassNames).toEqual(assertion);
    });
  });
});
