/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next) return null;
    let idCounter = 0;
    while (true) {
        if (head && !head.id)
        {
            head.id = ++idCounter;
            head = head.next
        }
        else break;
    }

    return (idCounter && head) ? head : null
};