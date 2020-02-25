import mutations from '@/store/mutations'
import GLOBS from './store.globs'

describe('$store#mutations', () => {
  describe('CHANGE_STATE', () => {
    it('should change test state if state exists', () => {
      const { state } = GLOBS
      const payload = {
        item: GLOBS.test.item,
        value: GLOBS.test.value
      }
      const a = GLOBS.test.value

      mutations.CHANGE_STATE(state, payload)

      expect(state.test.item.store).toEqual(a)
    })

    it('should throw error if state not exists', () => {
      const { state } = GLOBS
      const payload = {
        item: GLOBS.test.itemWrong,
        value: GLOBS.test.value
      }

      expect(() => {
        mutations.CHANGE_STATE(state, payload)
      }).toThrowError()
    })
  })

  describe('COMMIT_STATS', () => {
    const { state } = GLOBS
    const payload = {
      characters: 1,
      charactersWithoutSpaces: 2,
      words: 3,
      paragraphs: 4,
      pages: 5
    }

    beforeAll(() => {
      mutations.COMMIT_STATS(state, payload)
    })

    Object.keys(payload).forEach((element) => {
      it(`should commit stats to store [${element}]`, () => {
        expect(state.stats[element]).toEqual(payload[element])
      })
    })
  })
})
