import { shallowMount } from '@vue/test-utils';
import App from '@/views/App/App.vue';
import GLOBS from './App.globs';

describe('@views/App#methods', () => {
  describe('togglePanel', () => {
    it('should change TOGGLEPANEL prop to provided panel name', () => {
      const w = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = 'test-name';

      w.vm.togglePanel(a);

      expect(w.vm.openPanel).toEqual(a);
    });

    it('should change TOGGLEPANEL prop to false if no name provided', () => {
      const w = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = false;

      w.setData('togglePanel', 'simple-test-name');
      w.vm.togglePanel();

      expect(w.vm.openPanel).toEqual(a);
    });
  });
});
