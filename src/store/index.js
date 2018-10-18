import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistedstate from 'vuex-persistedstate';

import state from '@/store/state';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import validators from '@/store/validators';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...state,
    validators,
  },
  getters,
  mutations,
  actions,
  plugins: [
    VuexPersistedstate({
      key: 'writrSets',
      paths: ['settings'],
    }),
  ],
});
