const maxAll = require('./maxAll')

test('basics > maxAll', () => {
  expect(maxAll([0, -2, 3, 7, 1])).toBe(7)
  expect(maxAll([1])).toBe(1)
})