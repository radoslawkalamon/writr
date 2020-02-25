import { shallowMount } from '@vue/test-utils'
import UIInput from '@/components/UI/Input/Input.vue'
import testClassesListOnDOMElement from '@/../tests/unit/helpers/testClassesListOnDOMElement'
import GLOBS from './UI.Input.globs'

describe('@/components/UI/Input#template', () => {
  let w
  let onChangeMock

  beforeAll(() => {
    onChangeMock = jest.spyOn(UIInput.methods, 'onChange')
    w = shallowMount(UIInput, {
      propsData: {
        ...GLOBS.propsData,
        title: GLOBS.test.title,
        unit: GLOBS.test.unit
      },
      mocks: GLOBS.mocks
    })
  })

  it('should .base-input__title\'s innerText be equal to TITLE prop', () => {
    const a = GLOBS.test.title

    expect(w.find('.base-input__title').text()).toEqual(a)
  })

  it('should .base-input__form-wrapper have proper classes', () => {
    const DOMElement = w.find('.base-input__form-wrapper')

    testClassesListOnDOMElement(w.vm.inputWrapperClassNames, DOMElement)
  })

  it('should .base-input__form-wrapper\'s DATA-UNIT attr be equal to UNIT prop', () => {
    const a = GLOBS.test.unit

    expect(w.find('.base-input__form-wrapper').attributes('data-unit')).toEqual(a)
  })

  it('should .base-input__form-wrapper\'s DATA-ERROR attr be equal to ERRORTIP prop', () => {
    const a = GLOBS.test.errorTip

    expect(w.find('.base-input__form-wrapper').attributes('data-error')).toEqual(a)
  })

  it('should .base-input__input have proper classes', () => {
    const DOMElement = w.find('.base-input__input')

    testClassesListOnDOMElement(w.vm.inputClassNames, DOMElement)
  })

  it('should .base-input__input\'s value be equal to GLOBS.test.storeValue', () => {
    const elementValue = parseInt(w.find('.base-input__input').element.value, 10)
    const a = GLOBS.test.storeValue

    expect(elementValue).toEqual(a)
  })

  it('should .base-input__input on @change trigger onChange function exactly once', () => {
    const a = 1

    w.find('.base-input__input').trigger('change')

    expect(onChangeMock).toHaveBeenCalledTimes(a)
  })
})
