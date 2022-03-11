import { calculateMinimumHP } from './index';

describe('地下城游戏', () => {
  testCase(calculateMinimumHP);
});

function testCase(fn: (dungeon: number[][]) => number) {
  it('示例一', () => {
    const dungeon = [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5]
    ];
    const expected = 7;
    expect(fn(dungeon)).toBe(expected);
  });
}
