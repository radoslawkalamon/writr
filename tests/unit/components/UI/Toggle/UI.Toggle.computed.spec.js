import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import testClassesListOnArray from '@/../tests/unit/helpers/testClassesListOnArray';
import GLOBS from './UI.Toggle.globs';

const SHALLOW_MOUNT_FUNCTION = testValue => shallowMount(UIToggle, {
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
      ];

      testClassesListOnArray(w.vm.mainElementClassNames, a);
    });
  });
  describe('inputWrapperClassNames', () => {
    it('should return classes: !active', () => {
      const testValue = false;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
      ];

      testClassesListOnArray(w.vm.inputWrapperClassNames, a);
    });

    it('should return classes: active', () => {
      const testValue = true;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
        'base-toggle__form-wrapper--active',
      ];

      testClassesListOnArray(w.vm.inputWrapperClassNames, a);
    });
  });

  describe('inputClassNames', () => {
    it('should return classes: !active', () => {
      const testValue = false;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-toggle__input',
      ];

      testClassesListOnArray(w.vm.inputClassNames, a);
    });

    it('should return classes: active', () => {
      const testValue = true;
      const w = SHALLOW_MOUNT_FUNCTION(testValue);
      const a = [
        'base-toggle__input',
        'base-toggle__input--active',
      ];

      testClassesListOnArray(w.vm.inputClassNames, a);
    });
  });
});
