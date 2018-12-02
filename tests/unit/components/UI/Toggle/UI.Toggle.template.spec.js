import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import GLOBS from './UI.Toggle.globs';

describe('@Components/UI/Toggle#template', () => {
  let w;
  let onClickMock;
  const testValue = false;

  beforeAll(() => {
    onClickMock = jest.spyOn(UIToggle.methods, 'onClick');
    w = shallowMount(UIToggle, {
      mocks: {
        $store: {
          getters: {
            getValue: () => testValue,
          },
          dispatch: () => {},
        },
      },
      propsData: {
        item: GLOBS.test.item,
        action: GLOBS.test.action,
        title: GLOBS.test.title,
      },
    });
  });

  it('should .base-section__label-wrapper\'s TITLE attr be equal to TITLE prop', () => {
    const a = GLOBS.test.title;

    expect(w.find('.base-section__label-wrapper').text()).toEqual(a);
  });

  it('should .base-section__form-wrapper have proper classes', () => {
    const a = w.vm.inputWrapperClassNames;

    expect(w.find('.base-section__form-wrapper').attributes('class')).toEqual(a);
  });

  it('should .base-input__input on @click trigger onClick function exactly once', () => {
    const a = 1;

    w.find('.base-section__form-wrapper').trigger('click');

    expect(onClickMock).toBeCalledTimes(a);
  });

  it('should .base-toggle__input have proper classes', () => {
    const a = w.vm.inputClassNames;

    expect(w.find('.base-toggle__input').attributes('class')).toEqual(a);
  });
});
