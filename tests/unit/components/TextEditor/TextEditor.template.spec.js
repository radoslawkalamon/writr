import { shallowMount } from '@vue/test-utils';
import TextEditor from '@/components/TextEditor/TextEditor.vue';
import GLOBS from './TextEditor.globs';

describe('@Components/TextEditor#template', () => {
  let wrapper;
  beforeEach(() => {
    TextEditor.methods.onPaste = jest.fn(() => {});
    TextEditor.methods.onChange = jest.fn(() => {});

    wrapper = shallowMount(TextEditor, {
      mocks: {
        ...GLOBS.mocks,
      },
    });
  });

  describe('Styles & Attributes', () => {
    it('should .text-editor have spellcheck attribute equal to TEST_SPELLCHECKER', () => {
      const assertion = GLOBS.test.spellChecker.toString();

      expect(wrapper.attributes('spellcheck')).toEqual(assertion);
    });

    it('should .text-editor have style equal to textEditorStyle', () => {
      // Yep, this one is terrible ._.
      const assertion = wrapper.vm.textEditorStyle.replace(/(\r\n\t|\n|\r\t)/gm, '').replace(/\s/g, '');

      expect(wrapper.attributes('style').replace(/\s/g, '')).toEqual(assertion);
    });
  });

  describe('.text-editor children', () => {
    it('should .text-editor have exactly one child', () => {
      const elementChildren = wrapper.findAll('.text-editor > *');
      const assertion = 1;

      expect(elementChildren.length).toEqual(assertion);
    });

    it('should .text-editor child be <div>', () => {
      const assertion = 'div';

      expect(wrapper.contains(assertion)).toBeTruthy();
    });
  });

  describe('Input event', () => {
    it('should .text-editor on event input trigger onChange function exactly once', () => {
      wrapper.trigger('input');
      const assertion = 1;

      expect(TextEditor.methods.onChange).toHaveBeenCalledTimes(assertion);
    });
  });

  describe('Paste event', () => {
    it('should .text-editor on event paste trigger onPaste function exactly once', () => {
      wrapper.trigger('paste');
      const assertion = 1;

      expect(TextEditor.methods.onPaste).toHaveBeenCalledTimes(assertion);
    });
  });
});
