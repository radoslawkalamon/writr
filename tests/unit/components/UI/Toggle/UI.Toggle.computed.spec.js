import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import GLOBS from './UI.Toggle.globs';

const SHALLOW_MOUNT_FUNCTION = testValue =>
  shallowMount(UIToggle, {
    mocks: {
      $store: {
        getters: {
          getValue: () => testValue,
        },
      },
    },
    propsData: {
      item: GLOBS.test.item,
      action: GLOBS.test.action,
      name: GLOBS.test.name,
    },
  });

describe('@Components/UI/Toggle#computed', () => {
  describe('mainElementClassNames', () => {
    it('should return classes: name', () => {
      const testValue = false;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-toggle',
        `base-toggle--${GLOBS.test.name}`,
      ].join(' ');

      expect(w.vm.mainElementClassNames).toEqual(a);
    });
  });
  describe('inputWrapperClassNames', () => {
    it('should return classes: !active', () => {
      const testValue = false;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
        '',
      ].join(' ');

      expect(w.vm.inputWrapperClassNames).toEqual(a);
    });

    it('should return classes: active', () => {
      const testValue = true;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
        'base-toggle__form-wrapper--active',
      ].join(' ');

      expect(w.vm.inputWrapperClassNames).toEqual(a);
    });
  });

  describe('inputClassNames', () => {
    it('should return classes: !active', () => {
      const testValue = false;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-toggle__input',
        '',
      ].join(' ');

      expect(w.vm.inputClassNames).toEqual(a);
    });

    it('should return classes: active', () => {
      const testValue = true;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-toggle__input',
        'base-toggle__input--active',
      ].join(' ');

      expect(w.vm.inputClassNames).toEqual(a);
    });
  });
});
