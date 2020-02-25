import getters from '@/store/getters'
import GLOBS from './store.globs'

describe('$store#getters', () => {
  describe('getValue', () => {
    it('should return GLOBS.test.notChangedValue', () => {
      const { item } = GLOBS.test
      const { state } = GLOBS
      const a = GLOBS.test.notChangedValue

      expect(getters.getValue(state)(item)).toEqual(a)
    })
  })

  describe('getValidator', () => {
    it('should return GLOBS.test.validator', () => {
      const { item } = GLOBS.test
      const { state } = GLOBS
      const a = GLOBS.test.validator

      expect(getters.getValidator(state)(item)).toEqual(a)
    })
  })
})
