/**
 * 83. Remove Duplicates from Sorted List
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * @param {ListNode} head
 * @return {ListNode}
 */
 // 一個一個檢查。遇到child val == head val，就把child刪掉(head.next = child.next;)
var deleteDuplicates = function(head) {
    if(head !== null) {
        // console.log(head.val);
        if(head.next !== null) {
            var child = head.next;
            if(head.val == child.val) {
                head.next = child.next;
                deleteDuplicates(head);
            }
            else {
                deleteDuplicates(child);
            }
        }
    }
    return head;     
};

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

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var l1 = new ListNode(1);
l1.next = new ListNode(1);
l1.next.next = new ListNode(2);
listToString(deleteDuplicates(l1)); // 1->2 


var l2 = new ListNode(1);
l2.next = new ListNode(1);
l2.next.next = new ListNode(2);
l2.next.next.next = new ListNode(3);
l2.next.next.next.next = new ListNode(3);
l2.next.next.next.next.next = new ListNode(3);
listToString(deleteDuplicates(l2)); // 1->2->3 


var l3 = new ListNode(1);
l3.next = new ListNode(1);
l3.next.next = new ListNode(2);
l3.next.next.next = new ListNode(2);
l3.next.next.next.next = new ListNode(2);
l3.next.next.next.next.next = new ListNode(2);
listToString(deleteDuplicates(l3)); // 1->2 


listToString(deleteDuplicates(null)); // null