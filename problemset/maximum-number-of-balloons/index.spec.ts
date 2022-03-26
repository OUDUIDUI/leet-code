import { maxNumberOfBalloons } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('“气球” 的最大数量', () => {
  testCase(maxNumberOfBalloons);
});

function testCase(fn: (text: string) => number) {
  it('示例一', () => {
    const text = 'nlaebolko';
    const expected = 1;
    expect(fn(text)).toBe(expected);
  });

  it('示例二', () => {
    const text = 'loonbalxballpoon';
    const expected = 2;
    expect(fn(text)).toBe(expected);
  });

  it('示例三', () => {
    const text = 'leetcode';
    const expected = 0;
    expect(fn(text)).toBe(expected);
  });
}
