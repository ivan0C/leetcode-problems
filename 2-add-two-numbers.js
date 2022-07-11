/**
 * @param {Number} val 
 * @param {ListNode} next 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let newHead = new ListNode();
    let nextHead = newHead;
    let hasTen = false;
    while (true) {
        if (l1) {
            nextHead.val += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            nextHead.val += l2.val;
            l2 = l2.next;
        }

        if (hasTen) {
            nextHead.val += 1;
            hasTen = false;
        }

        if (nextHead.val > 9) {
            hasTen = true;
            nextHead.val %= 10;
        }

        nextHead.next = new ListNode();


        if (!l1 && !l2 && !hasTen) {
            nextHead.next = null;
            break;
        }
        else {
            nextHead = nextHead.next;
        }
    }
    return newHead;
};

/**
 * @param {Number[]} elems
 * @returns {ListNode}
 */
const generateList = (elems) => {
    const node = new ListNode();
    if (!elems.length) {
        node.val = undefined;
        return node;
    }

    let currentNode = node;
    for (let i = 0; i < elems.length; i++) {
        currentNode.val = elems[i];
        if (i + 1 != elems.length) {
            currentNode.next = new ListNode();
            currentNode = currentNode.next;
        }
    }
    currentNode.next = null;
    return node;
}

/**
 * @param {ListNode} node
 * @returns {Number[]}
 */
const returnNodeAsList = node => {
    const res = [];
    let currentNode = node;
    while (currentNode) {
        res.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return res;
}
