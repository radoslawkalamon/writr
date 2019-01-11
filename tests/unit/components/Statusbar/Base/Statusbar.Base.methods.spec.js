import { mount } from '@vue/test-utils';
import StatusbarBase from '@/components/Statusbar/Base/Base.vue';
import GLOBS from './Statusbar.Base.globs';

describe('@Components/Statusbar/Base#methods', () => {
  describe('eventResizeCallback', () => {
    let w;
    let updateSizeToStoreMock;
    beforeAll(() => {
      updateSizeToStoreMock = jest.spyOn(StatusbarBase.methods, 'updateSizeToStore');
      w = mount(StatusbarBase, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      updateSizeToStoreMock.mockClear();
      w.vm.eventResizeCallback();
    });

    it('should call eventResizeCallback exactly once', () => {
      const a = 1;

      expect(updateSizeToStoreMock).toHaveBeenCalledTimes(a);
    });

    it('should call eventResizeCallback with Vue context', () => {
      const a = [
        w.vm,
      ];

      expect(updateSizeToStoreMock).toHaveBeenCalledWith(...a);
    });
  });

  describe('updateSizeToStore', () => {
    it('Test in End2End enviroment', () => {
      expect(true).toBeTruthy();
    });
  });
});
