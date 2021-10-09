/**
 * 203. Remove Linked List Elements
 * Remove all elements from a linked list of integers that have value val.
 * Example
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 // Q: 給予一個val，刪除Linked List與他同值的所有元素
 // A: 從頭掃到尾，找到值相同的時候就把現在這個節點移除
 // 利用prev來紀錄上一個節點，要移除的時候直接 prev.next = head.next
var removeElements = function(head, val) {

    if(head === null) return null;
    var node = new ListNode(0);
    var prev = node;
    node.next = head;

    while(head !== null) {

        if(head.val == val) {
            prev.next = head.next;
            head = head.next; 
        }
        else {
            prev = head;
            head = head.next 
        }
        
    }
    return node.next;
};

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var listToString = function(head) {
    if(head instanceof ListNode){
        var st = "";
        while(head) {
           st += head.val; 
           if(head.next) st += "->";
           head = head.next;
        }
        console.log(st);         
    }
    else{
        console.log(null); 
    }
};

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

var l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(4);
l2.next.next.next = new ListNode(4);
l2.next.next.next.next = new ListNode(7);
l2.next.next.next.next.next = new ListNode(8);

var l3 = new ListNode(12);
l3.next = new ListNode(0);
l3.next.next = new ListNode(9);
l3.next.next.next = new ListNode(7);


listToString(removeElements(l1, 2)); // 1->3
listToString(removeElements(l2, 8)); 
listToString(removeElements(l3, 8));

