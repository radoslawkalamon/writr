# Unit test guide

```javascript
describe('@Components/${category}.${name}#${testsCategory}')
  describe('${function name}', () => {
    it('should after something done, something is equal to something', () => {
      // w = wrapper
      const w = shallowMount(componentName);
      // a = assertion
      const a = true;

      expect(w.vm.functionName).toEqual(a);
    });
  });
});
```

## Examples for naming

- `should name be equal to GLOBS.test.name, after clicking in button`
- `should element have style equal to GLOBS.test.style, after switching options`
- `should wrapper have exactly 2 elements`
- `should create proper class list`
- `should return icon URL`
- `should button's ALT prop be equal to GLOBS.test.alt`
- `should button's ALT prop be equal to TITLE prop`
- `should main <div> have one class with NAME prop` 
