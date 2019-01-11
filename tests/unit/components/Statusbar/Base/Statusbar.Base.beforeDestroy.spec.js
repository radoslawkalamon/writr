import { shallowMount } from '@vue/test-utils';
import StatusbarBase from '@/components/Statusbar/Base/Base.vue';

describe('@Components/Statusbar/Base#beforeDestroy', () => {
  let w;
  beforeAll(() => {
    StatusbarBase.methods.updateSizeToStore = jest.fn(() => {});
    window.removeEventListener = jest.fn(() => {});

    w = shallowMount(StatusbarBase);
    StatusbarBase.methods.updateSizeToStore.mockClear();
    w.destroy();
  });

  it('should call updateSizeToStore exactly once', () => {
    const a = 1;

    expect(StatusbarBase.methods.updateSizeToStore).toHaveBeenCalledTimes(a);
  });

  it('should call updateSizeToStore with wrapper instance & true', () => {
    const a = [
      w.vm,
      true,
    ];

    expect(StatusbarBase.methods.updateSizeToStore).toHaveBeenCalledWith(...a);
  });

  it('should call window.removeEventListener exactly once', () => {
    const a = 1;

    expect(window.removeEventListener).toHaveBeenCalledTimes(a);
  });

  it('should call window.removeEventListener with 2 arguments [String, Function]', () => {
    const a = [
      'resize',
      w.vm.eventResizeCallback,
    ];

    expect(window.removeEventListener).toHaveBeenCalledWith(...a);
  });
});
