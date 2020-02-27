import mockdate from 'mockdate'
import { mount } from '@vue/test-utils'
import StatusbarClock from '@/components/Statusbar/Clock/Clock.vue'
import GLOBS from './Statusbar.Clock.globs'

describe('@Components/Statusbar/Clock#methods', () => {
  let updateTimeMock
  let setupNextUpdateMock
  beforeAll(() => {
    // Prevent StatusbarClock.created function from invoking
    StatusbarClock.created = jest.fn(() => {})
    // Prevent setTimeout from setting timer
    global.window.setTimeout = jest.fn(() => {})
    // Create mocks
    updateTimeMock = jest.spyOn(StatusbarClock.methods, 'updateTime')
    setupNextUpdateMock = jest.spyOn(StatusbarClock.methods, 'setupNextUpdate')
    // Mock date
    mockdate.set(GLOBS.test.timestamp)
  })

  describe('intervalCallback', () => {
    let w
    beforeAll(() => {
      w = mount(StatusbarClock)

      updateTimeMock.mockClear()
      setupNextUpdateMock.mockClear()

      w.vm.intervalCallback()
    })

    it('should updateTime function be called exactly once', () => {
      const a = 1

      expect(updateTimeMock).toHaveBeenCalledTimes(a)
    })

    it('should updateTime function be called with Hours & Minutes', () => {
      const a = [
        GLOBS.test.time.hours,
        GLOBS.test.time.minutes
      ]

      expect(updateTimeMock).toHaveBeenCalledWith(...a)
    })

    it('should setupNextUpdate function be called exactly once', () => {
      const a = 1

      expect(setupNextUpdateMock).toHaveBeenCalledTimes(a)
    })

    it('should setupNextUpdate function be called with Seconds & Milliseconds', () => {
      const a = [
        GLOBS.test.time.seconds,
        GLOBS.test.time.milliseconds
      ]

      expect(setupNextUpdateMock).toHaveBeenCalledWith(...a)
    })
  })

  describe('updateTime', () => {
    let w
    beforeAll(() => {
      w = mount(StatusbarClock)
    })

    it('should set time data', () => {
      w.vm.updateTime(GLOBS.test.time.hours, GLOBS.test.time.minutes)

      const a = `${GLOBS.test.time.hours}:${GLOBS.test.time.minutes}`

      expect(w.vm.time).toEqual(a)
    })

    it('should add zero if one number arguments passed', () => {
      w.vm.updateTime(5, 5)

      const a = '05:05'

      expect(w.vm.time).toEqual(a)
    })
  })

  describe('setupNextUpdate', () => {
    let w
    beforeAll(() => {
      w = mount(StatusbarClock)
      global.window.setTimeout.mockClear()
      w.vm.setupNextUpdate(GLOBS.test.time.seconds, GLOBS.test.time.milliseconds)
    })

    it('should call window.setTimeout exactly once', () => {
      const a = 1

      expect(global.window.setTimeout).toHaveBeenCalledTimes(a)
    })

    it('should call window.setTimeout with intervalCallback function & proper time', () => {
      const a = [
        w.vm.intervalCallback,
        GLOBS.test.nextUpdateInterval
      ]

      expect(global.window.setTimeout).toHaveBeenCalledWith(...a)
    })
  })
})
