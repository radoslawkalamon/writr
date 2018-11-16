import { shallowMount } from '@vue/test-utils';
import UIToggle from '@/components/UI/Toggle/Toggle.vue';
import GLOBS from './UI.Toggle.globs';

describe('@Components/UI/Toggle#template', () => {
  let wrapper;
  let onClickMock;
  const testValue = false;

  beforeAll(() => {
    onClickMock = jest.spyOn(UIToggle.methods, 'onClick');

    wrapper = shallowMount(UIToggle, {
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

  it('should <span> have title equal to title prop', () => {
    const element = wrapper.find('span.base-section__label-wrapper');
    const assertion = GLOBS.test.title;

    expect(element.text()).toEqual(assertion);
  });

  it('should <div.base-section__form-wrapper> have classes equal to computed function', () => {
    const element = wrapper.find('div.base-section__form-wrapper');
    const assertion = wrapper.vm.inputWrapperClassNames;

    expect(element.attributes('class')).toEqual(assertion);
  });

  it('should onClick be called after click on <div.base-section__form-wrapper>', () => {
    const element = wrapper.find('div.base-section__form-wrapper');
    const assertion = 1;

    element.trigger('click');

    expect(onClickMock).toBeCalledTimes(assertion);
  });

  it('should <div.base-toggle__input> have classes equal to computed function', () => {
    const element = wrapper.find('div.base-toggle__input');
    const assertion = wrapper.vm.inputClassNames;

    expect(element.attributes('class')).toEqual(assertion);
  });
});
