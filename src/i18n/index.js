import Vue from 'vue'
import VueI18n from 'vue-i18n'

import pl from '@/i18n/pl'
import en from '@/i18n/en'

Vue.use(VueI18n)

const messages = {
  en,
  pl
}

export default new VueI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages
})
