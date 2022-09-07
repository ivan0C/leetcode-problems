/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    if (!head || !head.next) return head;

    const nodesDict = {};
    let idx = 0;

    while (true) {
        if (!head) break;
        nodesDict[idx] = head;
        head = head.next;
        idx++;
    }
    return nodesDict[idx / 2 % 1 ? (idx / 2) << 0 : idx / 2]
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

console.log(middleNode(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
))