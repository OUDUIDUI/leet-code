import { describe, expect, it } from 'vitest'
import { longestCommonPrefix } from '.'
// need refactor
describe('最长公共前缀', () => {
  describe('暴力解法', () => {
    testCase(longestCommonPrefix)
  })
})

function testCase(fn: (strs: string[]) => string) {
  it('实例一', () => {
    const strs: string[] = ['flower', 'flow', 'flight']
    const expected = 'fl'

    expect(fn(strs)).toEqual(expected)
  })

  it('实例二', () => {
    const strs: string[] = ['dog', 'racecar', 'car']
    const expected = ''

    expect(fn(strs)).toEqual(expected)
  })
}
