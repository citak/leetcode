const assert = require("node:assert");
/**
 * Runtime: 99 ms, faster than 97.99% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 47 MB, less than 85.55% of JavaScript online submissions for Add Two Numbers.
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum = 0;
    const thisNode = new ListNode(null);
    let current = thisNode;
    while(l1 !== null || l2 !== null) {
        sum = carry;
        carry = 0;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum > 9) {
            sum -= 10;
            carry = 1;
        }
        
        if (current.val === null) {
            current.val = sum;
        } else {
            current.next = new ListNode(sum);
            current = current.next;
        }
    }
    
    if (carry !== 0) {
        current.next = new ListNode(carry);
    }
    return thisNode;
};

function ListNode(val, next = null) {
     this.val = val;
     this.next = next;
}

function createListNode(arr) { 
    return arr.reduce((acc, curr) => new ListNode(curr, acc), null);
}

[
    [
        [
            [2,4,3],
            [5,6,4],
        ],
        [8,0,7]
    ],
    [
        [
            [0],
            [0],
        ],
        [0]
    ],
    [
        [
            [9,9,9,9,9,9,9],
            [9,9,9,9],
        ],
        [1,0,0,0,9,9,9,8]
    ],
].every(tests => {
    const [input, output] = tests;
    const [i1, i2] = input;
    const l1 = createListNode(i1);
    const l2 = createListNode(i2);
    try {
        assert.deepEqual(addTwoNumbers(l1, l2), createListNode(output));
        return true;
    } catch (err) {
        console.error(err.message);
        return false;
    }
});