import StatusbarClock from '@/components/Statusbar/Clock/Clock.vue';
import { mount } from '@vue/test-utils';

describe('@Components/Statusbar/Clock#template', () => {
  let w;
  beforeAll(() => {
    StatusbarClock.created = jest.fn(() => {});
    w = mount(StatusbarClock);
  });

  it('should wrapper have text from DATA', () => {
    const a = w.vm.time;

    expect(w.text()).toEqual(a);
  });
});
