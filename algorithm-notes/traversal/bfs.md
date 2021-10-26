# Breadth-First Search (BFS, 廣度優先搜尋)

把每一層的所有節點從左到右都走過一遍，才會往下一層接著去做一樣的邏輯，直到所有的節點都走完

## queue

```js
const bfs = function(root) {
    const res = [];
    const queue = []; 
    queue.push(root);

    while(queue.length > 0){
        const node = queue[0];
        res.push(node.val);
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
        queue.shift();
    } 

    return res;
};
```
