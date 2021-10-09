/**
 * 82. Remove Duplicates from Sorted List II
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    var node = new ListNode();
    node.next = head;
    var pre = node;
    while(pre) {
        var now = pre.next;
        var flag = false;       
        while(now && now.next && now.val === now.next.val) {
            flag = true;
            var next = now.next;
            now.next = next.next;
            next.next = null;
        }       
        if(flag) {
            pre.next = now.next;
            now.next = null;
            continue;
        }       
        pre = now;
    }  
    return node.next;   
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
listToString(deleteDuplicates(l1)); // 2 

var l2 = new ListNode(1);
l2.next = new ListNode(1);
l2.next.next = new ListNode(2);
l2.next.next.next = new ListNode(3);
l2.next.next.next.next = new ListNode(3);
l2.next.next.next.next.next = new ListNode(3);
listToString(deleteDuplicates(l2)); // 2

var l3 = new ListNode(1);
l3.next = new ListNode(1);
l3.next.next = new ListNode(2);
l3.next.next.next = new ListNode(2);
l3.next.next.next.next = new ListNode(2);
l3.next.next.next.next.next = new ListNode(2);
listToString(deleteDuplicates(l3)); // null 

var l4 = new ListNode(1);
l4.next = new ListNode(1);
l4.next.next = new ListNode(2);
l4.next.next.next = new ListNode(2);
l4.next.next.next.next = new ListNode(2);
l4.next.next.next.next.next = new ListNode(3);
listToString(deleteDuplicates(l4)); // 3 

var l5 = new ListNode(1);
l5.next = new ListNode(2);
l5.next.next = new ListNode(3);
l5.next.next.next = new ListNode(3);
l5.next.next.next.next = new ListNode(4);
l5.next.next.next.next.next = new ListNode(4);
l5.next.next.next.next.next.next = new ListNode(5);
listToString(deleteDuplicates(l5)); // 1->2->5

listToString(deleteDuplicates(null)); // null