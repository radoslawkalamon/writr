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