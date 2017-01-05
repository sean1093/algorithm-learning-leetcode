/**
 * 02. Add Two Numbers  
 * You are given two linked lists representing two non-negative numbers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var ansList = new ListNode();
    var parent = ansList;
    var upgrade = 0;
    while( l1!== null || l2 !== null || upgrade !== 0) {
        var v1 = 0, v2 = 0;
        v1 = ( l1!==null ) ? l1.val : 0;
        v2 = ( l2!==null ) ? l2.val : 0;

        var val = v1 + v2 + upgrade;
        upgrade = 0;
        if(val > 9 ) {
            val = val - 10;
            upgrade = 1;
        }

        l1 = ( l1 !== null ) ? l1.next : null; 
        l2 = ( l2 !== null ) ? l2.next : null; 
        parent.next = new ListNode(val);
        parent = parent.next;
    }
    return ansList.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}


//test 
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
l2.next.next.next = new ListNode(4);

console.log(l1);
console.log(l2);

console.log(addTwoNumbers(l1, l2));