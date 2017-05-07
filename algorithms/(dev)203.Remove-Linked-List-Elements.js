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
var removeElements = function(head, val) {

    if(head === null) return null;
    var tempNode  = new ListNode();
    tempNode.next = head;
    var copyNode = head;

    while(copyNode !== null) {

        if(head.val == val) {

        }
        else {

        }
        
    }
    // listToString(head);
    // listToString(tempNode);
    
    return tempNode.next;




    // var node = new ListNode(0);

    // // [1,2,3] val=2，當走到[2]的時候，移除目前[2]這點的方法是讓[1]跳過2直接接[3]，變成[1,3]，
    // // 所以這邊需要先儲存前一個節點prev來備用
    // var prev =node;
    // node.next = head;

    // while(head != null){
    //     if(head.val != val){
    //         // 目前節點與val不相等，往下一個
    //         prev = head;
    //         head = head.next;
    //     } else {
    //         // 目前節點與val相等，跳過目前節點
    //         prev.next = head.next;
    //         head = head.next;           
    //     }
    // }
    // return node.next;
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


listToString(l1); // 1->2->3
listToString(removeElements(l1, 2)); // 1->3
