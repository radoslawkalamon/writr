import { shallowMount } from '@vue/test-utils';
import App from '@/views/App/App.vue';
import GLOBS from './App.globs';

describe('@views/App#computed', () => {
  describe('$store.state.settings.misc.language', () => {
    it('should change lang variable after changing it in store', () => {
      const wrapper = shallowMount(App, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const assertion = GLOBS.test.langChange;

      wrapper.vm.$store.state.settings.misc.language = GLOBS.test.langChange;

      expect(wrapper.vm.$i18n.locale).toEqual(assertion);
    });
  });
});
