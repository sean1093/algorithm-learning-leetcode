/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 * 在原來節點後面多加一個複製的 node，然後轉移 random，最後拆開成兩個
 */
/**
 * @param {Node} head
 * @return {Node}
 */


var copyRandomList = function(head) {
    if (!head) return null;
    let cur = head;
		
    // copy
    while(cur) {
    	const copyNode = new Node(cur.val);
        const nextNode = cur.next;
        copyNode.next = nextNode;
        // copyNode.random = cur.random;
		cur.next = copyNode;
        cur = nextNode;
    }
    
    // ??
    cur = head;
    while(cur){
        cur.next.random = cur.random ? cur.random.next : null;
        cur = cur.next.next;
    }
    
    cur = head;
    let copyHead = head.next;
    let copyCur = copyHead;
    while(cur) {
        cur.next = cur.next.next;
        cur = cur.next;
        copyCur.next = copyCur.next ? copyCur.next.next : null;
        copyCur = copyCur.next;
    }
    return copyHead;
};

