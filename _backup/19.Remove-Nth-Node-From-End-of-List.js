/**
 * 19. Remove Nth Node From End of List
 * Given a linked list, remove the nth node from the end of list and return its head.
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {         
    var getListLength = function (h) {
        var t = 0;
        while(h) {
           t++;
           h = h.next;
        }
        return t; 
    };    
    var getNext = function(list, count, target){
        count++;
        if(count == target) {
            list.next = list.next.next;
        }        
        if(list.next){
           getNext(list.next, count, target); 
        }
        return count;
    };
    var list = new ListNode(0);
    list.next = head;  
    var l = getListLength(head);
    var t = (l-n);
    if(n > l) t = 0;
    getNext(list, 0, t+1);
    return list.next;
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

//test 
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(7);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
l2.next.next.next = new ListNode(4);
l2.next.next.next.next = new ListNode(11);
l2.next.next.next.next.next = new ListNode(8);

var l3 = new ListNode(12);
l3.next = new ListNode(0);
l3.next.next = new ListNode(9);
l3.next.next.next = new ListNode(7);

var l4 = new ListNode(1);

var l5 = new ListNode(12);
l5.next = new ListNode(0);
l5.next.next = new ListNode(9);
l5.next.next.next = new ListNode(7);

listToString(l1);
listToString(removeNthFromEnd(l1, 3)); // 2->3->7
listToString(l2);
listToString(removeNthFromEnd(l2, 1)); // 5->6->4->4->11
listToString(l3);
listToString(removeNthFromEnd(l3, 4)); // 0->9->7
listToString(null);
listToString(removeNthFromEnd(null, 4)); // 0->9->7
listToString(l5);
listToString(removeNthFromEnd(l5, 6)); // 0->9->7
listToString(l4);
listToString(removeNthFromEnd(l4, 1)); // runtime error


