import { mount } from '@vue/test-utils';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import GLOBS from './TextEditor.globs';

describe('@Components/TextEditor#computed', () => {
  describe('spellcheckValue', () => {
    it('should return value equal to GLOBS.test.spellChecker', () => {
      const w = mount(TextEditor, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = GLOBS.test.spellChecker;

      expect(w.vm.spellcheckValue).toEqual(a);
    });
  });

  describe('mainStyle', () => {
    it('should return proper styles', () => {
      const w = mount(TextEditor, {
        mocks: {
          ...GLOBS.mocks,
        }
      });
      const a = [
        `height: calc(100vh - ${GLOBS.test.statusBarHeight}px)`,
      ].join(';');

      expect(w.vm.mainStyle).toEqual(a);
    });
  });

  describe('textEditorStyle', () => {
    it('should return proper styles', () => {
      const w = mount(TextEditor, {
        mocks: {
          ...GLOBS.mocks,
        },
      });
      const a = [
        `font-size: ${GLOBS.test.fontSize}px`,
        `line-height: ${GLOBS.test.lineHeight}em`,
        `text-indent: ${GLOBS.test.paragraphIndent}px`,
        `max-width: ${GLOBS.test.maxWidth}px`,
        `padding-top: ${GLOBS.test.marginTop}px`,
        `padding-bottom: ${GLOBS.test.marginBottom}px`,
      ].join(';');

      expect(w.vm.textEditorStyle).toEqual(a);
    });
  });
});
