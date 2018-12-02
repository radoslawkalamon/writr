import { shallowMount } from '@vue/test-utils';
import UIInput from '@/components/UI/Input/Input.vue';
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
      ].join(' ');

      expect(w.vm.mainElementClassNames).toEqual(a);
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
        '',
        '',
      ].join(' ');

      expect(w.vm.inputWrapperClassNames).toEqual(a);
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
        '',
      ].join(' ');

      expect(w.vm.inputWrapperClassNames).toEqual(a);
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
        '',
        'base-input__form-wrapper--error',
      ].join(' ');

      w.setData({ error: true });

      expect(w.vm.inputWrapperClassNames).toEqual(a);
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
      ].join(' ');

      w.setData({ error: true });

      expect(w.vm.inputWrapperClassNames).toEqual(a);
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
        '',
        '',
      ].join(' ');

      expect(w.vm.inputClassNames).toEqual(a);
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
        '',
      ].join(' ');

      expect(w.vm.inputClassNames).toEqual(a);
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
        '',
        'base-input__input--error',
      ].join(' ');

      w.setData({ error: true });

      expect(w.vm.inputClassNames).toEqual(a);
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
      ].join(' ');

      w.setData({ error: true });

      expect(w.vm.inputClassNames).toEqual(a);
    });
  });
});
