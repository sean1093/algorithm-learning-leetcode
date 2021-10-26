# Depth-First Search (DFS, 深度優先搜尋)

先往第一個節點的最深處走，再去找相鄰的點，如果該節點的邊上每一個節點都走過，則回到上一個點(backtracking)，繼續去找其他還沒走過的點

## recursive

```js
const dfs = (root) => {
    const res = [];
    const traversal = (root, res) => {
        if (root !== null) {
            res.push(root.val);
            if (root.left !== null) {
                traversal(root.left, res);
            }
            if (root.right !== null) {
                traversal(root.right, res);
            }
        }
    }
    traversal(root, res);
    return res;
};
```

## stack

```js
const dfs = (root) => {
    const res = [];
    const stack = []; 
    stack.push(root);
       
    while (stack.length > 0){
        const node = stack[stack.length - 1];
        stack.pop();
        res.push(node.val);

        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    return res;
};
```
