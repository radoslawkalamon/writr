import { shallowMount } from '@vue/test-utils';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import GLOBS from './Sidebar.Button.globs';

describe('@Components/Sidebar/Button#methods', () => {
  describe('onClick', () => {
    describe('with toggle FALSE', () => {
      let wrapper;
      beforeAll(() => {
        wrapper = shallowMount(SidebarButton, {
          mocks: GLOBS.mocks,
          propsData: {
            name: GLOBS.test.name,
            icon: GLOBS.test.icon,
          },
        });

        wrapper.vm.onClick();
      });

      it('should not toggle button if toggle is false', () => {
        expect(wrapper.vm.toggled).toBeFalsy();
      });

      it('should emit "action" event', () => {
        expect(wrapper.emitted().action).toBeTruthy();
      });

      it('should emitted "action" has payload with name', () => {
        const assertion = [GLOBS.test.name];
        expect(wrapper.emitted().action[0]).toEqual(assertion);
      });
    });

    describe('with toggle TRUE', () => {
      let wrapper;
      beforeAll(() => {
        wrapper = shallowMount(SidebarButton, {
          mocks: GLOBS.mocks,
          propsData: {
            name: GLOBS.test.name,
            icon: GLOBS.test.icon,
            toggle: true,
          },
        });

        wrapper.vm.onClick();
      });

      it('should toggle button if toggle is true', () => {
        expect(wrapper.vm.toggled).toBeTruthy();
      });

      it('should emit "action" event', () => {
        expect(wrapper.emitted().action).toBeTruthy();
      });

      it('should emitted "action" has payload with name', () => {
        const assertion = [GLOBS.test.name];
        expect(wrapper.emitted().action[0]).toEqual(assertion);
      });
    });
  });
});
