const strategies = {
  '=': (x, y) => x.length === y,
  '>': (x, y) => x.length > y,
  '>=': (x, y) => x.length >= y,
  '<': (x, y) => x.length < y,
  '<=': (x, y) => x.length <= y
}
export default strategies
