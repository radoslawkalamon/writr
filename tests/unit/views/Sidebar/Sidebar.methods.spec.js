import mockdate from 'mockdate';
import { shallowMount } from '@vue/test-utils';
import Sidebar from '@/views/Sidebar/Sidebar.vue';
import GLOBS from './Sidebar.globs';

describe('@views/Sidebar#computed', () => {
  let downloadFileMock;
  beforeAll(() => {
    downloadFileMock = jest.fn(() => {});
    Sidebar.methods.downloadFile = downloadFileMock;
    // Mock date
    mockdate.set(new Date(GLOBS.test.timestamp));
    // Mock getElementById innerText;
    global.document.getElementById = () => ({
      innerText: GLOBS.test.fakeText,
    });
  });

  describe('newFile', () => {
    it('newFile test in End2End', () => {
      expect(true).toBeTruthy();
    });
  });

  describe('buttonDownload', () => {
    let w;
    beforeAll(() => {
      w = shallowMount(Sidebar, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      downloadFileMock.mockClear();
      w.vm.buttonDownload();
    });

    it('should call downloadFile exactly once', () => {
      const a = 1;

      expect(downloadFileMock).toHaveBeenCalledTimes(a);
    });

    it('should call downloadFile with 3 proper arguments [Text, Filename, Filetype]', () => {
      const a = [
        GLOBS.test.fakeText,
        GLOBS.test.filename,
        GLOBS.test.filetype,
      ];

      expect(downloadFileMock).toHaveBeenCalledWith(...a);
    });
  });

  describe('togglePanel', () => {
    describe('togglePanel [Open]', () => {
      let w;
      beforeAll(() => {
        w = shallowMount(Sidebar, {
          mocks: {
            ...GLOBS.mocks,
          },
        });
        w.vm.togglePanel(GLOBS.test.panelName);
      });

      it('should change OPENPANEL prop', () => {
        const a = GLOBS.test.panelName;

        expect(w.vm.openPanel).toEqual(a);
      });

      it('should emit togglePanel with OPENPANEL prop as argument', () => {
        const a = GLOBS.test.panelName;

        expect(w.emitted().togglePanel[0]).toEqual([a]);
      });
    });

    describe('togglePanel [Close]', () => {
      let w;
      beforeAll(() => {
        w = shallowMount(Sidebar, {
          mocks: {
            ...GLOBS.mocks,
          },
        });
        w.setData({ openPanel: GLOBS.test.panelName });
        w.vm.togglePanel(GLOBS.test.panelName);
      });

      it('should change OPENPANEL prop', () => {
        const a = false;

        expect(w.vm.openPanel).toEqual(a);
      });

      it('should emit togglePanel with OPENPANEL prop as argument', () => {
        const a = false;

        expect(w.emitted().togglePanel[0]).toEqual([a]);
      });
    });
  });

  describe('resolveIcon', () => {
    let w;
    beforeAll(() => {
      w = shallowMount(Sidebar, {
        mocks: {
          ...GLOBS.mocks,
        },
      });

      // Force iconList mock
      w.setData({
        iconList: {
          [GLOBS.test.theme]: {
            [GLOBS.test.iconTestName]: GLOBS.test.iconTestURL,
          },
        },
      });
    });

    it('should return icon test url', () => {
      const a = GLOBS.test.iconTestURL;

      expect(w.vm.resolveIcon(GLOBS.test.iconTestName)).toEqual(a);
    });
  });
});
