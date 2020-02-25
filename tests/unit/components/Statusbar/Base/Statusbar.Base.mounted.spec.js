import { shallowMount } from '@vue/test-utils'
import StatusbarBase from '@/components/Statusbar/Base/Base.vue'
// import GLOBS from './Statusbar.Base.globs';

describe('@Components/Statusbar/Base#mounted', () => {
  let w
  beforeAll(() => {
    StatusbarBase.methods.updateSizeToStore = jest.fn(() => {})
    window.addEventListener = jest.fn(() => {})
    w = shallowMount(StatusbarBase)
  })

  it('should call updateSizeToStore exactly once', () => {
    const a = 1

    expect(StatusbarBase.methods.updateSizeToStore).toHaveBeenCalledTimes(a)
  })

  it('should call updateSizeToStore with wrapper instance', () => {
    const a = [
      w.vm
    ]

    expect(StatusbarBase.methods.updateSizeToStore).toHaveBeenCalledWith(...a)
  })

  it('should call window.addEventListener exactly once', () => {
    const a = 1

    expect(window.addEventListener).toHaveBeenCalledTimes(a)
  })

  it('should call window.addEventListener with 2 arguments [String, Function]', () => {
    const a = [
      'resize',
      w.vm.eventResizeCallback
    ]

    expect(window.addEventListener).toHaveBeenCalledWith(...a)
  })
})
