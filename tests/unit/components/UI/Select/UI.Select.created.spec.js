import { shallowMount } from '@vue/test-utils'
import UISelect from '@/components/UI/Select/Select.vue'
import GLOBS from './UI.Select.globs'

describe('@/components/UI/Select#created', () => {
  let w

  beforeAll(() => {
    w = shallowMount(UISelect, {
      propsData: {
        ...GLOBS.propsData
      },
      mocks: GLOBS.mocks
    })
  })

  it('should OPTIONS be equal to GLOBS.test.storeValidatorArray', () => {
    const a = GLOBS.test.storeValidatorArray

    expect(w.vm.options).toEqual(a)
  })
})
