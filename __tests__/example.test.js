// __tests__/example.test.js

function sum(a, b) {
    return a + b;
  }
  
  test('sum function adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 2)).toBe(1);
  });
  