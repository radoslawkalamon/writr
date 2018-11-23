import { shallowMount } from '@vue/test-utils';
import UIHeader from '@/components/UI/Header/Header.vue';
import GLOBS from './UI.Header.globs';

describe('@/components/UI/Header#template', () => {
  describe('with header set to FALSE', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(UIHeader, {
        slots: {
          default: GLOBS.test.text,
        },
      });
    });

    it('should tag be <h2>', () => {
      const assertion = 'h2';
      expect(wrapper.find(assertion).exists()).toBeTruthy();
    });

    it('should be text inside header', () => {
      expect(wrapper.text()).toBe(GLOBS.test.text);
    });
  });

  describe('with header set to TRUE', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(UIHeader, {
        slots: {
          default: GLOBS.test.text,
        },
        propsData: {
          header: true,
        },
      });
    });

    it('should tag be <h1>', () => {
      const assertion = 'h1';
      expect(wrapper.find(assertion).exists()).toBeTruthy();
    });

    it('should be text inside header', () => {
      expect(wrapper.text()).toBe(GLOBS.test.text);
    });
  });
});
