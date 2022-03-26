import { twoDimensionalArrayEqual } from '~/utils/tools';
import { generateMatrix } from '.';
// need refactor
import { describe, it, expect } from 'vitest';
describe('螺旋矩阵 II', () => {
  testCase(generateMatrix);
});

function testCase(fn: (n: number) => number[][]) {
  it('示例一', () => {
    const n = 3;
    const expected = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];

    twoDimensionalArrayEqual(fn(n), expected);
  });

  it('示例二', () => {
    const n = 1;
    const expected = [[1]];

    twoDimensionalArrayEqual(fn(n), expected);
  });
}
