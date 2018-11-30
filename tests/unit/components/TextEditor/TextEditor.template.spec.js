import { shallowMount } from '@vue/test-utils';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
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
    it('should wrapper\'s "spellcheck" attr be equal to GLOBS.test.spellChecker', () => {
      const a = GLOBS.test.spellChecker.toString();

      expect(w.attributes('spellcheck')).toEqual(a);
    });

    it('should wrapper\'s "style" attr be equal to textEditorStyle computed prop', () => {
      // Yep, this one is terrible ._.
      const a = w.vm.textEditorStyle.replace(/(\r\n\t|\n|\r\t)/gm, '').replace(/\s/g, '');

      expect(w.attributes('style').replace(/\s/g, '')).toEqual(a);
    });
  });

  describe('Wrapper\'s children', () => {
    it('should wrapper have exactly one child', () => {
      const selector = '.text-editor > *';
      const a = 1;

      expect(w.findAll(selector).length).toEqual(a);
    });

    it('should wrapper children be <div>', () => {
      const a = 'div';

      expect(w.contains(a)).toBeTruthy();
    });
  });

  describe('Input event', () => {
    it('should wrapper on @input trigger onChange function exactly once', () => {
      w.trigger('input');
      const a = 1;

      expect(TextEditor.methods.onChange).toHaveBeenCalledTimes(a);
    });
  });

  describe('Paste event', () => {
    it('should wrapper on @paste trigger onPaste function exactly once', () => {
      w.trigger('paste');
      const a = 1;

      expect(TextEditor.methods.onPaste).toHaveBeenCalledTimes(a);
    });
  });
});
