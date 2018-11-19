import { shallowMount } from '@vue/test-utils';
import App from '@/views/App/App.vue';
import GLOBS from './App.globs';

describe('@views/App#methods', () => {
  describe('closePanel', () => {
    it('should change openPanel to FALSE', () => {
      const wrapper = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });

      wrapper.setData({ openPanel: GLOBS.test.panelName });
      wrapper.vm.closePanel();

      expect(wrapper.vm.openPanel).toBeFalsy();
    });
  });

  describe('sidebarButtonToggle', () => {
    it('should change openPanel to TEST_PANEL_NAME', () => {
      const wrapper = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const assertion = GLOBS.test.panelName;

      wrapper.vm.sidebarButtonToggle(GLOBS.test.panelName);

      expect(wrapper.vm.openPanel).toEqual(assertion);
    });

    it('after setting openPanel to TEST_PANEL_NAME, should change openPanel to FALSE', () => {
      const wrapper = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });

      wrapper.setData({ openPanel: GLOBS.test.panelName });
      wrapper.vm.sidebarButtonToggle(GLOBS.test.panelName);

      expect(wrapper.vm.openPanel).toBeFalsy();
    });
  });

  describe('sidebarButtonDownload', () => {
    it('sidebarButtonDownload tests in End2End', () => {
      expect(true).toBeTruthy();
    });
  });
});
