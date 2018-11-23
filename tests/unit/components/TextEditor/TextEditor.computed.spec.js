import { shallowMount } from '@vue/test-utils';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import GLOBS from './TextEditor.globs';

describe('@Components/TextEditor#computed', () => {
  describe('textEditorStyle', () => {
    it('should return styles with test values', () => {
      const wrapper = shallowMount(TextEditor, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const assertion = `
      font-size: ${GLOBS.test.fontSize}px;
      line-height: ${GLOBS.test.lineHeight}em;
      text-indent: ${GLOBS.test.paragraphIndent}px;
      max-width: ${GLOBS.test.maxWidth}px;
      min-height: calc(100% - ${GLOBS.test.marginTop + GLOBS.test.marginBottom}px);
      margin-top: ${GLOBS.test.marginTop}px;
      margin-bottom: ${GLOBS.test.marginBottom}px;
      `;

      expect(wrapper.vm.textEditorStyle).toEqual(assertion);
    });
  });

  describe('spellcheckValue', () => {
    it('should return value equal to TEST_SPELLCHECKER', () => {
      const wrapper = shallowMount(TextEditor, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const assertion = GLOBS.test.spellChecker;

      expect(wrapper.vm.spellcheckValue).toEqual(assertion);
    });
  });
});
