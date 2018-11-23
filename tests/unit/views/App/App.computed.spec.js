import { shallowMount } from '@vue/test-utils';
import App from '@/views/App/App.vue';
import GLOBS from './App.globs';

describe('@views/App#computed', () => {
  describe('appClassNames', () => {
    it('should return class list with theme name', () => {
      const assertion = [
        'writr',
        `writr-theme--${GLOBS.test.themeName}`,
      ].join(' ');

      const wrapper = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });

      expect(wrapper.vm.appClassNames).toEqual(assertion);
    });
  });
});
