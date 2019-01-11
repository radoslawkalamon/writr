import { shallowMount } from '@vue/test-utils';
import UIInput from '@/components/UI/Input/Input.vue';
import testClassesListOnArray from '@/../tests/unit/helpers/testClassesListOnArray';
import GLOBS from './UI.Input.globs';

describe('@/components/UI/Input#computed', () => {
  describe('mainElementClassNames', () => {
    it('should return classes: name', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-input',
        `base-input--${GLOBS.test.name}`,
      ];

      testClassesListOnArray(w.vm.mainElementClassNames, a);
    });
  });
  describe('inputWrapperClassNames', () => {
    it('should return classes: !unit, !error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
      ];

      testClassesListOnArray(w.vm.inputWrapperClassNames, a);
    });

    it('should return classes: unit, !error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        'base-input__form-wrapper--unit',
      ];

      testClassesListOnArray(w.vm.inputWrapperClassNames, a);
    });


    it('should return classes: !unit, error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        'base-input__form-wrapper--error',
      ];

      w.setData({ error: true });

      testClassesListOnArray(w.vm.inputWrapperClassNames, a);
    });

    it('should return classes: unit, error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        'base-input__form-wrapper--unit',
        'base-input__form-wrapper--error',
      ];

      w.setData({ error: true });

      testClassesListOnArray(w.vm.inputWrapperClassNames, a);
    });
  });

  describe('inputClassNames', () => {
    it('should return classes: !unit, !error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-input__input',
      ];

      testClassesListOnArray(w.vm.inputClassNames, a);
    });

    it('should return classes: unit, !error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-input__input',
        'base-input__input--unit',
      ];

      testClassesListOnArray(w.vm.inputClassNames, a);
    });


    it('should return classes: !unit, error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-input__input',
        'base-input__input--error',
      ];

      w.setData({ error: true });

      testClassesListOnArray(w.vm.inputClassNames, a);
    });

    it('should return classes: unit, error', () => {
      const w = shallowMount(UIInput, {
        propsData: {
          ...GLOBS.propsData,
          unit: GLOBS.test.unit,
        },
        mocks: GLOBS.mocks,
      });
      const a = [
        'base-input__input',
        'base-input__input--unit',
        'base-input__input--error',
      ];

      w.setData({ error: true });

      testClassesListOnArray(w.vm.inputClassNames, a);
    });
  });
});
