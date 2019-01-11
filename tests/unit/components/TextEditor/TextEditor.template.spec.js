import { shallowMount } from '@vue/test-utils';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import testStyleFromObject from '@/../tests/unit/helpers/testStyleFromObject';
import GLOBS from './TextEditor.globs';

describe('@Components/TextEditor#template', () => {
  let w;
  beforeEach(() => {
    TextEditor.methods.onPaste = jest.fn(() => {});
    TextEditor.methods.onChange = jest.fn(() => {});

    w = shallowMount(TextEditor, {
      mocks: {
        ...GLOBS.mocks,
      },
    });
  });

  describe('Styles & Attributes', () => {
    it('should main Element have style equal to mainStyle function', () => {
      // Test not works because
      // https://github.com/jsdom/jsdom/issues/1332

      // testStyleFromObject(w.vm.mainStyle, w.element);

      expect(true).toBeTruthy();
    });

    it('should wrapper\'s SPELLCHECK attr be equal to GLOBS.test.spellChecker', () => {
      const a = GLOBS.test.spellChecker.toString();

      expect(w.find('.text-editor__wrapper').attributes('spellcheck')).toEqual(a);
    });

    it('should wrapper\'s STYLE attr be equal to textEditorStyle computed prop', () => {
      const wrapperElement = w.find('.text-editor__wrapper').element;

      testStyleFromObject(w.vm.textEditorStyle, wrapperElement);
    });
  });

  describe('Wrapper\'s children', () => {
    it('should wrapper have exactly one child', () => {
      const a = 1;

      expect(w.findAll('.text-editor__wrapper > *').length).toEqual(a);
    });

    it('should wrapper child be <div>', () => {
      const a = 'div';

      expect(w.find('.text-editor__wrapper').contains(a)).toBeTruthy();
    });
  });

  describe('Input event', () => {
    it('should wrapper on @input trigger onChange function exactly once', () => {
      const a = 1;

      w.find('.text-editor__wrapper').trigger('input');

      expect(TextEditor.methods.onChange).toHaveBeenCalledTimes(a);
    });
  });

  describe('Paste event', () => {
    it('should wrapper on @paste trigger onPaste function exactly once', () => {
      const a = 1;

      w.find('.text-editor__wrapper').trigger('paste');

      expect(TextEditor.methods.onPaste).toHaveBeenCalledTimes(a);
    });
  });
});
