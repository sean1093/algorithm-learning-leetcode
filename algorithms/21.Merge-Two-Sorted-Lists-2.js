const mergeTwoLists = (l1, l2) => {
    let newList = new ListNode(0);
    let head = newList;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            newList.next = l1;
            l1 = l1.next;
        } else {
            newList.next = l2;
            l2 = l2.next;
        }
        newList = newList.next;
    }
	newList.next = l1 === null ? l2 : l1;
    return head.next;
};