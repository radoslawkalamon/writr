import { shallowMount } from '@vue/test-utils';
import SidebarButton from '@/components/Sidebar/Button/Button.vue';
import GLOBS from './Sidebar.Button.globs';

describe('@Components/Sidebar/Button#methods', () => {
  describe('onClick', () => {
    describe('with TOGGLE prop set to false', () => {
      let w;
      beforeAll(() => {
        w = shallowMount(SidebarButton, {
          mocks: GLOBS.mocks,
          propsData: {
            name: GLOBS.test.name,
            icon: GLOBS.test.icon,
          },
        });

        // Simulate click
        w.vm.onClick();
      });

      it('shouldn\'t toggle button', () => {
        expect(w.vm.toggled).toBeFalsy();
      });

      it('should emit ACTION', () => {
        expect(w.emitted().action).toBeTruthy();
      });

      it('should emitted ACTION have payload with NAME prop', () => {
        const a = [GLOBS.test.name];

        expect(w.emitted().action[0]).toEqual(a);
      });
    });

    describe('with TOGGLE prop set to true', () => {
      let w;
      beforeAll(() => {
        w = shallowMount(SidebarButton, {
          mocks: GLOBS.mocks,
          propsData: {
            name: GLOBS.test.name,
            icon: GLOBS.test.icon,
            toggle: true,
          },
        });

        // Simulate click
        w.vm.onClick();
      });

      it('should toggle button', () => {
        expect(w.vm.toggled).toBeTruthy();
      });

      it('should emit ACTION', () => {
        expect(w.emitted().action).toBeTruthy();
      });

      it('should emitted ACTION has payload with name', () => {
        const a = [GLOBS.test.name];
        expect(w.emitted().action[0]).toEqual(a);
      });
    });
  });
});
