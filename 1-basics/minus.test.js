const minus = require('./minus')

test('basics > minus', () => {
  expect(minus(0, 0)).toBe(0)
  expect(minus(1, 0)).toBe(1)
  expect(minus(0, 3)).toBe(-3)
  expect(minus(5, -2)).toBe(7)
})