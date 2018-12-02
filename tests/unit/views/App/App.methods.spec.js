import Vue from 'vue';
import mockdate from 'mockdate';
import { shallowMount } from '@vue/test-utils';
import App from '@/views/App/App.vue';
import GLOBS from './App.globs';

describe('@views/App#methods', () => {
  describe('closePanel', () => {
    it('should change openPanel to FALSE', () => {
      const w = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });

      w.setData({ openPanel: GLOBS.test.panelName });
      w.vm.closePanel();

      expect(w.vm.openPanel).toBeFalsy();
    });
  });

  describe('sidebarButtonToggle', () => {
    it('should change openPanel to GLOBS.test.panelName', () => {
      const w = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = GLOBS.test.panelName;

      w.vm.sidebarButtonToggle(GLOBS.test.panelName);

      expect(w.vm.openPanel).toEqual(a);
    });

    it('after setting openPanel to GLOBS.test.panelName, should change openPanel to FALSE', () => {
      const w = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });

      w.setData({ openPanel: GLOBS.test.panelName });
      w.vm.sidebarButtonToggle(GLOBS.test.panelName);

      expect(w.vm.openPanel).toBeFalsy();
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

      const w = shallowMount(App, {
        stubs: {
          textEditor: component,
        },
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = [
        GLOBS.test.text,
        filename,
        'text/plain',
      ];

      w.vm.sidebarButtonDownload();
      expect(App.methods.downloadFile).toHaveBeenCalledWith(...a);

      // Reset
      mockdate.reset();
      App.methods.downloadFile = downloadFileOriginal;
      global.document.getElementById = getElementByIdOriginal;
    });
  });
});
