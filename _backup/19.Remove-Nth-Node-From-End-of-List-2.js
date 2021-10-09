/**
 * 19. Remove Nth Node From End of List
 * Given a linked list, remove the nth node from the end of list and return its head.
 * Finish date: 2019/01/13
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    if (!head || n <1) return head;
    // create dummy list when you want to delete first node
    const dummy = new ListNode(0);
    dummy.next = head;
    // find list length
    let temp = dummy;
    let length = 1;
    while (temp.next !== null) {
        length ++;
        temp = temp.next;
    }
    // delete target(length - n)
    length -= (n + 1);
    const getNode = (node, length) => {
        // corner case: delete last node
        if (length === 1 && node.next.next === null) {
            node.next = null;
        } else if (length === 0) {
            // delete target node
            node.next = node.next.next;
        } else if (node.next !== null) {
            length --;
            getNode(node.next, length)
        }
    }
    getNode(dummy, length);
    return dummy.next;
};

/**
 * 1. 先算長度
 * 2. 根據長度找出目標 node
 * 3. 迴圈到標 node 前一個後，把 next 指到目標 node的next(next.next)
 */
 const removeNthFromEnd = function(head, n) {
    // init
    let list = new ListNode(0);
    list.next = head;  
    let targetList = head;

    // get length
    let length = 0;
    while (targetList) {
       length ++;
       targetList = targetList.next;
    }

    // get remove target
    targetList = list;
    const target = length - n;

    // remove
    for (let i = 0; i < target; i++) {
        targetList = targetList.next;
    }
    targetList.next = targetList.next.next;
    
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


