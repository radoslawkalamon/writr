import { shallowMount } from '@vue/test-utils';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import GLOBS from './TextEditor.globs';

describe('@Components/TextEditor#computed', () => {
  describe('textEditorStyle', () => {
    it('should return proper styles', () => {
      const w = shallowMount(TextEditor, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = `
      font-size: ${GLOBS.test.fontSize}px;
      line-height: ${GLOBS.test.lineHeight}em;
      text-indent: ${GLOBS.test.paragraphIndent}px;
      max-width: ${GLOBS.test.maxWidth}px;
      min-height: calc(100% - ${GLOBS.test.marginTop + GLOBS.test.marginBottom}px);
      margin-top: ${GLOBS.test.marginTop}px;
      margin-bottom: ${GLOBS.test.marginBottom}px;
      `;

      expect(w.vm.textEditorStyle).toEqual(a);
    });
  });

  describe('spellcheckValue', () => {
    it('should return value equal to GLOBS.test.spellChecker', () => {
      const w = shallowMount(TextEditor, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = GLOBS.test.spellChecker;

      expect(w.vm.spellcheckValue).toEqual(a);
    });
  });
});
