import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import UIToggle from '@/components/UI/Toggle/Toggle.vue'
import GLOBS from './UI.Toggle.globs'

describe('@Components/UI/Toggle#created', () => {
  let w
  const testValue = false

  beforeAll(() => {
    w = shallowMount(UIToggle, {
      mocks: {
        $store: {
          getters: {
            getValue: () => testValue
          },
          state: {
            [GLOBS.test.item]: () => testValue
          }
        }
      },
      propsData: {
        item: GLOBS.test.item,
        action: GLOBS.test.action
      }
    })
  })

  it(`should change value after changing $store.state.${GLOBS.test.item}`, async () => {
    const a = !testValue
    w.vm.$store.state[GLOBS.test.item] = a
    await Vue.nextTick()
    expect(w.vm.value).toEqual(a)
  })
})
