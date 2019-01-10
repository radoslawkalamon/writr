import { shallowMount } from '@vue/test-utils';
import App from '@/views/App/App.vue';
import testClassesListOnArray from '@/../tests/unit/helpers/testClassesListOnArray';
import GLOBS from './App.globs';

describe('@views/App#computed', () => {
  describe('appClassNames', () => {
    it('should return classes: name', () => {
      const w = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = [
        'writr',
        `writr-theme--${GLOBS.test.themeName}`,
      ];

      testClassesListOnArray(w.vm.appClassNames, a);
    });
  });
});
