const max = require('./max')

test('basics > max', () => {
  expect(max(0, 0)).toBe(0)
  expect(max(1, 0)).toBe(1)
  expect(max(-2, 3)).toBe(3)
  expect(max(-5, -2)).toBe(-2)
})