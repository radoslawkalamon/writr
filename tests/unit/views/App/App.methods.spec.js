import Vue from 'vue';
import mockdate from 'mockdate';
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
    it('should downloadFile function be called with 3 arguments equal to assertion', () => {
      // This one is very, very bad o_o
      const getElementByIdOriginal = global.document.getElementById;
      const downloadFileOriginal = App.methods.downloadFile;

      const timestamp = 1542836053153;
      const filename = 'writr_2018_11_21__22_34.txt';
      const component = Vue.component('text-editor', {
        template: `
        <div id='text-editor'>
          <div>${GLOBS.test.text}</div>
        </div>
        `,
      });

      // Mock Function
      App.methods.downloadFile = jest.fn(() => {});
      // Mock date
      mockdate.set(new Date(timestamp), new Date().getTimezoneOffset());
      // Mock document function
      global.document.getElementById = () => ({
        innerText: GLOBS.test.text,
      });

      const wrapper = shallowMount(App, {
        stubs: {
          textEditor: component,
        },
        mocks: {
          ...GLOBS.mocks,
        },
      });

      const assertion = [
        GLOBS.test.text,
        filename,
        'text/plain',
      ];

      wrapper.vm.sidebarButtonDownload();
      expect(App.methods.downloadFile).toHaveBeenCalledWith(...assertion);

      // Reset
      mockdate.reset();
      App.methods.downloadFile = downloadFileOriginal;
      global.document.getElementById = getElementByIdOriginal;
    });
  });
});
