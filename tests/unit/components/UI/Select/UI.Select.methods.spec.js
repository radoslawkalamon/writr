import { shallowMount } from '@vue/test-utils'
import UISelect from '@/components/UI/Select/Select.vue'
import GLOBS from './UI.Select.globs'

describe('@/components/UI/Select#methods', () => {
  describe('onChange', () => {
    let w

    beforeAll(() => {
      w = shallowMount(UISelect, {
        propsData: {
          ...GLOBS.propsData
        },
        mocks: GLOBS.mocks
      })

      w.vm.onChange()
    })

    it('should call $store.dispatch function exactly once', () => {
      const a = 1

      expect(w.vm.$store.dispatch).toHaveBeenCalledTimes(a)
    })

    it('should call $store.dispatch with 2 arguments: action name, data', () => {
      const a = [
        GLOBS.test.action,
        {
          item: GLOBS.test.item,
          value: GLOBS.test.storeValue
        }
      ]

      expect(w.vm.$store.dispatch).toBeCalledWith(...a)
    })
  })
})
