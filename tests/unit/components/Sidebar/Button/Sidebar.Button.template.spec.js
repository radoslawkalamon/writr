import GLOBS from './Sidebar.Button.globs';

describe('@Components/Sidebar/Button#template', () => {
  describe('Wrapper @click function', () => {
    let w;
    beforeAll(() => {
      w = GLOBS.wrapperFactory();
      w.trigger('click');
    });

    it('should ACTION prop function be called once', () => {
      const a = 1;

      expect(GLOBS.test.action).toBeCalledTimes(a);
    });

    it('should ACTION prop function be called with NAME prop', () => {
      const a = [GLOBS.test.name];

      expect(GLOBS.test.action).toBeCalledWith(...a);
    });
  });

  describe('Wrapper classes: Name', () => {
    let w;
    beforeAll(() => {
      w = GLOBS.wrapperFactory();
    });

    it('should wrapper have classes: name', () => {
      const a = `sidebar-button--${GLOBS.test.name}`;

      expect(w.classes()).toContain(a);
    });
  });

  describe('Wrapper classes: Active', () => {
    it('should wrapper have classes: !active | (TOGGLE: false, ACTIVEPANEL: false)', () => {
      const w = GLOBS.wrapperFactory({
        toggle: false,
        activePanel: false,
      });

      expect(w.classes('sidebar-button--active')).toBeFalsy();
    });

    it('should wrapper have classes: !active | (TOGGLE: false, ACTIVEPANEL: NAME prop)', () => {
      const w = GLOBS.wrapperFactory({
        toggle: false,
        activePanel: GLOBS.test.name,
      });

      expect(w.classes('sidebar-button--active')).toBeFalsy();
    });

    it('should wrapper have classes: active | (TOGGLE: true, ACTIVEPANEL: NAME prop)', () => {
      const w = GLOBS.wrapperFactory({
        toggle: true,
        activePanel: GLOBS.test.name,
      });

      expect(w.classes('sidebar-button--active')).toBeTruthy();
    });

    it('should wrapper have classes: !active | (TOGGLE: true, ACTIVEPANEL: false)', () => {
      const w = GLOBS.wrapperFactory({
        toggle: true,
        activePanel: false,
      });

      expect(w.classes('sidebar-button--active')).toBeFalsy();
    });
  });

  describe('Wrapper TITLE attr', () => {
    let w;
    beforeAll(() => {
      w = GLOBS.wrapperFactory({
        alt: GLOBS.test.alt,
      });
    });

    it('should wrapper have TITLE attr equal to ALT prop', () => {
      const a = GLOBS.test.alt;

      expect(w.attributes('title')).toEqual(a);
    });
  });

  describe('Image', () => {
    let w;
    beforeAll(() => {
      GLOBS.test.parent.resolveIcon.fn.mockClear();
      w = GLOBS.wrapperFactory({
        alt: GLOBS.test.alt,
      });
    });

    it('should image have ALT attr equal to ALT prop', () => {
      const a = GLOBS.test.alt;

      expect(w.find('img').attributes('alt')).toEqual(a);
    });

    it('should parent function resolveIcon be called once', () => {
      const a = 1;

      expect(GLOBS.test.parent.resolveIcon.fn).toBeCalledTimes(a);
    });

    it('should parent function resolveIcon be called with ICON prop', () => {
      const a = [GLOBS.test.icon];

      expect(GLOBS.test.parent.resolveIcon.fn).toBeCalledWith(...a);
    });

    it('should image have SRC attr equal to resolveIcon return', () => {
      const a = GLOBS.test.iconUrl;

      expect(w.find('img').attributes('src')).toEqual(a);
    });
  });
});
