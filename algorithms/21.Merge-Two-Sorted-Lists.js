/**
 * 21. Merge Two Sorted Lists -dev
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    console.log(l1);
    console.log(l2);
    var getValue = function(list, node1, node2) {
        var node = new ListNode(0);
        if(node1 === null && node2 === null) {}
        else if (node1.val === undefined && node2.val === undefined) {}
        else if(node1 === null || node1.val === undefined) {
                list.next = node2;
        }
        else if(node2 === null || node2.val === undefined){
            console.log(node1);
            console.log(list);
            list.next = node1;
        } 
        else if(node1.val > node2.val) {
                node.val = node2.val;
                node2 = node2.next;
                list.next = node;
                getValue(node, node1, node2);                
        }
        else if(node1.val <= node2.val) {
            node.val = node1.val;
            node1 = node1.next;
            list.next = node;
            getValue(node, node1, node2);                
        }
    };
    var temp = new ListNode();
    getValue(temp, l1, l2);
    return temp.next;
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
l1.next = new ListNode(3);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(7);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(8);
l2.next.next.next = new ListNode(8);
l2.next.next.next.next = new ListNode(11);
l2.next.next.next.next.next = new ListNode(12);

listToString(l1);
listToString(l2);
listToString(mergeTwoLists(l1, l2)); // 2->3->3->3->5->6->7->8->11->12

//test 
var l3 = new ListNode();
var l4 = new ListNode();

listToString(l3);
listToString(l4);
listToString(mergeTwoLists(l3, l4)); // []

//test 
var l5 = new ListNode(1);
var l6 = new ListNode();

listToString(l5);
listToString(l6);
listToString(mergeTwoLists(l5, l6)); // [1]

