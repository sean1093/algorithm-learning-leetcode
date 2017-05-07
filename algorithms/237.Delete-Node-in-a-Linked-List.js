/**
 * 237. Delete Node in a Linked List
 * Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 // Q: 刪除linked list中給定的node
 // A: 既然input是list中的一個node，那直接把這個node用他的child替換掉就可以了
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};