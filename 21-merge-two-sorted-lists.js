/**
 * 
 * @param {Number} val 
 * @param {ListNode} next 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;
    let currentHead1 = list1, currentHead2 = list2;
    let valueToStore;
    const resultNode = new ListNode();
    resultNode.val = undefined;
    resultNode.next = null;
    let currentResultNode = resultNode;
    while (true) {
        const currVal1 = returnValueIfExist(currentHead1);
        const currVal2 = returnValueIfExist(currentHead2);
        if (!isUndefined(currVal1) && !isUndefined(currVal2)) {
            const isFirst = currentHead1.val < currentHead2.val
            valueToStore = isFirst ? currVal1 : currVal2;
            currentHead1 = isFirst ? currentHead1.next : currentHead1;
            currentHead2 = isFirst ? currentHead2 : currentHead2.next;
        }
        else if (isUndefined(currVal1) && !isUndefined(currVal2)) {
            valueToStore = currVal2
            currentHead2 = currentHead2.next;
        }
        else if (!isUndefined(currVal1) && isUndefined(currVal2)) {
            valueToStore = currentHead1.val;
            currentHead1 = currentHead1.next;
        }


        const updated1 = returnValueIfExist(currentHead1);
        const updated2 = returnValueIfExist(currentHead2);
        currentResultNode.val = valueToStore;

        if (isUndefined(updated1) && isUndefined(updated2)) {
            break;
        }

        currentResultNode.next = new ListNode();
        currentResultNode = currentResultNode.next;
    }
    return resultNode;
};


const returnValueIfExist = node => {
    if (node && !isUndefined(node.val)) {
        return node.val;
    }
    return undefined;
}

const isUndefined = item => item === undefined;

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

console.log(
    returnNodeAsList(
        mergeTwoLists(
            generateList([]),
            generateList([])
        )
    )
)