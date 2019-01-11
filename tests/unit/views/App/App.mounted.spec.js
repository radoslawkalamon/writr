import { shallowMount } from '@vue/test-utils';
import App from '@/views/App/App.vue';
import GLOBS from './App.globs';

describe('@views/App#mounted', () => {
  let w;
  beforeAll(() => {
    w = shallowMount(App, {
      mocks: {
        ...GLOBS.mocks,
      },
    });
  });

  it('should change version from ALFA to BETA', () => {
    const a = 'beta';

    expect(w.vm.$store.state.settings.misc.version).toEqual(a);
  });
});
