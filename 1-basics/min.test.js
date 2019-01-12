const min = require('./min')

test('basics > min', () => {
  expect(min(0, 0)).toBe(0)
  expect(min(1, 0)).toBe(0)
  expect(min(-2, 3)).toBe(-2)
  expect(min(-5, -2)).toBe(-5)
})