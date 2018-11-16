import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import GLOBS from './UI.Toggle.globs';

describe('@Components/UI/Toggle#created', () => {
  let wrapper;
  const testValue = false;

  beforeAll(() => {
    wrapper = shallowMount(UIToggle, {
      mocks: {
        $store: {
          getters: {
            getValue: () => testValue,
          },
          state: {
            [GLOBS.test.item]: () => testValue,
          },
        },
      },
      propsData: {
        item: GLOBS.test.item,
        action: GLOBS.test.action,
      },
    });
  });

  it(`should change value after changing $store.state.${GLOBS.test.item}`, () => {
    const assertion = !testValue;
    wrapper.vm.$store.state[GLOBS.test.item] = assertion;

    expect(wrapper.vm.value).toEqual(assertion);
  });
});
