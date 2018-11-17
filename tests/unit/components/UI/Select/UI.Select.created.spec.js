import { shallowMount } from '@vue/test-utils';
import UISelect  from '@/components/UI/Select/Select.vue';
import GLOBS from './UI.Select.globs';

describe('@/components/UI/Select#created', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(UISelect, {
      propsData: {
        ...GLOBS.propsData,
      },
      mocks: GLOBS.mocks,
    });
  });

  it('should options be equal to storeValidatorArray', () => {
    const assertion = GLOBS.test.storeValidatorArray;

    expect(wrapper.vm.options).toEqual(assertion);
  })
});
