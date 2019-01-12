const add = require('./add')

test('basics > add', () => {
  expect(add(0, 0)).toBe(0)
  expect(add(1, 0)).toBe(1)
  expect(add(0, 3)).toBe(3)
  expect(add(5, -2)).toBe(3)
})