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
    },
  });

describe('@Components/UI/Toggle#computed', () => {
  describe('inputWrapperClassNames', () => {
    it('should return class list without active when value is set to FALSE', () => {
      const assertion = [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
        '',
      ].join(' ');
      const testValue = false;
      const wrapper = SHALLOW_MOUNT_FUNCTION(testValue);

      expect(wrapper.vm.inputWrapperClassNames).toEqual(assertion);
    });

    it('should return class list with active when value is set to TRUE', () => {
      const assertion = [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
        'base-toggle__form-wrapper--active',
      ].join(' ');
      const testValue = true;
      const wrapper = SHALLOW_MOUNT_FUNCTION(testValue);

      expect(wrapper.vm.inputWrapperClassNames).toEqual(assertion);
    });
  });

  describe('inputClassNames', () => {
    it('should return class list without active when value is set to FALSE', () => {
      const assertion = [
        'base-toggle__input',
        '',
      ].join(' ');
      const testValue = false;
      const wrapper = SHALLOW_MOUNT_FUNCTION(testValue);

      expect(wrapper.vm.inputClassNames).toEqual(assertion);
    });

    it('should return class list with active when value is set to TRUE', () => {
      const assertion = [
        'base-toggle__input',
        'base-toggle__input--active',
      ].join(' ');
      const testValue = true;
      const wrapper = SHALLOW_MOUNT_FUNCTION(testValue);

      expect(wrapper.vm.inputClassNames).toEqual(assertion);
    });
  });
});
