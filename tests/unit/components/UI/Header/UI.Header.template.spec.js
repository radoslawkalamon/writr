import { mount } from '@vue/test-utils'
import UIHeader from '@/components/UI/Header/Header.vue'
import GLOBS from './UI.Header.globs'

describe('@/components/UI/Header#template', () => {
  describe('with HEADER prop set to false', () => {
    let w

    beforeAll(() => {
      w = mount(UIHeader, {
        context: {
          props: {
            header: false,
            title: GLOBS.test.title
          }
        }
      })
    })

    it('should wrapper tag be <h2>', () => {
      expect(w.find('h2').exists()).toBeTruthy()
    })

    it('should text be inside wrapper', () => {
      const a = GLOBS.test.title

      expect(w.text()).toEqual(a)
    })
  })

  describe('with HEADER prop set to true', () => {
    let w

    beforeAll(() => {
      w = mount(UIHeader, {
        context: {
          props: {
            header: true,
            title: GLOBS.test.title
          }
        }
      })
    })

    it('should wrapper tag be <h1>', () => {
      expect(w.find('h1').exists()).toBeTruthy()
    })

    it('should text be inside wrapper', () => {
      const a = GLOBS.test.title

      expect(w.text()).toEqual(a)
    })
  })
})
