const strategies = {
  '=': (x, y) => x === y,
  '!=': (x, y) => x !== y,
  '~': (x, y) => x.indexOf(y) > -1,
  '!~': (x, y) => x.indexOf(y) === -1,
  '^': (x, y) => x.indexOf(y) === 0,
  '!^': (x, y) => x.indexOf(y) !== 0,
  $: (x, y) => ((x.length - y.length) < 0 ? false : x.lastIndexOf(y) === (x.length - y.length)),
  '!$': (x, y) => ((x.length - y.length) < 0 ? true : x.lastIndexOf(y) !== (x.length - y.length))
}
export default strategies
