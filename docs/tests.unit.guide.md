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

- `should return classes: !active, name`
- `should call $store.dispatch function exactly once`
- `should button's ALT attr be equal to GLOBS.test.alt`
- `should button's ALT attr be equal to TITLE prop` 
- `should name be equal to GLOBS.test.name, after clicking in button`
- `should element have style equal to GLOBS.test.style, after switching options`
- `should wrapper have exactly 2 elements`
- `should return icon URL`
- `should main <div> have one class with NAME prop` 
