import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import App from '@/views/App/App.vue'
import GLOBS from './App.globs'

describe('@views/App#computed', () => {
  describe('$store.state.settings.misc.language', () => {
    it('should change LOCALE after changing it in store', async () => {
      const w = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks
        }
      })
      const a = GLOBS.test.langChange

      w.vm.$store.state.settings.misc.language = a
      await Vue.nextTick()
      expect(w.vm.$i18n.locale).toEqual(a)
    })
  })
})
