import { mount } from '@vue/test-utils'
import TextEditor from '@/components/TextEditor/TextEditor.vue'
import GLOBS from './TextEditor.globs'

describe('@Components/TextEditor#computed', () => {
  describe('spellcheckValue', () => {
    it('should return value equal to GLOBS.test.spellChecker', () => {
      const w = mount(TextEditor, {
        mocks: {
          ...GLOBS.mocks
        }
      })
      const a = GLOBS.test.spellChecker

      expect(w.vm.spellcheckValue).toEqual(a)
    })
  })

  describe('mainStyle', () => {
    it('should return proper styles', () => {
      const w = mount(TextEditor, {
        mocks: {
          ...GLOBS.mocks
        }
      })
      const a = {
        height: `calc(100vh - ${GLOBS.test.statusBarHeight}px)`
      }

      expect(w.vm.mainStyle).toEqual(a)
    })
  })

  describe('textEditorStyle', () => {
    it('should return proper styles', () => {
      const w = mount(TextEditor, {
        mocks: {
          ...GLOBS.mocks
        }
      })
      const a = {
        fontSize: `${GLOBS.test.fontSize}px`,
        lineHeight: `${GLOBS.test.lineHeight}em`,
        textIndent: `${GLOBS.test.paragraphIndent}px`,
        maxWidth: `${GLOBS.test.maxWidth}px`,
        paddingTop: `${GLOBS.test.marginTop}px`,
        paddingBottom: `${GLOBS.test.marginBottom}px`
      }

      expect(w.vm.textEditorStyle).toEqual(a)
    })
  })
})
