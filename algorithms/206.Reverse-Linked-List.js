/**
 * 206. Reverse Linked List
 * Reverse a singly linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */

// Q: 倒序一個 linked list 
// A: 先把所有的 -> 換成 <- 然後把head指到最後一個
// 參考: http://algorithms.tutorialhorizon.com/reverse-a-linked-list/
var reverseList = function(head) {
    var currNode = head;
    var prevNode = null;
    while(currNode !== null){
        var nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    head = prevNode;
    return head;
};


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

var l1 = new ListNode(2);
l1.next = new ListNode(3);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(7);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(8);
l2.next.next.next = new ListNode(8);
l2.next.next.next.next = new ListNode(11);
l2.next.next.next.next.next = new ListNode(12);

var l3 = new ListNode(2);

listToString(l1);
listToString(reverseList(l1));

listToString(l2);
listToString(reverseList(l2));

listToString(null);
listToString(reverseList(null));

listToString(l3);
listToString(reverseList(l3));