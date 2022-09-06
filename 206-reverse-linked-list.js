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
var reverseListRecursice = function (head) {
    if (!head || !head.next) return head;
    const giveNewNode = (curHead, headToStore) => {
        headToStore.val = curHead.val;

        if (!curHead.next) {
            return headToStore;
        }
        return giveNewNode(
            curHead.next, new ListNode(
                0,
                headToStore
            )
        )
    }
    return giveNewNode(head, new ListNode());
};


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
var reverseList = function (head) {
    if (!head || !head.next) return head;
    
    let newHead = new ListNode();

    while (true) {
        newHead.val = head.val;
        if (!head.next) {
            break;
        }
        newHead = new ListNode(0, newHead);
        head = head.next;
    }
    return newHead
};
