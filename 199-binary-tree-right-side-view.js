/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    const finalArray = [];

    let curRoot = root;
    let depth = 0;
    let isOnLeftSide = false;

    while (true) {
        finalArray.push(curRoot.val);
        if (curRoot.right) {
            curRoot = curRoot.right;
        }
        else if (curRoot.left){
            curRoot = curRoot.left;
        }
        else {
            if (isOnLeftSide) {
                break;
            }
            else {
                curRoot = root.left;
                isOnLeftSide = true;
            }   
        }

        depth++;
    }

    return finalArray;
};


const testNode = Object();
testNode.val = 1;
testNode.left = Object();
testNode.right = Object();
testNode.left.val = 2;
testNode.left.left = null;
testNode.left.right = Object();
testNode.left.right.val = 4;
testNode.left.right.left = null;
testNode.left.right.right = null;
testNode.right = Object;
testNode.right.val = 3;
testNode.right.left = null;
testNode.right.right = null;

console.log(testNode)
console.log(rightSideView(testNode));