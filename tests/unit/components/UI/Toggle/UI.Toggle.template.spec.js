import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import testClassesListOnDOMElement from '@/../tests/unit/helpers/testClassesListOnDOMElement';
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

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it('should .base-section__label-wrapper\'s TITLE attr be equal to TITLE prop', () => {
    const a = GLOBS.test.title;

    expect(w.find('.base-section__label-wrapper').text()).toEqual(a);
  });

  it('should .base-section__form-wrapper have proper classes', () => {
    const DOMElement = w.find('.base-section__form-wrapper');

    testClassesListOnDOMElement(w.vm.inputWrapperClassNames, DOMElement);
  });

  it('should .base-input__input on @click trigger onClick function exactly once', () => {
    const a = 1;

    w.find('.base-section__form-wrapper').trigger('click');

    expect(onClickMock).toBeCalledTimes(a);
  });

  it('should .base-input__input on @keyup.space trigger onClick function exactly once', () => {
    const a = 1;

    w.find('.base-section__form-wrapper').trigger('keyup', {
      key: ' ', // Space
    });

    expect(onClickMock).toBeCalledTimes(a);
  });

  it('should .base-input__input on @keyup.enter trigger onClick function exactly once', () => {
    const a = 1;

    w.find('.base-section__form-wrapper').trigger('keyup', {
      key: 'Enter',
    });

    expect(onClickMock).toBeCalledTimes(a);
  });

  it('should .base-toggle__input have proper classes', () => {
    const DOMElement = w.find('.base-toggle__input');

    testClassesListOnDOMElement(w.vm.inputClassNames, DOMElement);
  });
});
