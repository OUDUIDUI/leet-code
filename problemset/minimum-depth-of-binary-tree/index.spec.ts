import { TreeNode, createTreeNode } from '~/utils/treeNode';
import { minDepth, minDepth2 } from '.';
import { describe, it, expect } from 'vitest';

describe('二叉树的最小深度', () => {
  describe('深度优先搜索', function () {
    testCase(minDepth);
  });
  describe('广度优先搜索', function () {
    testCase(minDepth2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    [[3, 9, 20, null, null, 15, 7], 2],
    [[2, null, 3, null, 4, null, 5, null, 6], 5]
  ])('示例%#', (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
