import { shallowMount } from '@vue/test-utils'
import Statusbar from '@/views/Statusbar/Statusbar.vue'
import GLOBS from './Statusbar.globs'

describe('@views/Statusbar#computed', () => {
  describe('itemCharactersValue', () => {
    let w
    beforeAll(() => {
      w = shallowMount(Statusbar, {
        mocks: {
          ...GLOBS.mocks
        }
      })
    })

    it('should return proper characters count', () => {
      const a = `${GLOBS.test.charactersWithoutSpaces} / ${GLOBS.test.characters}`

      expect(w.vm.itemCharactersValue).toEqual(a)
    })
  })
})
