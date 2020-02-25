import StatusbarClock from '@/components/Statusbar/Clock/Clock.vue'
import { mount } from '@vue/test-utils'
// import GLOBS from './Statusbar.Clock.globs';

describe('@Components/Statusbar/Clock#created', () => {
  beforeAll(() => {
    StatusbarClock.methods.intervalCallback = jest.fn(() => {})
    mount(StatusbarClock)
  })

  it('should intervalCallback be called exactly once', () => {
    const a = 1

    expect(StatusbarClock.methods.intervalCallback).toHaveBeenCalledTimes(a)
  })
})
